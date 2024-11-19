import { Injectable } from '@angular/core';
//import { Producto, ProductoDto, ProductoCrearDto } from '../interfaces/producto.interface';
import { HttpClient } from '@angular/common/http';
import { CategoriaCrearDTO, CategoriaDTO } from '../interfaces/categorias.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { ProductoCrearDto, ProductoDto } from '../interfaces/producto.interface';
import { EncargadoTiendaActualizarDTO, EncargadoTiendaCrearDTO, EncargadoTiendaDTO } from '../interfaces/encargadotienda.interface';
import { RolDTO } from '../interfaces/roles.interface';
import { TiendaCrearDto, TiendaDto } from '../interfaces/tiendas.interfaces';
import { ClienteActualizarDTO, ClienteCrearDTO, ClienteDTO } from '../interfaces/clientes.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AlmacenService {
  

  /*listaProductos: Producto[] = [
    { nombre: 'Chocolate', precio: 14.50, stock: 0, precioOferta: 10, imagen: 'https://static.vecteezy.com/system/resources/previews/009/769/290/non_2x/chocolate-bar-flat-icon-free-vector.jpg', fecha: new Date() },
    { nombre: 'Pulparindo', precio: 4.50, stock: 2, imagen: 'https://www.mundofiesta.mx/wp-content/uploads/Pulparindo-Original-20-piezas-14-grs.png', fecha: new Date() },
    { nombre: 'Cacahuates', precio: 10.50, stock: 3, precioOferta: 10, imagen: 'https://emojitool.com/img/apple/ios-10.3/peanuts-4001.png', fecha: new Date() },
  ];*/


  private urlBaseCategorias = environment.apiURL + '/categorias';
  private urlBaseProductos = environment.apiURL + '/productos';
  private urlBaseEncargadoTienda = environment.apiURL + '/encargadotienda';
  private urlBaseRoles = environment.apiURL + '/roles';
  private urlBaseTiendas = environment.apiURL + '/tiendas';
  private urlBaseClientes = environment.apiURL + '/clientes';

  constructor(private http: HttpClient) {

  }

  getCategorias(): Observable<CategoriaDTO[]> {
    return this.http.get<CategoriaDTO[]>(this.urlBaseCategorias);
  }

  agregarCategoria(categoria: CategoriaCrearDTO): Observable<any> {
    return this.http.post(this.urlBaseCategorias, categoria);
  }

  actualizarCategoria(p0: number, categoria: CategoriaDTO): Observable<any> {
    return this.http.put(this.urlBaseCategorias, categoria);
  }

  getCategoria(id: number): Observable<CategoriaDTO> {
    return this.http.get<CategoriaDTO>(`${this.urlBaseCategorias}/${id}`);
  }

  eliminarCategoria(id: number): Observable<any> {
    return this.http.delete(`${this.urlBaseCategorias + '?id='}${id}`);
  }

  getProductos(): Observable<ProductoDto[]> {
    return this.http.get<ProductoDto[]>(this.urlBaseProductos);
  }

  agregarProducto(producto: ProductoCrearDto): Observable<any> {
    return this.http.post(this.urlBaseProductos, producto);
  }

  actualizarProducto(id: number, producto: ProductoDto): Observable<any> {
    return this.http.put(this.urlBaseProductos + "/" + id, producto);
  }

  eliminarProducto(id: number): Observable<any> {
    return this.http.delete(this.urlBaseProductos + "/" + id);
  }

  getProducto(id: number): Observable<ProductoDto> {
    return this.http.get<ProductoDto>(`${this.urlBaseProductos}/${id}`);
  }

  getEncargadoTiendas(): Observable<EncargadoTiendaDTO[]> {
    return this.http.get<EncargadoTiendaDTO[]>(this.urlBaseEncargadoTienda);
  }

  agregarEncargadoTienda(encargadoTienda: EncargadoTiendaCrearDTO): Observable<any> {
    return this.http.post(this.urlBaseEncargadoTienda, encargadoTienda);
  }

  actualizarEncargadoTienda(id: number, encargadoTienda: EncargadoTiendaActualizarDTO): Observable<any> {
    return this.http.put(this.urlBaseEncargadoTienda + "/" + id, encargadoTienda);
  }

  eliminarEncargadoTienda(id: number): Observable<any> {
    return this.http.delete(this.urlBaseEncargadoTienda + "/" + id);
  }

  getEncargadoTienda(id: number): Observable<EncargadoTiendaDTO> {
    return this.http.get<EncargadoTiendaDTO>(this.urlBaseEncargadoTienda + "/" + id);
  }


  getRoles(): Observable<RolDTO[]> {
    return this.http.get<RolDTO[]>(this.urlBaseRoles);
  }

  getRol(id: number): Observable<RolDTO> {
    return this.http.get<RolDTO>(`${this.urlBaseRoles}/${id}`);
  }

  getTiendas() {
    return this.http.get<TiendaDto[]>(this.urlBaseTiendas);
  }

  getTienda(id: number): Observable<TiendaDto> {
    return this.http.get<TiendaDto>(`${this.urlBaseTiendas}/${id}`);
  }

  agregarTienda(tienda: TiendaCrearDto): Observable<any> {
    return this.http.post(this.urlBaseTiendas, tienda);
  }

  actualizarTienda(id: number, tienda: TiendaDto): Observable<any> {
    return this.http.put(this.urlBaseTiendas + "/" + id, tienda);
  }

  eliminarTienda(id: number): Observable<any> {
    return this.http.delete(this.urlBaseTiendas + "/" + id);
  }

  getClientes(): Observable<ClienteDTO[]> {
    return this.http.get<ClienteDTO[]>(this.urlBaseClientes);
  }

  getCliente(id: number): Observable<ClienteDTO> {
    return this.http.get<ClienteDTO>(this.urlBaseClientes + "/" + id);
  }

  agregarCliente(cliente: ClienteCrearDTO): Observable<any> {
    return this.http.post(this.urlBaseClientes, cliente);
  }

  actualizarCliente(id: number, cliente: ClienteActualizarDTO): Observable<any> {
    return this.http.put(this.urlBaseClientes + "/" + id, cliente);
  }

  eliminarCliente(id: number): Observable<any> {
    return this.http.delete(this.urlBaseClientes + "/" + id);
  }
}
