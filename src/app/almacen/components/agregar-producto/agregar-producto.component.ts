import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlmacenService } from '../../services/almacen.service';
import { Router } from '@angular/router';
import { ProductoCrearDto } from '../../interfaces/producto.interface';
import { CategoriaDTO } from '../../interfaces/categorias.interface';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrl: './agregar-producto.component.css'
})
export class AgregarProductoComponent {

  form: FormGroup;

  listaCategorias: CategoriaDTO[] = [];

  constructor(private fb: FormBuilder, private almacenService: AlmacenService, private router: Router) {
    this.form = this.fb.group({
      nombreProducto: ['', { validators: Validators.required }],
      precio: ['', { validators: Validators.required }],
      stock: ['', { validators: Validators.required }],
      idCategoria: ['', { validators: Validators.required }]
    });

    this.almacenService.getCategorias().subscribe(categorias => {
      this.listaCategorias = categorias;

    });
  }

  guardarProducto(): void {
    if (!this.form.valid) {
      return;
    }
    const producto = this.form.value as ProductoCrearDto;
    this.almacenService.agregarProducto(producto).subscribe({
      next: () => {
        this.router.navigate(['/Productos']);
      }
    });
  }
}
