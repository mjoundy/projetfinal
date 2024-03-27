import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beaute from "./pages/Beaute";
import Cuisine from "./pages/Cuisine";
import Mode from "./pages/Mode";
import Sante from "./pages/Sante";
import Maison from "./pages/Maison";
import NoPage from "./pages/Nopage";
import Navbar from "./Navbar";
import Lifestyle from "./pages/Lifestyle";

export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route index element={<Lifestyle/>}/>
          <Route path= "beaute" element={<Beaute />} />
          <Route path="mode" element={<Mode />} />
          <Route path="sante" element={<Sante />} />
          <Route path="cuisine" element={<Cuisine />} />
          <Route path="maison" element={<Maison />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}