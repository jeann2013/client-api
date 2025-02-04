import React, { useEffect, useState } from "react";
import { getPermissions } from "../services/permissionService";
import { Permission } from "../types";

const PermissionList: React.FC = () => {
  const [permissions, setPermissions] = useState<Permission[]>([]);

  useEffect(() => {
    const fetchPermissions = async () => {
      try {
        const data = await getPermissions();
        setPermissions(data);
      } catch (error) {
        console.error("Error al obtener los permisos", error);
      }
    };

    fetchPermissions();
  }, []);

  return (
    <div>
      <h2>Lista de Permisos</h2>
      <ul>
        {permissions.map((permission) => (
          <li key={permission.id}>
            {permission.nombreEmpleado} {permission.apellidoEmpleado} - Tipo: {permission.tipoPermisoId} - Fecha: {permission.fechaPermiso}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PermissionList;
