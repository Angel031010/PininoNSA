import { Component } from '@angular/core';
import { ProductoDto } from '../../interfaces/producto.interface';
import { AlmacenService } from '../../services/almacen.service';
import { CategoriaDTO } from '../../interfaces/categorias.interface';

@Component({
  selector: 'app-producto-page',
  templateUrl: './producto-page.component.html',
  styleUrl: './producto-page.component.css'
})
export class ProductoPageComponent {
  listaProductos: ProductoDto[] = [];
  listaCategorias: CategoriaDTO[] = [];

  constructor(private almacenService: AlmacenService) {
    
  }

  ngOnInit(): void {

    this.almacenService.getProductos().subscribe(productos => {
      this.listaProductos = productos;
    });


    // Obtener categorías
    this.almacenService.getCategorias().subscribe(categorias => {
      this.listaCategorias = categorias;
    });
    
  }

  // Método para obtener el nombre de la categoría por su ID
  obtenerNombreCategoria(idCategoria?: number): string {
    const categoria = this.listaCategorias.find(cat => cat.id === idCategoria);
    return categoria ? categoria.nombreCategoria : 'Sin categoría';
  }
}
