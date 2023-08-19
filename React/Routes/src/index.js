import { createRoot } from "react-dom/client";

import "./styles.css";
import WebPage from "./WebPage.js";
import FilterFac from "./FilterFac";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Filter from "./Filter";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WebPage />}>
          <Route path="/fac" element={<FilterFac />} />
          <Route path="/stu" element={<Filter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
