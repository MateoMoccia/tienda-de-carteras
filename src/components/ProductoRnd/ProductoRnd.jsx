import React from 'react';
import './ProductoRnd.css';
import ItemCounter from '../ItemCounter/ItemCounter';

const ProductoRnd = ({ imagen, nombre, precio, agregarAlCarrito, sinExtras }) => {
  return (
    <div className='ProductosContainer'>
      <div className='ProductoRnd'>
        <div className='ImagenContainer'>
          <img src={imagen} alt={nombre} className='ImagenProductos' />
        </div>
        <h3 className='NombreProductos'>{nombre}</h3>
        {/* Mostrar precio solo si no estamos ocultando los extras */}
        {!sinExtras && <p className='PrecioProductos'>{precio}$</p>}
        {/* Mostrar el contador solo si no estamos ocultando los extras */}
        {!sinExtras && <ItemCounter agregarAlCarrito={agregarAlCarrito} />}
      </div>
    </div>
  );
};

export default ProductoRnd;
