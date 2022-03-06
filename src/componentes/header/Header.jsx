import { motion } from "framer-motion";

import ContenedorApp from "../../contenedor/ContenedorApp";

import "./header.scss";

const Header = () => {
  return (
    <div className="header__contenedor">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="header__info"
      >
        <p className="heartbeat">DESARROLLADOR WEB</p>
        <h1>
          <span className="header__info-inicial">B</span>ienvenido a mi{" "}
          <span className="onda">
            <span style={{ "--i": 1 }}>P</span>
            <span style={{ "--i": 2 }}>o</span>
            <span style={{ "--i": 3 }}>r</span>
            <span style={{ "--i": 4 }}>t</span>
            <span style={{ "--i": 5 }}>f</span>
            <span style={{ "--i": 6 }}>o</span>
            <span style={{ "--i": 7 }}>l</span>
            <span style={{ "--i": 8 }}>i</span>
            <span style={{ "--i": 9 }}>o</span>
          </span>
        </h1>
        <div className="header__nombre">
          <h2>
            <span>A</span>lfonso <span>A</span>uzmendia <span>P</span>érez
          </h2>
          <div className="header__titulacion">
            <pre>Titulado en el C.F.G.S. de Desarrollo de Aplicaciones Web</pre>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContenedorApp(Header, "inicio");
