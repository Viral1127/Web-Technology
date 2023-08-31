import { createRoot } from "react-dom/client";
import CalcLayout from "./CalcLayout";
import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <>
    <CalcLayout />
  </>
);
