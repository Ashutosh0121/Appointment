import React from "react";
import App from "./App.jsx";
import Reactdom, { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/Appointment">
    <App />
  </BrowserRouter>
);
