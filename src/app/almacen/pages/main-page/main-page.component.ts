import { Component, OnInit } from '@angular/core';
import { AlmacenService } from '../../services/almacen.service';
import { CategoriaDTO } from '../../interfaces/categorias.interface';

@Component({
  selector: 'app-almacen-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent implements OnInit{
  //listaProductos:Producto[] = [];
  listaCategorias: CategoriaDTO[] = [];

  constructor(private almacenService : AlmacenService){
    //this.listaProductos= almacenService.listaProductos;
    
    this.almacenService.getCategorias().subscribe(categorias => {
      this.listaCategorias = categorias;
      //console.log(categorias);
    });

  }
  ngOnInit(): void {
    
  }
} 
