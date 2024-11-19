import { Component } from '@angular/core';
import { TiendaDto } from '../../interfaces/tiendas.interfaces';
import { AlmacenService } from '../../services/almacen.service';
import { EncargadoTiendaDTO } from '../../interfaces/encargadotienda.interface';

@Component({
  selector: 'app-tienda-page',
  templateUrl: './tienda-page.component.html',
  styleUrl: './tienda-page.component.css'
})
export class TiendaPageComponent {

  listaTiendas: TiendaDto[] = [];
  listaEncargados: EncargadoTiendaDTO[] = [];

  constructor(private almacenService: AlmacenService) {

  }

  ngOnInit(): void {
    this.almacenService.getTiendas().subscribe(tiendas => {
      this.listaTiendas = tiendas;
    });

    this.almacenService.getEncargadoTiendas().subscribe(encargados => {
      this.listaEncargados = encargados;
    });
  }

  obtenerNombreEncargado(idEncargado?: number): string {
    const encargado = this.listaEncargados.find(enc => enc.id === idEncargado);
    return encargado ? encargado.nombre : 'Sin encargado';
  }
}
