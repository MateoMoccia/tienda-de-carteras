// En Carteras.jsx (o el archivo correspondiente de Carteras)
import React from 'react';
import '../Styles/carteras.css'
import ItemCounter from '../components/ItemCounter/ItemCounter';

const Carteras = () => {
  const stock = 10; // O pasa el stock de alguna otra forma

  return (
    <div>
      <h2>si</h2>
      {/* Renderizamos el ItemCounter dentro de Carteras */}
      <ItemCounter stock={stock} />
    </div>
  );
};

export default Carteras;




