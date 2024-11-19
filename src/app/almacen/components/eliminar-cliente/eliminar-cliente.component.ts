import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlmacenService } from '../../services/almacen.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-eliminar-cliente',
  templateUrl: './eliminar-cliente.component.html',
  styleUrls: ['./eliminar-cliente.component.css']
})
export class EliminarClienteComponent implements OnInit {

  form: FormGroup;
  id?: number;


  constructor(
    private fb: FormBuilder,
    private almacenService: AlmacenService,
    private router: Router,
    private active: ActivatedRoute
  ) {
    this.form = this.fb.group({
      nombre: ['', { validators: Validators.required }],
      apepat: ['', { validators: Validators.required }],
      apemat: ['', { validators: Validators.required }],
      telefono: ['', { validators: Validators.required }],
      correo: ['', { validators : Validators.required }], 
      usuario: ['', { validators: Validators.required }],
      pwd: ['', { validators: Validators.required }]
    });
  }

  ngOnInit(): void {
    this.id = parseInt(this.active.snapshot.paramMap.get('id')!, 10);
    if (this.id) {
      this.almacenService.getCliente(this.id).subscribe(cliente => {
        this.form.patchValue(cliente);
      });
    }
  }

  eliminarCliente(): void {
    if (!this.id) {
      console.log('No se pudo obtener el ID para eliminar.');
      return;
    }
    this.almacenService.eliminarCliente(this.id).subscribe({
      next: () => {
        console.log('Cliente eliminado con éxito.');
        this.router.navigate(['/Clientes']);
      },
      error: (err) => {
        console.error('Error al eliminar el cliente:', err);
      }
    });
  }

  cancelar(): void {
    this.router.navigate(['/Clientes']);
  }
}
