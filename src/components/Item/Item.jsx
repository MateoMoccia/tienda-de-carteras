import React from 'react'

const Item = (id,nombre,precio,img) => {
  return (
    <div>
      <img src={img} alt={nombre} />
      <h3>Nombre: {nombre} </h3>
      <p>Id: {id}</p> 
      <p>Precio: {precio}</p>
    </div>
  )
}

export default Item
