import { motion } from "framer-motion";

import ContenedorApp from "../../contenedor/ContenedorApp";
import ContenedorMovimientoApp from "../../contenedor/ContenedorMovimientoApp";

import "./conocimientos.scss";

const conocimientosArray = [
  "HTML",
  "CSS",
  "JavaScript",
  "MySQL",
  "React",
  "NodeJS",
  "Express",
  "MongoDB",
  "MERN Stack",
  "Java",
  "NextJS",
  "Redux",
];

const Conocimientos = () => {
  return (
    <>
      <motion.div
        whileInView={{ y: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        <h2 className="conocimientos__cabecera">
          <span className="conocimientos__cabecera-inicial">C</span>onocimientos
        </h2>
      </motion.div>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        <div className="conocimientos__bloque">
          {conocimientosArray.map((elemento) => {
            return (
              <div key={elemento} className="conocimientos__elemento">
                {elemento}
              </div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default ContenedorApp(
  ContenedorMovimientoApp(Conocimientos, "conocimientos__contenedor"),
  "conocimientos",
  "app__backgroundPrimario"
);
