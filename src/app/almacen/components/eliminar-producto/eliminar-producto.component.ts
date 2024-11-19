import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlmacenService } from '../../services/almacen.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-eliminar-producto',
  templateUrl: './eliminar-producto.component.html',
  styleUrl: './eliminar-producto.component.css'
})
export class EliminarProductoComponent {

  form: FormGroup;
  id? : number;

  constructor(
    private fb: FormBuilder,
    private almacenService: AlmacenService,
    private router: Router,
    private active: ActivatedRoute
  ){
    this.form = this.fb.group({
      nombreProducto: ['', Validators.required],
      precio: ['', Validators.required],
      stock: ['', Validators.required],
      idCategoria: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.id = parseInt(this.active.snapshot.paramMap.get('id')!);
    if (this.id) {
      this.almacenService.getProducto(this.id).subscribe(producto => {
        this.form.patchValue(producto);
      });
    }
  }

  eliminarProducto(): void {
    if (!this.id) {
      console.log("No se pudo obtener el ID para eliminar.");
      return;
    }
    this.almacenService.eliminarProducto(this.id).subscribe({
      next: () => {
        console.log("Producto eliminado con éxito.");
        this.router.navigate(['/Productos']);
      },
      error: (err) => {
        console.error("Error al eliminar el producto:", err);
      }
    });
  } 
  
  cancelar(): void {
    this.router.navigate(['/Productos']);
  }

}
