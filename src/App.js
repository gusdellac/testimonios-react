import './App.css';
import Testimonio from './componentes/Testimonio.jsx';
import testimonios from './testimonios/testimonios.js';

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio
          nombre={testimonios[1].nombre}
          pais={testimonios[1].pais}
          imagen={testimonios[1].imagen}
          cargo={testimonios[1].cargo}
          empresa={testimonios[1].empresa}
          testimonio={testimonios[1].testimonio} 
        />
        <Testimonio
          nombre={testimonios[2].nombre}
          pais={testimonios[2].pais}
          imagen={testimonios[2].imagen}
          cargo={testimonios[2].cargo}
          empresa={testimonios[2].empresa}
          testimonio={testimonios[2].testimonio} 
        />
        <Testimonio
          nombre={testimonios[3].nombre}
          pais={testimonios[3].pais}
          imagen={testimonios[3].imagen}
          cargo={testimonios[3].cargo}
          empresa={testimonios[3].empresa}
          testimonio={testimonios[3].testimonio} 
        />
      </div>
    </div>
  );
}

export default App;
