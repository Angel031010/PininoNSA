import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EncargadoTiendaActualizarDTO, EncargadoTiendaDTO } from '../../interfaces/encargadotienda.interface';
import { RolDTO } from '../../interfaces/roles.interface';
import { AlmacenService } from '../../services/almacen.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-encargado-tienda',
  templateUrl: './actualizar-encargado-tienda.component.html',
  styleUrl: './actualizar-encargado-tienda.component.css'
})
export class ActualizarEncargadoTiendaComponent {

  form: FormGroup;
  id? : number;
  encargado? : EncargadoTiendaDTO;
  listaRoles: RolDTO[] = [];

  constructor(
    private fb: FormBuilder,
    private almacenService: AlmacenService,
    private router: Router,
    private active: ActivatedRoute
  ) {
    this.form = this.fb.group({
      id: [''],
      telefono: ['', { validators: Validators.required }],
      correo: ['', { validators: Validators.required }],
      usuario: ['', { validators: Validators.required }],
      idRol: ['', { validators: Validators.required }]
    });
  }

  ngOnInit(): void {
    this.id = parseInt(this.active.snapshot.paramMap.get('id')!);
    this.almacenService.getEncargadoTienda(this.id!).subscribe(e => {
      this.encargado = e;
      this.form.patchValue(e);
    });

    this.almacenService.getRoles().subscribe(roles => {
      this.listaRoles = roles;
    });
  }

  actualizarEncargadoTienda() {
    if (!this.form.valid) {
      return;
    }
    const encargadoActualizado = this.form.value as EncargadoTiendaActualizarDTO;
    this.almacenService.actualizarEncargadoTienda(this.id!, encargadoActualizado).subscribe({
      next: () => {
        this.router.navigate(['/EncargadosTienda']);
      }
    });
  }

}
