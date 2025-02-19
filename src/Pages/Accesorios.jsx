
import React, { useContext } from 'react';
import '../Styles/accesorios.css'
import ProductosLista from '../components/ProductosRndLista/ProductosLista';
import { CarritoContext } from '../Context/CarritoContext';  
const Accesorios = () => {
  const { agregarAlCarrito } = useContext(CarritoContext);
  return (
    <div>
      <div>
      <h2>Accesorios</h2>
      <ProductosLista categoria="accesorios" agregarAlCarrito={agregarAlCarrito} /> {/* Solo muestra carteras */}
    </div>
    </div>
  )
}

export default Accesorios
