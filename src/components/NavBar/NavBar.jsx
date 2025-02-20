import React, { useContext } from 'react';
import { CarritoContext } from '../../Context/CarritoContext';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from "react-router-dom";

const NavBar = () => {
  const { cantidadEnCarrito } = useContext(CarritoContext);  // Obtener la cantidad del carrito desde el contexto

  return (
    <header className="HeaderNav">
      <h1>Prana</h1>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/carteras">Carteras</Link></li>
          <li><Link to="/bolsas">Bolsas</Link></li>
          <li><Link to="/cinturones">Cinturones</Link></li>
          <li><Link to="/accesorios">Accesorios</Link></li>
        </ul>
      </nav>
      <CartWidget cantidadProductos={cantidadEnCarrito} />  {/* Pasar la cantidad actual al CartWidget */}
    </header>
  );
};

export default NavBar;

