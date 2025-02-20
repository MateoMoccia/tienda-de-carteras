import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar/NavBar';  // Solo aquí
import Carteras from './Pages/Carteras';
import Accesorios from './Pages/Accesorios';
import Cinturones from './Pages/Cinturones';
import Bolsas from './Pages/Bolsas';
import Inicio from './Pages/Inicio';  
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


const App = () => {
  return (
    <Router>  
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/carteras" element={<Carteras />} />
        <Route path="/bolsas" element={<Bolsas />} />
        <Route path="/cinturones" element={<Cinturones />} />
        <Route path="/accesorios" element={<Accesorios />} />
        <Route path="/detalle/:id" element={<ItemDetailContainer />} />
        </Routes>
    </Router>
  );
};

export default App;
