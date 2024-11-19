import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlmacenService } from '../../services/almacen.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EncargadoTiendaDTO } from '../../interfaces/encargadotienda.interface';
import { TiendaDto } from '../../interfaces/tiendas.interfaces';

@Component({
  selector: 'app-actualizar-tienda',
  templateUrl: './actualizar-tienda.component.html',
  styleUrl: './actualizar-tienda.component.css'
})
export class ActualizarTiendaComponent {

  form: FormGroup;
  id?: number;
  tienda?: any;
  listaEncargadosTienda: EncargadoTiendaDTO[] = []; 
  

  constructor(
    private fb: FormBuilder,
    private almacenService: AlmacenService,
    private router: Router,
    private active: ActivatedRoute  
  ) {
    this.form = this.fb.group({
      id: [''],
      nombreTienda: ['', {validators: Validators.required}],
      direccion: ['', {validators: Validators.required}],
      latitud: ['', {validators: Validators.required}],
      longitud: ['', {validators: Validators.required}],
      telefono: ['', {validators: Validators.required}],
      idEncargado: ['', {validators: Validators.required}]
    });

    this.almacenService.getEncargadoTiendas().subscribe(encargados => {
      this.listaEncargadosTienda = encargados;
    });

  }

  ngOnInit(): void {
    this.id = parseInt(this.active.snapshot.paramMap.get('id')!); 
    this.almacenService.getTienda(this.id).subscribe(t => {
      this.tienda = t;
      this.form.patchValue(t);
    });
  }

  actualizarTienda(): void {
    if (!this.form.valid) {
      return;
    }
    const tiendaActualizada = this.form.value as TiendaDto;
    this.almacenService.actualizarTienda(this.id!, tiendaActualizada).subscribe({
      next: () => {
        this.router.navigate(['/Tiendas']);
      }
    });
  }

}
