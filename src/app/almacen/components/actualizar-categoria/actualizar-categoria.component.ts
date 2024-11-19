import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlmacenService } from '../../services/almacen.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaDTO } from '../../interfaces/categorias.interface';

@Component({
  selector: 'app-actualizar-categoria',
  templateUrl: './actualizar-categoria.component.html',
  styleUrl: './actualizar-categoria.component.css'
})
export class ActualizarCategoriaComponent implements OnInit {

  form: FormGroup;
  id? : number;
  categoria? : CategoriaDTO;

  constructor(
    private fb: FormBuilder,
    private almacenService: AlmacenService,
    private router: Router,
    private active : ActivatedRoute
  ){
    this.form = this.fb.group({
      id : [''],
      nombreCategoria: ['', {validators: Validators.required}]
    });
  }
  ngOnInit(): void {
    this.id = parseInt(this.active.snapshot.paramMap.get('id')!);
    this.almacenService.getCategoria(this.id!).subscribe(c => {
      this.categoria = c;
      this.form.patchValue(c); //carga los datos del objeto en el formulario
    })
  }

  actualizarCategoria() : void {
    if (!this.form.valid) {
      return;
    }
    const categoriaActualizada = this.form.value as CategoriaDTO;
    this.almacenService.actualizarCategoria(this.id!, categoriaActualizada).subscribe({
      next: () => {
        this.router.navigate(['/Categorias']);
      }
    });
  }
}
