import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlmacenService } from '../../services/almacen.service';
import { CategoriaCrearDTO } from '../../interfaces/categorias.interface';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-agregar-categoria',
  templateUrl: './agregar-categoria.component.html',
  styleUrl: './agregar-categoria.component.css'
})
export class AgregarCategoriaComponent {

  form : FormGroup;

  constructor(private fb: FormBuilder, private almacenService: AlmacenService, private router : Router){
    this.form = this.fb.group({
      nombreCategoria: ['', {validators: Validators.required}]
    });
  }

  guardarCategoria() : void{
    if(!this.form.valid){
      return;
    }
    const categoria = this.form.value as CategoriaCrearDTO;
    this.almacenService.agregarCategoria(categoria).subscribe( {
      next: () => {
        this.router.navigate(['/Categorias']);
      }
    });
  }

  

}
