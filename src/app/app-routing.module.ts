import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './almacen/pages/main-page/main-page.component';
import { NotFoundComponent } from './almacen/pages/not-found/not-found.component';
import { PrincipalComponent } from './principal/principal.component';
import { AgregarCategoriaComponent } from './almacen/components/agregar-categoria/agregar-categoria.component';
import { ActualizarCategoriaComponent } from './almacen/components/actualizar-categoria/actualizar-categoria.component';
import { EliminarCategoriaComponent } from './almacen/components/eliminar-categoria/eliminar-categoria.component';
import { ProductoPageComponent } from './almacen/pages/producto-page/producto-page.component';
import { AgregarProductoComponent } from './almacen/components/agregar-producto/agregar-producto.component';
import { ActualizarProductoComponent } from './almacen/components/actualizar-producto/actualizar-producto.component';
import { EliminarProductoComponent } from './almacen/components/eliminar-producto/eliminar-producto.component';
import { EncargadoTiendaPageComponent } from './almacen/pages/encargado-tienda-page/encargado-tienda-page.component';
import { AgregarEncargadoTiendaComponent } from './almacen/components/agregar-encargado-tienda/agregar-encargado-tienda.component';
import { ActualizarEncargadoTiendaComponent } from './almacen/components/actualizar-encargado-tienda/actualizar-encargado-tienda.component';
import { EliminarEncargadoTiendaComponent } from './almacen/components/eliminar-encargado-tienda/eliminar-encargado-tienda.component';
import { TiendaPageComponent } from './almacen/pages/tienda-page/tienda-page.component';
import { AgregarTiendaComponent } from './almacen/components/agregar-tienda/agregar-tienda.component';
import { ActualizarTiendaComponent } from './almacen/components/actualizar-tienda/actualizar-tienda.component';
import { EliminarTiendaComponent } from './almacen/components/eliminar-tienda/eliminar-tienda.component';
import { ClientePageComponent } from './almacen/pages/cliente-page/cliente-page.component';
import { AgregarClienteComponent } from './almacen/components/agregar-cliente/agregar-cliente.component';
import { ActualizarClienteComponent } from './almacen/components/actualizar-cliente/actualizar-cliente.component';
import { EliminarClienteComponent } from './almacen/components/eliminar-cliente/eliminar-cliente.component';

const routes: Routes = [
  {
    path: '', component: PrincipalComponent
  },
  {
    path: 'Categorias', component: MainPageComponent
  },
  {
    path: 'Categorias/Crear', component: AgregarCategoriaComponent
  },
  {
    path: 'Categorias/Actualizar/:id', component: ActualizarCategoriaComponent
  },
  {
    path: 'Categorias/Eliminar/:id', component: EliminarCategoriaComponent
  },
  {
    path: 'Productos', component: ProductoPageComponent
  },
  { 
    path: 'Productos/Crear', component: AgregarProductoComponent 
  },
  { 
    path: 'Productos/Actualizar/:id', component: ActualizarProductoComponent 
  },
  { 
    path: 'Productos/Eliminar/:id', component: EliminarProductoComponent
  },
  { 
    path: 'EncargadosTienda', component: EncargadoTiendaPageComponent
  },
  { 
    path: 'EncargadosTienda/Crear', component: AgregarEncargadoTiendaComponent
  },
  { 
    path: 'EncargadosTienda/Actualizar/:id', component: ActualizarEncargadoTiendaComponent
  },
  { 
    path: 'EncargadosTienda/Eliminar/:id', component: EliminarEncargadoTiendaComponent
  },
  { 
    path: 'Tiendas', component: TiendaPageComponent
  },
  { 
    path: 'Tiendas/Crear', component: AgregarTiendaComponent
  },
  { 
    path: 'Tiendas/Actualizar/:id', component: ActualizarTiendaComponent
  },
  { 
    path: 'Tiendas/Eliminar/:id', component: EliminarTiendaComponent
  },
  { 
    path: 'Clientes', component: ClientePageComponent
  },
  {
    path: 'Clientes/Crear', component: AgregarClienteComponent
  },
  { 
    path: 'Clientes/Actualizar/:id', component: ActualizarClienteComponent
  },
  { 
    path: 'Clientes/Eliminar/:id', component: EliminarClienteComponent
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
