import React from 'react'
import ProductoRnd from '../ProductoRnd/productoRnd'


const Productos = [
    {id: 1, imagen: "/img/Mini-Bag-Prana.png", nombre: "Mini Bag Prana", precio: "20.000"},
    {id: 2, imagen: "/img/Mini-Bag-Ananda.png", nombre: "Mini Bag Ananda", precio: "26.200"},
    {id: 3, imagen: "/img/Mini-Bag-Clasica.png", nombre: "Mini Bag Clasica", precio: "21.600"},
    {id: 4, imagen: "/img/Mini-Bag-Arya.png", nombre: "Mini Bag Arya", precio: "26.400"},
  ];
  


const ProductosLista = () => {
  return (
    <div className="product-list">
      {Productos.map((producto) => ( 
        <ProductoRnd
        key = {producto.id}
      image = {producto.imagen}
      nombre = {producto.nombre}
      precio =  {producto.precio}
      />
      ))}
 
    </div>
  )
}

export default ProductosLista
