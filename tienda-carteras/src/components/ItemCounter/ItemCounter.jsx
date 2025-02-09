import { useState, useEffect } from "react";

//ESTA UTILIZADO EN CARTERAS POR ESO//

const ItemCounter = ({ stock }) => {
  // El setcontador es el que actualiza al contador
  const [contador, SetContador] = useState(1); // El 1 es el valor inicial que se muestra

  useEffect(() => {
    document.title = `Contador: ${contador}`;
  }, [contador]);

  const incrementar = () => {
    if (contador < stock) {
      SetContador(contador + 1);
    }
  };

  const decrementar = () => {
    if (contador > 1) {
      SetContador(contador - 1);
    }
  };

  return (
    <div>
      <button onClick={incrementar}>+</button>
      <p>{contador}</p>
      <button onClick={decrementar}>-</button>
    </div>
  );
};

export default ItemCounter;
