import { useState } from "react"

const ItemCounter = ({stock}) => {
  
    //el setcontador es el que actualiza al contador//
    const [contador, SetContador]= useState (1) //el 1 es el valor inicial que se muestra//
    
    const incrementar = () => {
        if (contador < stock){
            SetContador (contador + 1)

        }
       
    }
    const decrementar = () => {
        if (contador > 1 ){
            SetContador (contador - 1)

        }
    }
           
  
    return (
    <div>
      <button onClick={incrementar}>+</button>
      <p>{contador}</p>
      <button onClick={decrementar}>-</button>
    </div>
  )
}

export default ItemCounter 
