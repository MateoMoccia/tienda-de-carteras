import React, { useContext, useState, useEffect, useRef } from 'react';
import { CarritoContext } from '../../Context/CarritoContext';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './CartWidget.css';

const Carrito = () => {
  const { cantidadEnCarrito } = useContext(CarritoContext);  // Leer el contador de productos
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const carritoRef = useRef(null); // Referencia para el carrito
  const navigate = useNavigate(); // Inicializa useNavigate

  const toggleCarrito = () => {
    setMostrarCarrito(!mostrarCarrito);
  };

  // Cierra el carrito si se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (carritoRef.current && !carritoRef.current.contains(event.target)) {
        setMostrarCarrito(false);
      }
    };

    if (mostrarCarrito) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mostrarCarrito]);

  // Función para redirigir al checkout
  const handleFinalizarCompra = () => {
    navigate('/checkout'); // Redirige a la página de checkout
  };

  return (
    <div className="carrito-container" ref={carritoRef}>
      <button onClick={toggleCarrito}>
        <img className="Carrito-boton" src="/tienda-de-carteras//img/carrito.png" alt="Carrito" />
        {cantidadEnCarrito > 0 && <span className="carrito-cantidad">{cantidadEnCarrito}</span>}
      </button>
      {mostrarCarrito && <div className="carrito-sidebar">
        <CarritoSidebar />
        <div className="carrito-buttons">
          <button onClick={handleFinalizarCompra}>Finalizar compra</button> {/* Redirige al checkout */}
        </div>
      </div>}
    </div>
  );
};

const CarritoSidebar = () => {
  const { productosEnCarrito, vaciarCarrito, calcularTotal } = useContext(CarritoContext);

  return (
    <div className="carrito-sidebar-content">
      <h3>Mi carrito</h3>
      <ul>
        {productosEnCarrito.length === 0 ? (
          <li>No tienes productos en el carrito</li>
        ) : (
          productosEnCarrito.map((producto, index) => (
            <li key={index} className="carrito-item">
              <img src={producto.imagen} alt={producto.nombre} className="carrito-item-img" />
              <span>{producto.nombre} - {producto.cantidad} x {producto.precio} ARS</span>
            </li>
          ))
        )}
      </ul>

      <div className="carrito-total">
        <span>Total: {calcularTotal()}</span>
      </div>
      <div className="carrito-buttons">
        <button onClick={vaciarCarrito}>Vaciar carrito</button>
      </div>
    </div>
  );
};

export default Carrito;
