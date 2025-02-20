import { Link } from 'react-router-dom';  // Agregar esta importación

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
        <Link to="/checkout">
          <button>Finalizar compra</button>
        </Link>
      </div>
    </div>
  );
};
