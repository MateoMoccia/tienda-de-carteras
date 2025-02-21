import React from 'react';
import ProductoRnd from './ProductoRnd/ProductoRnd';
import './ProductoLista.css';



export const Productos = [
  { id: 1, imagen: "/tienda-de-carteras//img/Mini-Bag-Prana.png", nombre: "Mini Bag Prana", precio: "20.000", categoria: "carteras" },
  { id: 2, imagen: "/tienda-de-carteras//img/Mini-Bag-Ananda.png", nombre: "Mini Bag Ananda", precio: "26.200", categoria: "carteras" },
  { id: 3, imagen: "/tienda-de-carteras//img/Mini-Bag-Clasica.png", nombre: "Mini Bag Clasica", precio: "21.600", categoria: "carteras" },
  { id: 4, imagen: "/tienda-de-carteras//img/Mini-Bag-Arya.png", nombre: "Mini Bag Arya", precio: "26.400", categoria: "carteras" },
  { id: 5, imagen: "/tienda-de-carteras//img/Mini-Bag-Lua.png", nombre: "Mini Bag Lua", precio: "27.000", categoria: "carteras" },
  { id: 6, imagen: "/tienda-de-carteras//img/Mini-Bag-Napoles.png", nombre: "Mini Bag Napoles", precio: "23.500", categoria: "carteras" },
  { id: 7, imagen: "/tienda-de-carteras//img/Mini-Bag-Sara.png", nombre: "Mini Bag Sara", precio: "22.000", categoria: "carteras" },
  { id: 8, imagen: "/tienda-de-carteras//img/Mini-Bag-Valley.png", nombre: "Mini Bag Valley", precio: "24.200", categoria: "carteras" },
  { id: 9, imagen: "/tienda-de-carteras//img/Mini-Bag-Lola.png", nombre: "Mini Bag Lola", precio: "22.000", categoria: "carteras" },
  { id: 10, imagen: "/tienda-de-carteras//img/Mini-Bag-Kendall.png", nombre: "Mini Bag Kendall", precio: "23.500", categoria: "carteras" },
  { id: 11, imagen: "/tienda-de-carteras//img/Mini-Bag-Holly.png", nombre: "Mini Bag Holly", precio: "25.000", categoria: "carteras" },
  { id: 12, imagen: "/tienda-de-carteras//img/Mini-Bag-California.png", nombre: "Mini Bag California", precio: "29.000", categoria: "carteras" },

  { id: 13, imagen: "/tienda-de-carteras//img/Bolso-Celine.png", nombre: "Bolso Celine", precio: "20.000", categoria: "bolsas" },
  { id: 14, imagen: "/tienda-de-carteras//img/Bolso-Brix.png", nombre: "Bolso Brix", precio: "25.000", categoria: "bolsas" },
  { id: 15, imagen: "/tienda-de-carteras//img/Bolso-Jacky.png", nombre: "Bolso Jacky", precio: "22.500", categoria: "bolsas" },
  { id: 16, imagen: "/tienda-de-carteras//img/Bolso-Trix.png", nombre: "Bolso Trix", precio: "25.000", categoria: "bolsas" },
  { id: 17, imagen: "/tienda-de-carteras//img/Bolso-Totebag.png", nombre: "Totebag", precio: "30.000", categoria: "bolsas" },
  { id: 18, imagen: "/tienda-de-carteras//img/Morral-Caramel.png", nombre: "Morral Caramel", precio: "13.000", categoria: "bolsas" },
  { id: 19, imagen: "/tienda-de-carteras//img/Morral-Jade.png", nombre: "Morral Jade", precio: "11.000", categoria: "bolsas" },
  { id: 20, imagen: "/tienda-de-carteras//img/Morral-Preta.png", nombre: "Morral Preta", precio: "11.000", categoria: "bolsas" },
  { id: 21, imagen: "/tienda-de-carteras//img/Morral-Hibra.png", nombre: "Morral Hibra", precio: "12.000", categoria: "bolsas" },
  { id: 22, imagen: "/tienda-de-carteras//img/Bolso-Acuaria-Beige.png", nombre: "Bolso Acuaria", precio: "26.000", categoria: "bolsas" },
  { id: 23, imagen: "/tienda-de-carteras//img/Bolso-Isela.png", nombre: "Bolso Isela", precio: "23.000", categoria: "bolsas" },
  { id: 24, imagen: "/tienda-de-carteras//img/Bolso-Merida.png", nombre: "Bolso Merida", precio: "25.000", categoria: "bolsas" },
  { id: 25, imagen: "/tienda-de-carteras//img/Bolso-Playa-Curazao.png", nombre: "Bolso Playero Curazao", precio: "30.500", categoria: "bolsas" },
  { id: 26, imagen: "/tienda-de-carteras//img/Bolso-Playa-Negro.png", nombre: "Bolso Playero Cafe", precio: "30.000", categoria: "bolsas" },
  { id: 27, imagen: "/tienda-de-carteras//img/Bolso-Playa-Cafe.png", nombre: "Bolso Playero Negro", precio: "30.000", categoria: "bolsas" },

  { id: 28, imagen: "/tienda-de-carteras//img/Cinturon-GG.png", nombre: "Cinturon Doble G", precio: "10.000", categoria: "cinturones" },
  { id: 29, imagen: "/tienda-de-carteras//img/Cinturon-Astralyn.png", nombre: "Cinturon Astralyn", precio: "9.000", categoria: "cinturones" },
  { id: 30, imagen: "/tienda-de-carteras//img/Cinturon-Beltura.png", nombre: "Cinturon Beltura ", precio: "7.500", categoria: "cinturones" },
  { id: 31, imagen: "/tienda-de-carteras//img/Cinturon-Diesel.png", nombre: "Cinturon Diesel", precio: "11.000", categoria: "cinturones" },
  { id: 32, imagen: "/tienda-de-carteras//img/Cinturon-Lunaris.png", nombre: "Cinturon Lunaris", precio: "8.500", categoria: "cinturones" },
  { id: 33, imagen: "/tienda-de-carteras//img/Cinturon-Nordova.png", nombre: "Cinturon Nordova", precio: "8.000", categoria: "cinturones" },
  { id: 34, imagen: "/tienda-de-carteras//img/Cinturon-Ojalillo.png", nombre: "Cinturon Ojalillo", precio: "7.000", categoria: "cinturones" },
  { id: 35, imagen: "/tienda-de-carteras//img/Cinturon-Therona.png", nombre: "Cinturon Therona", precio: "9.500", categoria: "cinturones" },
  { id: 36, imagen: "/tienda-de-carteras//img/Cinturon-Solvay.png", nombre: "Cinturon Solvay", precio: "8.500", categoria: "cinturones" },
  { id: 37, imagen: "/tienda-de-carteras//img/Cinturon-Olynthe.png", nombre: "Cinturon Olynthe", precio: "9.000", categoria: "cinturones" },
  { id: 38, imagen: "/tienda-de-carteras//img/Cinturon-Virella.png", nombre: "Cinturon Virella", precio: "7.500", categoria: "cinturones" },
  { id: 39, imagen: "/tienda-de-carteras//img/Cinturon-Zentara.png", nombre: "Cinturon Zentara", precio: "9.000", categoria: "cinturones" },
  
  { id: 40, imagen: "/tienda-de-carteras//img/Collar-Aurora.png", nombre: "Collar Aurora", precio: "12.000", categoria: "accesorios" },
  { id: 41, imagen: "/tienda-de-carteras//img/Collar-Bahia.png", nombre: "Collar Bahia", precio: "9.000", categoria: "accesorios" },
  { id: 42, imagen: "/tienda-de-carteras//img/Collar-Bilbao.png", nombre: "Collar Bilbao", precio: "10.000", categoria: "accesorios" },
  { id: 43, imagen: "/tienda-de-carteras//img/Collar-Cerecita.png", nombre: "Collar Cerecita", precio: "10.500", categoria: "accesorios" },
  { id: 44, imagen: "/tienda-de-carteras//img/Collar-Coquete.png", nombre: "Collar Coquete", precio: "9.500", categoria: "accesorios" },
  { id: 45, imagen: "/tienda-de-carteras//img/Collar-Iniciales.png", nombre: "Collar Iniciales", precio: "11.000", categoria: "accesorios" },
  { id: 46, imagen: "/tienda-de-carteras//img/Pulsera-Bayona.png", nombre: "Pulsera Bayona", precio: "9.000", categoria: "accesorios" },
  { id: 47, imagen: "/tienda-de-carteras//img/Pulsera-Nancy.png", nombre: "Pulsera Nancy", precio: "10.000", categoria: "accesorios" },
  { id: 48, imagen: "/tienda-de-carteras//img/Pulsera-Nantes.png", nombre: "Pulsera Nantes", precio: "11.000", categoria: "accesorios" },
  { id: 49, imagen: "/tienda-de-carteras//img/Pulsera-Pandora.png", nombre: "Pulsera Simil Pandora", precio: "10.500", categoria: "accesorios" },
  { id: 50, imagen: "/tienda-de-carteras//img/Pulsera-Tours.png", nombre: "Pulsera Tours", precio: "12.000", categoria: "accesorios" },
  { id: 51, imagen: "/tienda-de-carteras//img/Brazalete-Dorado.png", nombre: "Brazalete Dorado", precio: "13.000", categoria: "accesorios" },


];

const ProductosLista = ({ categoria, agregarAlCarrito }) => {
  const productosFiltrados = Productos.filter((producto) => producto.categoria === categoria);

  return (
    <div className="productos-grid">
      {productosFiltrados.length > 0 ? (
        productosFiltrados.map((producto) => (
          <ProductoRnd
            key={producto.id}
            id={producto.id}
            imagen={producto.imagen}
            nombre={producto.nombre}
            precio={producto.precio}
            agregarAlCarrito={agregarAlCarrito} />
        ))
      ) : (
        <p>No hay productos en esta categoría.</p>
      )}
    </div>
  );
};

export default ProductosLista;
