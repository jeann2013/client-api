import React from "react";
import RequestPermissionForm from "./components/RequestPermissionForm";
import PermissionList from "./components/PermissionList";
import ModifyPermissionForm from "./components/ModifyPermissionForm";

const App: React.FC = () => {
  return (
    <div>
      <h1>Gestión de Permisos</h1>
      <RequestPermissionForm />
      <PermissionList />
      <ModifyPermissionForm />
    </div>
  );
};

export default App;
