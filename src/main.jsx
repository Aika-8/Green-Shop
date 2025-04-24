import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { ToastContainer } from "react-toastify";
import { ProductsProvider } from "./context/ProductsContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer />
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </StrictMode>
);
