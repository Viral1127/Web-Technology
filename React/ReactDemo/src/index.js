import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";
import Navbar from "./Navbar.js";
import Logo from "./Logo.js";
import Card from "./Card.js";
import WebPage from "./WebPage.js";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <>
    {/* <Logo />
    <Navbar />
    <Card /> */}
    <WebPage />
  </>
);
