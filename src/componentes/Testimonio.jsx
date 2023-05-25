// import React from "react";
//para un componente sencillo que solo utiliza jsx no es necesario la importación de react

import "../hojas-de-estilo/Testimonio.css";

function Testimonio(props) {
  return(
    <div className="contenedor-testimonio">
      <img 
        className="imagen-testimonio"
        src={require(`../img/${props.imagen}.png`)}
        alt={`Foto de ${props.imagen}`}
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className="cargo-testimonio">
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className="texto-testimonio">"{props.testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonio;  //podemos hacer exportacion por default o exportacion nombrada