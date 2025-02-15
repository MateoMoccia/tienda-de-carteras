import React from 'react';

const ProductoRnd = ({ imagen, nombre, precio }) => {
  return (
    <div className='ContainerProductos'>
      <img src={imagen} alt={nombre} className='ImagenProductos' />
      <h2 className='NombreProductos'>{nombre}</h2>
      <p className='PrecioProductos'>{precio}</p>
    </div>
  );
};

export default ProductoRnd;
