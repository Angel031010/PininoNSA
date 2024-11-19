import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlmacenService } from '../../services/almacen.service';

@Component({
  selector: 'app-eliminar-categoria',
  templateUrl: './eliminar-categoria.component.html',
  styleUrls: ['./eliminar-categoria.component.css']
})
export class EliminarCategoriaComponent implements OnInit {

  form: FormGroup;
  id? : number;

  constructor(
    private fb: FormBuilder,
    private almacenService: AlmacenService,
    private router: Router,
    private active: ActivatedRoute
  ) {
    this.form = this.fb.group({
      nombreCategoria: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.id = parseInt(this.active.snapshot.paramMap.get('id')!);
    if (this.id) {
      this.almacenService.getCategoria(this.id).subscribe(categoria => {
        this.form.patchValue(categoria);
      });
    }
  }

  eliminarCategoria(): void {
    if (!this.id) {
      console.log("No se pudo obtener el ID para eliminar.");
      return;
    }
    this.almacenService.eliminarCategoria(this.id).subscribe({
      next: () => {
        console.log("Categoría eliminada con éxito.");
        this.router.navigate(['/Categorias']);
      },
      error: (err) => {
        console.error("Error al eliminar la categoría:", err);
      }
    });
  } 
  
  cancelar(): void {
    this.router.navigate(['/Categorias']);
  }  
  
}
