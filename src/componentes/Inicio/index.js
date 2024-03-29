import React from "react";
import Portada from '../../imagenes/inicio.jpg';
import { Link } from 'react-router-dom'

export const Inicio = () => {
    return(
        <div className="inicio">
          <Link too='/'>
            <h1>Inicio</h1>
          </Link>
          <Link too='/productos'>
            <h1>Productos</h1>
          </Link>
          <img src={Portada} alt="inicio" />

        </div>
    )
}