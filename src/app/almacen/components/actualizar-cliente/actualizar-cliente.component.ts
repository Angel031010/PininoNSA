import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlmacenService } from '../../services/almacen.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteActualizarDTO, ClienteDTO } from '../../interfaces/clientes.interfaces';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.css']
})
export class ActualizarClienteComponent implements OnInit {

  form: FormGroup;
  id?: number;
  cliente?: ClienteDTO;

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
      correo: ['', { validators: [Validators.required, Validators.email] }],
      usuario: ['', { validators: Validators.required }],
    });
  }

  ngOnInit(): void {
    this.id = parseInt(this.active.snapshot.paramMap.get('id')!);
    if (this.id) {
      this.almacenService.getCliente(this.id).subscribe(cliente => {
        this.cliente = cliente;
        this.form.patchValue(cliente);  // Rellenamos el formulario con los datos existentes
      });
    }
  }

  actualizarCliente(): void {
    if (this.form.invalid) {
      return;
    }

    const clienteActualizado: ClienteActualizarDTO = this.form.value;
    if (this.id) {
      this.almacenService.actualizarCliente(this.id, clienteActualizado).subscribe({
        next: () => {
          this.router.navigate(['/Clientes']);  // Redirige a la lista de clientes
        },
        error: (error) => {
          console.error('Error al actualizar el cliente:', error);
        }
      });
    }
  }
}
