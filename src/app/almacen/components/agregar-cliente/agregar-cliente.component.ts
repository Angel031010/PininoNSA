import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteCrearDTO } from '../../interfaces/clientes.interfaces'; // Asegúrate de tener la interfaz para ClienteCrearDTO
import { AlmacenService } from '../../services/almacen.service';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private almacenService: AlmacenService,
    private router: Router
  ) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required]],
      apepat: ['', [Validators.required]],
      apemat: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
      usuario: ['', [Validators.required]],
      pwd: ['', [Validators.required]]
    });
  }

  // Método para guardar el cliente
  guardarCliente(): void {
    if (!this.form.valid) {
      return;
    }

    const cliente: ClienteCrearDTO = this.form.value;
    this.almacenService.agregarCliente(cliente).subscribe({
      next: () => {
        this.router.navigate(['/Clientes']); // Redirige a la lista de clientes después de guardar
      },
      error: (err) => {
        console.error('Error al agregar cliente:', err);
      }
    });
  }
}
