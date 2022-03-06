import { motion } from "framer-motion";

import { HiMail } from "react-icons/hi";
import { HiOutlinePhone } from "react-icons/hi";

import ContenedorApp from "../../contenedor/ContenedorApp";
import ContenedorMovimientoApp from "../../contenedor/ContenedorMovimientoApp";

import "./contacto.scss";

const Contacto = () => {
  return (
    <>
      <motion.div
        whileInView={{ y: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        <h2 className="contacto__cabecera">
          <span className="contacto__cabecera-inicial">C</span>ontacto
        </h2>
      </motion.div>
      <div className="contacto__cards">
        <div className="contacto__card ">
          <HiMail className="contacto__icon" />
          <a href="mailto:alfonsoauzmendia@gmail.com">
            alfonsoauzmendia@gmail.com
          </a>
        </div>
        <div className="contacto__card">
          <HiOutlinePhone className="contacto__icon" />
          <a href="tel:+34654266080">654 266 080</a>
        </div>
      </div>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        <p className="contacto__copyright">
          Copyright &copy; 2022
          <span>Alfonso Auzmendia Pérez</span>
        </p>
      </motion.div>
    </>
  );
};

export default ContenedorApp(
  ContenedorMovimientoApp(Contacto, "contacto__contenedor"),
  "contacto",
  "app__backgroundNegro"
);
