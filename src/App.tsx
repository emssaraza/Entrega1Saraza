import React from "react";
import BarraNavegacion from "./BarraNavegacion";
import ContenedorListaItems from "./ContenedorListaItems";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BarraNavegacion />
      <ContenedorListaItems saludo="¡Bienvenido a nuestra tienda en línea!" />
    </div>
  );
}

export default App;
