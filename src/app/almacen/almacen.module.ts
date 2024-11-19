import { NgModule } from "@angular/core";
import { MainPageComponent } from "./pages/main-page/main-page.component";
import { ProductoComponent } from "./components/producto/producto.component";
import { CommonModule } from "@angular/common";
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { RouterModule } from "@angular/router";
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { provideHttpClient } from "@angular/common/http";
import { AgregarCategoriaComponent } from './components/agregar-categoria/agregar-categoria.component';
import { ReactiveFormsModule } from "@angular/forms";
import { ActualizarCategoriaComponent } from './components/actualizar-categoria/actualizar-categoria.component';
import { EliminarCategoriaComponent } from './components/eliminar-categoria/eliminar-categoria.component';
import { AgregarProductoComponent } from './components/agregar-producto/agregar-producto.component';
import { ProductoPageComponent } from './pages/producto-page/producto-page.component';
import { ActualizarProductoComponent } from './components/actualizar-producto/actualizar-producto.component';
import { EliminarProductoComponent } from './components/eliminar-producto/eliminar-producto.component';
import { EncargadoTiendaPageComponent } from './pages/encargado-tienda-page/encargado-tienda-page.component';
import { AgregarEncargadoTiendaComponent } from './components/agregar-encargado-tienda/agregar-encargado-tienda.component';
import { ActualizarEncargadoTiendaComponent } from './components/actualizar-encargado-tienda/actualizar-encargado-tienda.component';
import { EliminarEncargadoTiendaComponent } from './components/eliminar-encargado-tienda/eliminar-encargado-tienda.component';
import { TiendaPageComponent } from './pages/tienda-page/tienda-page.component';
import { AgregarTiendaComponent } from './components/agregar-tienda/agregar-tienda.component';
import { ActualizarTiendaComponent } from './components/actualizar-tienda/actualizar-tienda.component';
import { EliminarTiendaComponent } from './components/eliminar-tienda/eliminar-tienda.component';
import { ClientePageComponent } from './pages/cliente-page/cliente-page.component';
import { AgregarClienteComponent } from './components/agregar-cliente/agregar-cliente.component';
import { ActualizarClienteComponent } from './components/actualizar-cliente/actualizar-cliente.component';
import { EliminarClienteComponent } from './components/eliminar-cliente/eliminar-cliente.component';

@NgModule({
    declarations:[
        MainPageComponent,
        ProductoComponent,
        ListaProductosComponent,
        NotFoundComponent,
        AgregarCategoriaComponent,
        ActualizarCategoriaComponent,
        EliminarCategoriaComponent,
        AgregarProductoComponent,
        ProductoPageComponent,
        ActualizarProductoComponent,
        EliminarProductoComponent,
        EncargadoTiendaPageComponent,
        AgregarEncargadoTiendaComponent,
        ActualizarEncargadoTiendaComponent,
        EliminarEncargadoTiendaComponent,
        TiendaPageComponent,
        AgregarTiendaComponent,
        ActualizarTiendaComponent,
        EliminarTiendaComponent,
        ClientePageComponent,
        AgregarClienteComponent,
        ActualizarClienteComponent,
        EliminarClienteComponent
    ],
    exports:[
        MainPageComponent
    ],
    imports:[
        CommonModule,
        RouterModule,
        ReactiveFormsModule
    ],
    providers:[
        provideHttpClient() //Para que funcione el servicio http
    ]
})
export class AlmacenModule{

}