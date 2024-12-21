import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./router";
import AppProvider from "./providers";

createRoot(document.getElementById("root")!).render(
  <AppProvider>
    <AppRouter/>
  </AppProvider>
);
