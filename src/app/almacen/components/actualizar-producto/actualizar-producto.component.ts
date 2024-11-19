import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductoDto } from '../../interfaces/producto.interface';
import { AlmacenService } from '../../services/almacen.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaDTO } from '../../interfaces/categorias.interface';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrl: './actualizar-producto.component.css'
})
export class ActualizarProductoComponent {

  form: FormGroup;
  id?: number;
  producto?: ProductoDto;
  listaCategorias: CategoriaDTO[] = [];

  constructor(
    private fb: FormBuilder,
    private almacenService: AlmacenService,
    private router: Router,
    private active: ActivatedRoute
  ) {
    this.form = this.fb.group({
      id: [''],
      nombreProducto: ['', { validators: Validators.required }],
      precio: ['', { validators: Validators.required }],
      stock: ['', { validators: Validators.required }],
      idCategoria: ['', { validators: Validators.required }]
    });

    this.almacenService.getCategorias().subscribe(categorias => {
      this.listaCategorias = categorias;

    });
  }

  ngOnInit(): void {
    this.id = parseInt(this.active.snapshot.paramMap.get('id')!); 
    this.almacenService.getProducto(this.id).subscribe(p => {
      this.producto = p;
      this.form.patchValue(p);
    });
  }

  actualizarProducto(): void {
    if (!this.form.valid) {
      return;
    }
    const productoActualizado = this.form.value as ProductoDto;
    this.almacenService.actualizarProducto(this.id!, productoActualizado).subscribe({
      next: () => {
        this.router.navigate(['/Productos']);
      }
    });
  }

}
