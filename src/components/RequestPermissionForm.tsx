import React, { useState } from "react";
import { requestPermission } from "../services/permissionService";

const RequestPermissionForm: React.FC = () => {
  const [form, setForm] = useState({
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
      const id = await requestPermission(form);
      alert(`Permiso creado con ID: ${id}`);
    } catch (error) {
      console.error("Error al solicitar el permiso", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nombreEmpleado" placeholder="Nombre" onChange={handleChange} />
      <input type="text" name="apellidoEmpleado" placeholder="Apellido" onChange={handleChange} />
      <input type="number" name="tipoPermisoId" placeholder="ID Tipo Permiso" onChange={handleChange} />
      <input type="date" name="fechaPermiso" onChange={handleChange} />
      <button type="submit">Solicitar Permiso</button>
    </form>
  );
};

export default RequestPermissionForm;
