import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AdminContextProvider from "./context/admin";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AdminContextProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </AdminContextProvider>
);
