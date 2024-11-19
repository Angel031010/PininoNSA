export interface TiendaCrearDto {
    nombreTienda: string;
    direccion: string;
    latitud: number;
    longitud: number;
    telefono: string;
    idEncargado: number;
}

export interface TiendaDto {
    id: number;
    nombreTienda?: string;
    direccion?: string;
    latitud?: number;
    longitud?: number;
    telefono?: string;
    idEncargado?: number;
}
