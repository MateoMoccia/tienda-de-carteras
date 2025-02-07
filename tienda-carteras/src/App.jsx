import React from 'react'
import TituloPrincipal from './components/TituloPrincipal/TituloPrincipal'
import ItemCounter from './components/ItemCounter/ItemCounter';

const App = () => {
  function saludo () {
    console.log("hola");
    
  }
  saludo ()
    let colorFondo= {backgroundColor: "green"}
  
  return (
    <>
    <TituloPrincipal saludo = "Prana" colorFondo={colorFondo} />
    <ItemCounter  stock={10}/>

    </>
  )
}

export default App




