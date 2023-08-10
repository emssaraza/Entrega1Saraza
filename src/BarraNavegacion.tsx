import React from "react";
import CarritoWidget from "./CarritoWidget";
import "./BarraNavegacion.css";

const BarraNavegacion = () => {
  return (
    <nav className="barra-navegacion">
      <div>Tienda de Mascotas</div>
      <CarritoWidget />
    </nav>
  );
};

export default BarraNavegacion;
