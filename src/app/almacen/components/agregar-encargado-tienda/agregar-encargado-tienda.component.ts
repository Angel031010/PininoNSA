import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlmacenService } from '../../services/almacen.service';
import { EncargadoTiendaCrearDTO } from '../../interfaces/encargadotienda.interface';
import { Router } from '@angular/router';
import { RolDTO } from '../../interfaces/roles.interface';

@Component({
  selector: 'app-agregar-encargado-tienda',
  templateUrl: './agregar-encargado-tienda.component.html',
  styleUrl: './agregar-encargado-tienda.component.css'
})
export class AgregarEncargadoTiendaComponent {
  form : FormGroup;

  listaRoles: RolDTO[] = [];

  constructor(private fb: FormBuilder, private almacenService: AlmacenService, private router : Router){
    this.form = this.fb.group({
      nombre: ['', {validators: Validators.required}],
      apepat: ['', {validators: Validators.required}],
      apemat: ['', {validators: Validators.required}],
      telefono: ['', {validators: Validators.required}],
      correo: ['', {validators: Validators.required}],
      usuario: ['', {validators: Validators.required}],
      pwd: ['', {validators: Validators.required}],
      idRol: ['', {validators: Validators.required}]
    });
  }

  ngOnInit(): void {
    this.almacenService.getRoles().subscribe(roles => {
      this.listaRoles = roles;
    });
  }

  guardarEncargadoTienda() : void{
    if(!this.form.valid){
      return;
    }
    const encargadoTienda = this.form.value as EncargadoTiendaCrearDTO;
    this.almacenService.agregarEncargadoTienda(encargadoTienda).subscribe( {
      next: () => {
        this.router.navigate(['/EncargadosTienda']);
      }
    });
  }
}
