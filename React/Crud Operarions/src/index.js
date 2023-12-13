import { createRoot } from "react-dom/client";
import Home from "./Home";
import "./styles.css";
import WebPage from "./WebPage.js";
import Edit from "./Edit.js";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MockAPI from "./MockAPI";
import Add from "./Add.js";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WebPage />}>
          <Route path="/fac" element={<MockAPI />} />
          <Route path="/Add" element={<Add />} />
          <Route path="/Edit/:id" element={<Edit />} />
          <Route path="/:id" element={<Home />} />
          {/* <Route path="/fac" element={<FilterFac />} />
          <Route path="/stu" element={<Filter />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
