// interfaces.ts

export interface ClienteCrearDTO {
    nombre: string;
    apepat: string;
    apemat: string;
    telefono: string;
    correo: string;
    usuario: string;
    pwd: string;
  }
  
  export interface ClienteActualizarDTO {
    nombre: string;
    apepat: string;
    apemat: string;
    telefono: string;
    correo: string;
    usuario: string;
  }
  
  export interface ClienteDTO {
    id: number;
    nombre: string;
    apepat: string;
    apemat: string;
    telefono: string;
    correo: string;
    usuario: string;
  }
  