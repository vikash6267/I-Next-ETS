import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AdminContextProvider from "./context/admin";
import SidebarContextProvider from "./context/sidebar";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AdminContextProvider>
    <SidebarContextProvider>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </SidebarContextProvider>
  </AdminContextProvider>
);
