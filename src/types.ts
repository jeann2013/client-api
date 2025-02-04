export interface Permission {
    id: number;
    nombreEmpleado: string;
    apellidoEmpleado: string;
    tipoPermisoId: number;
    fechaPermiso: string;
  }
  
  export interface PermissionType {
    id: number;
    descripcion: string;
  }
  