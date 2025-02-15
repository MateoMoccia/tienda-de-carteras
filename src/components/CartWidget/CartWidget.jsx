import React, { useState } from 'react'
import './CartWidget.css'

const Carrito = () => {
  const [cantidadProductos, setCantidadProductos] = useState(0)

  function agregarAlCarrito() {
    setCantidadProductos(cantidadProductos + 1)
    console.log(cantidadProductos + 1) // Aquí se puede ver el valor actualizado en consola
  }

  return (
    <div>
      <img src="/img/carrito.png" alt="Carrito" />
      <span>{cantidadProductos}</span> {/* Mostrar el número de productos en el carrito */}
      <button onClick={agregarAlCarrito}>Pablo</button>
    </div>
  )
}

export default Carrito
