import React, { useContext } from 'react';
import { CarritoContext } from '../../Context/CarritoContext'
import './CartWidget.css';


const Carrito = ({ cantidadProductos }) => {
  return (
    <div className="carrito-container">
      <img className="Carrito-boton" src="/img/carrito.png" alt="Carrito" />
      {cantidadProductos > 0 && <span className="carrito-cantidad">{cantidadProductos}</span>}
    </div>
  );
};

export default Carrito;