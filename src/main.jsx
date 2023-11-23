import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  
  
    
      <MemoryRouter>
      <App />
      </MemoryRouter>,
);
