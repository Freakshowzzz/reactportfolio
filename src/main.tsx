import "@/styles/global.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import HomePage from "@/pages/home";
import Layout from "@/pages/layout.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);