import React, { useRef } from 'react'
import './CartWidget.css'


const Carrito = () => {
 
const cantidadProductos = useRef (0)

function agregarAlCarrito () {
  cantidadProductos.current= cantidadProductos.current + 1
  console.log(cantidadProductos.current);
  
}

    return (
    <div>
      <img className="imgCarrito" src="../img/carrito.png" alt="" />
      <button onClick={agregarAlCarrito}>Pablo</button>
    </div>
  )
}

export default Carrito
