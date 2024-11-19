export interface EncargadoTiendaDTO
    {
        id : number;
        nombre : string;
        apepat : string;
        apemat : string;
        telefono : string;
        correo : string;
        usuario : string;
        idRol : number;

    }

    export interface EncargadoTiendaCrearDTO
    {
        nombre : string;
        apepat : string;
        apemat : string;
        telefono : string;
        correo : string;
        usuario : string;
        pwd : string;
        idRol : number;
    }
    
    export interface EncargadoTiendaActualizarDTO
    {
        id: number;
        correo : string;
        usuario : string;
        pwd : string;
        idRol : number;
    }