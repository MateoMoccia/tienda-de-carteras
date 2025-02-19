import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar/NavBar';  // Solo aquí
import Carteras from './Pages/Carteras';
import Accesorios from './Pages/Accesorios';
import Cinturones from './Pages/Cinturones';
import Bolsas from './Pages/Bolsas';
import Inicio from './Pages/Inicio';  

const App = () => {
  return (
    <Router>  {/* Mantén solo el Router aquí */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/carteras" element={<Carteras />} />
        <Route path="/bolsas" element={<Bolsas />} />
        <Route path="/cinturones" element={<Cinturones />} />
        <Route path="/accesorios" element={<Accesorios />} />
      </Routes>
    </Router>
  );
};

export default App;
