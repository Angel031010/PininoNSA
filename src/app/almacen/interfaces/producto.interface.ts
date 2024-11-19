export interface ProductoCrearDto{
    nombreProducto: string;
    precio: number;
    stock: number;
    idCategoria: number;
}

export interface ProductoDto{
    id: number;
    nombreProducto?: string;
    precio?: number;
    stock?: number;
    idCategoria?: number;
}