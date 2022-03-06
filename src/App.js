import Navbar from "./componentes/navbar/Navbar";
import Header from "./componentes/header/Header";
import Formacion from "./componentes/formacion/Formacion";
import Conocimientos from "./componentes/conocimientos/Conocimientos";

import "./app.scss";
import Portfolio from "./componentes/portfolio/Portfolio";
import Contacto from "./componentes/contacto/Contacto";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Formacion />
      <Conocimientos />
      <Portfolio />
      <Contacto />
    </div>
  );
}

export default App;
