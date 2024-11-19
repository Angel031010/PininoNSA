import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlmacenService } from '../../services/almacen.service';

@Component({
  selector: 'app-eliminar-tienda',
  templateUrl: './eliminar-tienda.component.html',
  styleUrl: './eliminar-tienda.component.css'
})
export class EliminarTiendaComponent {

  id?: number;

  constructor(
    private almacenService: AlmacenService,
    private router: Router,
    private active: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = parseInt(this.active.snapshot.paramMap.get('id')!, 10);
    if (!this.id) {
      console.error('No se encontró un ID válido en la ruta.');
    }
  }

  eliminarTienda(): void {
    if (!this.id) {
      console.log("No se pudo obtener el ID para eliminar.");
      return;
    }

    this.almacenService.eliminarTienda(this.id).subscribe({
      next: () => {
        console.log("Tienda eliminada con éxito.");
        this.router.navigate(['/Tiendas']);
      },
      error: (err) => {
        console.error("Error al eliminar la tienda:", err);
      }
    });
  }

  cancelar(): void {
    this.router.navigate(['/Tiendas']);
  }

}
