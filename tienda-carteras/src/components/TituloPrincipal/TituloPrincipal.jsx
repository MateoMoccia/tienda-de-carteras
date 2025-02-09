import React from 'react'


//puede ser tambien: const {saludo} = props. 
// y en el return solo tendria que poner la funcion saludo

const TituloPrincipal = (props) => {
  return (
    <>
    <h1 style={props.colorFondo}>{props.saludo}</h1>
    </>
   
  )
}

export default TituloPrincipal




