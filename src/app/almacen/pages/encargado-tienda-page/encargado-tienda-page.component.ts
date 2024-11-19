import { Component } from '@angular/core';
import { EncargadoTiendaDTO } from '../../interfaces/encargadotienda.interface';
import { AlmacenService } from '../../services/almacen.service';
import { RolDTO } from '../../interfaces/roles.interface';

@Component({
  selector: 'app-encargado-tienda-page',
  templateUrl: './encargado-tienda-page.component.html',
  styleUrl: './encargado-tienda-page.component.css'
})
export class EncargadoTiendaPageComponent {
  listaEncargadoTiendas: EncargadoTiendaDTO[] = [];
  listaRoles: RolDTO[] = [];

  constructor(private almacenService: AlmacenService) {

  }

  ngOnInit(): void {
    this.almacenService.getEncargadoTiendas().subscribe(encargadoTiendas => {
      this.listaEncargadoTiendas = encargadoTiendas;
    });

    this.almacenService.getEncargadoTiendas().subscribe(encargadosTienda => {
      this.listaEncargadoTiendas = encargadosTienda;
    });

    this.almacenService.getRoles().subscribe(roles => {
      this.listaRoles = roles;
    });
  }

  obtenerNombreRol(idRol?: number): string {
    const rol = this.listaRoles.find(rol => rol.id === idRol);
    return rol ? rol.rol : 'Sin rol';
  }
}
