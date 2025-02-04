import axios from "axios";

// Configuración de Axios con la URL base del backend
const api = axios.create({
  baseURL: "http://localhost:5052/api", // Cambia esta URL según tu backend
});

export default api;
