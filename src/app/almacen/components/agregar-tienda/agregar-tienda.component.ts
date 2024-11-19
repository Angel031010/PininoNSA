import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlmacenService } from '../../services/almacen.service';
import { Router } from '@angular/router';
import { TiendaCrearDto, TiendaDto } from '../../interfaces/tiendas.interfaces';
import { EncargadoTiendaDTO } from '../../interfaces/encargadotienda.interface';

@Component({
  selector: 'app-agregar-tienda',
  templateUrl: './agregar-tienda.component.html',
  styleUrl: './agregar-tienda.component.css'
})
export class AgregarTiendaComponent {

  form: FormGroup;

  listaEncargadosTienda: EncargadoTiendaDTO[] = []; 

  constructor(private fb: FormBuilder, private almacenService: AlmacenService, private router: Router) {
    this.form = this.fb.group({
      nombreTienda: ['', {validators: [Validators.required]}], 
      direccion: ['', {validators: [Validators.required]}],
      latitud: ['', {validators: [Validators.required]}],
      longitud: ['', {validators: [Validators.required]}],
      telefono: ['', {validators: [Validators.required]}],
      idEncargado: ['', {validators: [Validators.required]}]
    });

    
    this.almacenService.getEncargadoTiendas().subscribe(encargados => {
      this.listaEncargadosTienda = encargados;
    });
  }

  guardarTienda(): void {
    if (!this.form.valid) {
      return;
    }
    const tienda = this.form.value as TiendaCrearDto;
    this.almacenService.agregarTienda(tienda).subscribe({
      next: () => {
        this.router.navigate(['/Tiendas']);
      }
    });
  }

}
