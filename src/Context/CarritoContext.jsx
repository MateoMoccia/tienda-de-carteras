import { createContext, useState } from "react";

export const CarritoContext = createContext();

const CarritoProvider = ({ children }) => {
  const [cantidadEnCarrito, setCantidadEnCarrito] = useState(0);

  const agregarAlCarrito = (cantidad) => {
    setCantidadEnCarrito((prevCantidad) => prevCantidad + cantidad);
  };

  return (
    <CarritoContext.Provider value={{ cantidadEnCarrito, agregarAlCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};

export default CarritoProvider;
