import React, { useState } from "react";
import { modifyPermission } from "../services/permissionService";

const ModifyPermissionForm: React.FC = () => {
  const [form, setForm] = useState({
    id: 0,
    nombreEmpleado: "",
    apellidoEmpleado: "",
    tipoPermisoId: 0,
    fechaPermiso: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await modifyPermission(form.id, form);
      alert("Permiso modificado exitosamente");
    } catch (error) {
      console.error("Error al modificar el permiso", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" name="id" placeholder="ID Permiso" onChange={handleChange} />
      <input type="text" name="nombreEmpleado" placeholder="Nombre" onChange={handleChange} />
      <input type="text" name="apellidoEmpleado" placeholder="Apellido" onChange={handleChange} />
      <input type="number" name="tipoPermisoId" placeholder="ID Tipo Permiso" onChange={handleChange} />
      <input type="date" name="fechaPermiso" onChange={handleChange} />
      <button type="submit">Modificar Permiso</button>
    </form>
  );
};

export default ModifyPermissionForm;
