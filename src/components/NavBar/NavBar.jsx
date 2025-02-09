import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="HeaderNav">
        <h1>Prana</h1>
        <nav>
        <ul>
            <li><Link to= "/">Inicio</Link></li>
            <li><Link to="/carteras">Carteras</Link></li>
            <li><Link to="/bolsas">Bolsas</Link></li>
            <li><Link to="/cinturones">Cinturones</Link></li>
            <li><Link to="/accesorios">Accesorios</Link></li>
        </ul>
        </nav>    
        <CartWidget/>
    </header>
  )
}

export default NavBar;
