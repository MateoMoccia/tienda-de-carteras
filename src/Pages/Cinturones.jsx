
import React, { useContext } from 'react';
import '../Styles/cinturones.css'
import ProductosLista from '../components/ProductosRndLista/ProductosLista';
import { CarritoContext } from '../Context/CarritoContext';  
const Cinturones = () => {
   const { agregarAlCarrito } = useContext(CarritoContext);
  return (
    <div>
      <div>
      <h2>Cinturones</h2>
      <ProductosLista categoria="cinturones" agregarAlCarrito={agregarAlCarrito} /> {/* Solo muestra carteras */}
    </div>
    </div>
  )
}

export default Cinturones
