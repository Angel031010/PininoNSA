import { Component, OnInit } from '@angular/core';
import { AlmacenService } from '../../services/almacen.service';
import { ClienteDTO } from '../../interfaces/clientes.interfaces';

@Component({
  selector: 'app-cliente-page',
  templateUrl: './cliente-page.component.html',
  styleUrls: ['./cliente-page.component.css']
})
export class ClientePageComponent implements OnInit {

  listaClientes: ClienteDTO[] = [];

  constructor(private almacenService: AlmacenService) { }

  ngOnInit(): void {
    // Llamada al servicio para obtener los clientes
    this.almacenService.getClientes().subscribe(clientes => {
      this.listaClientes = clientes;
    });
  }
}
