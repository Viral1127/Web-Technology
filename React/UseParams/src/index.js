import { createRoot } from "react-dom/client";
import Faculty from "./Faculty";
import Details from "./Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/fac" element={<Faculty />} />
          <Route path="/details/:id" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
