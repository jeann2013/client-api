import api from "./api";
import { Permission } from "../types";

export const getPermissions = async (): Promise<Permission[]> => {
  const response = await api.get<Permission[]>("/permissions");
  return response.data;
};

export const requestPermission = async (permission: Omit<Permission, "id">): Promise<number> => {
  const response = await api.post<number>("/permissions", permission);
  return response.data;
};

export const modifyPermission = async (id: number, permission: Omit<Permission, "id">): Promise<void> => {
  await api.put(`/permissions/${id}`, permission);
};
