import { motion } from "framer-motion";

import ContenedorApp from "../../contenedor/ContenedorApp";
import ContenedorMovimientoApp from "../../contenedor/ContenedorMovimientoApp";

import miCv from "../../cv_AlfonsoAP.pdf";

import "./formacion.scss";

const Formacion = () => {
  return (
    <>
      <motion.div
        whileInView={{ y: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        <h2 className="formacion__cabecera">
          <span className="formacion__cabecera-inicial">F</span>ormación
        </h2>
        <p className="formacion__titulo">
          Técnico Superior en Desarrollo de Aplicaciones Web. Título obtenido en
          el I.E.S. San Clemente (Santiago de Compostela).
        </p>
      </motion.div>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        <div className="formacion__bloque">
          <p>Diciembre</p>
          <h4>2021</h4>
          <h5>Finalización del ciclo</h5>
        </div>
        <div className="formacion__bloque">
          <p>Septiembre</p>
          <h4>2019</h4>
          <h5>Comienzo del ciclo</h5>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="formacion__boton-motion"
      >
        <button className="formacion__boton">
          <a href={miCv} download>
            DESCARGAR CV
          </a>
        </button>
      </motion.div>
    </>
  );
};

export default ContenedorApp(
  ContenedorMovimientoApp(Formacion, "formacion__contenedor"),
  "formacion",
  "app__backgroundBlanco"
);
