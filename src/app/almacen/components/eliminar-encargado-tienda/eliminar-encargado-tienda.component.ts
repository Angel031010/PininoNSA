import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlmacenService } from '../../services/almacen.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-eliminar-encargado-tienda',
  templateUrl: './eliminar-encargado-tienda.component.html',
  styleUrl: './eliminar-encargado-tienda.component.css'
})
export class EliminarEncargadoTiendaComponent {

  form: FormGroup;
  id? : number;

  constructor(
    private fb: FormBuilder,
    private almacenService: AlmacenService,
    private router: Router,
    private active: ActivatedRoute
  ){
    this.form = this.fb.group({
      telefono: ['', { validators: Validators.required }],
      correo: ['', { validators: Validators.required }],
      usuario: ['', { validators: Validators.required }],
      idRol: ['', { validators: Validators.required }]
    });
  }

  ngOnInit(): void {
    this.id = parseInt(this.active.snapshot.paramMap.get('id')!);
    if (this.id) {
      this.almacenService.getEncargadoTienda(this.id).subscribe(encargado => {
        this.form.patchValue(encargado);
      });
    }
  }

  eliminarEncargadoTienda() {
    if (!this.id) {
      console.log("No se pudo obtener el ID para eliminar.");
      return;
    }
    this.almacenService.eliminarEncargadoTienda(this.id).subscribe({
      next: () => {
        console.log("Encargado eliminado con éxito.");
        this.router.navigate(['/EncargadosTienda']);
      },
      error: (err) => {
        console.error("Error al eliminar el encargado:", err);
      }
    });
  }

  cancelar(): void {
    this.router.navigate(['/EncargadosTienda']);
  }

}
