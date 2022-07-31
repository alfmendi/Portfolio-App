import { useState } from "react";

import { motion } from "framer-motion";

import { AiFillEye, AiFillGithub } from "react-icons/ai";

import ContenedorApp from "../../contenedor/ContenedorApp";
import ContenedorMovimientoApp from "../../contenedor/ContenedorMovimientoApp";

import mernImagen from "../../assets/mernImagen.jpg";
import reactImagen from "../../assets/reactImagen.jpg";
import nextImagen from "../../assets/nextjsImagen.jpg";

import "./portfolio.scss";

const portfolioArray = [
  {
    titulo: "Aplicación Encuesta",
    descripcion:
      "Aplicación que permite gestionar las valoraciones emitidas sobre las prácticas de una asignatura",
    enlaceProyecto: "https://aplicacion-encuestas.herokuapp.com/",
    enlaceCodigo: "https://github.com/alfmendi/Encuesta-App",
    imgUrl: mernImagen,
    etiquetas: ["Aplicación Web", "Todo"],
  },
  {
    titulo: "Aplicación Localizador Github",
    descripcion:
      "Aplicación que permite localizar y mostrar información sobre un usuario de Github y sus repositorios",
    enlaceProyecto: "https://aplicacion-localizador-github.herokuapp.com/",
    enlaceCodigo: "https://github.com/alfmendi/Localizador-Github-App",
    imgUrl: reactImagen,
    etiquetas: ["React", "Todo"],
  },
  {
    titulo: "Aplicación Gestión Empleos",
    descripcion:
      "Aplicación que permite llevar a cabo la gestión de las solicitudes de empleo de cada usuario registrado",
    enlaceProyecto: "https://aplicacion-trabajos.herokuapp.com/",
    enlaceCodigo: "https://github.com/alfmendi/Trabajo-App",
    imgUrl: mernImagen,
    etiquetas: ["Aplicación Web", "Todo"],
  },
  {
    titulo: "Aplicación Criptos",
    descripcion:
      "Aplicación que permite consultar la cotización de diversas criptomonedas en tiempo real",
    enlaceProyecto: "https://aplicacion-criptos.herokuapp.com/",
    enlaceCodigo: "https://github.com/alfmendi/Cripto-App",
    imgUrl: reactImagen,
    etiquetas: ["React", "Todo"],
  },
  {
    titulo: "Aplicación Eléctrica",
    descripcion:
      "Aplicación que permite gestionar toda la información de los clientes de una compañía eléctrica",
    enlaceProyecto: "https://aplicacion-electrica.herokuapp.com/",
    enlaceCodigo: "https://github.com/alfmendi/Electrica-App",
    imgUrl: mernImagen,
    etiquetas: ["Aplicación Web", "Todo"],
  },
  {
    titulo: "Aplicación Panstiago",
    descripcion:
      "Aplicación que permite gestionar los pedidos a una bocatería, incluyendo el pago mediante Stripe",
    enlaceProyecto: "https://aplicacion-panstiago.herokuapp.com/",
    enlaceCodigo: "https://github.com/alfmendi/Panstiago-App",
    imgUrl: mernImagen,
    etiquetas: ["Aplicación Web", "Todo"],
  },
  {
    titulo: "Aplicación Compogar",
    descripcion:
      "Aplicación que permite gestionar la compraventa y alquiler de bienes inmuebles a nivel nacional",
    enlaceProyecto: "https://aplicacion-compogar.herokuapp.com/",
    enlaceCodigo: "https://github.com/alfmendi/Compogar-App",
    imgUrl: mernImagen,
    etiquetas: ["Aplicación Web", "Todo"],
  },
  {
    titulo: "Aplicación Galizon",
    descripcion:
      "Aplicación que permite gestionar la compra de productos en una tienda virtual empleando Stripe",
    enlaceProyecto: "https://aplicacion-galizon.herokuapp.com/",
    enlaceCodigo: "https://github.com/alfmendi/Galizon-App",
    imgUrl: nextImagen,
    etiquetas: ["Aplicación Web", "Todo"],
  },
];

const Portfolio = () => {
  const [filtroPortfolio, setfiltroPortfolio] = useState(portfolioArray);
  const [filtroActivo, setFiltroActivo] = useState("Todo");
  const [tarjetaAnimacion, setTarjetaAnimacion] = useState({
    y: 0,
    opacity: 1,
  });

  const filtrarPortfolio = (item) => {
    setFiltroActivo(item);
    setTarjetaAnimacion([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setTarjetaAnimacion([{ y: 0, opacity: 1 }]);
      if (item === "Todo") {
        setfiltroPortfolio(portfolioArray);
      } else {
        setfiltroPortfolio(
          portfolioArray.filter((elemento) => elemento.etiquetas.includes(item))
        );
      }
    }, 500);
  };

  return (
    <>
      <motion.div
        whileInView={{ y: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        <h2 className="portfolio__cabecera">
          <span className="portfolio__cabecera-inicial">P</span>ortfolio
        </h2>
      </motion.div>

      <div className="portfolio__filtro">
        {["Aplicación Web", "React", "Todo"].map((item) => (
          <div
            key={item}
            onClick={() => filtrarPortfolio(item)}
            className={`portfolio__filtro-elemento ${
              filtroActivo === item ? "elemento-activo" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={tarjetaAnimacion}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="portfolio__cards"
      >
        {filtroPortfolio.map((elemento, index) => (
          <div className="portfolio__card" key={index}>
            <div className="portfolio__card-img">
              <img src={elemento.imgUrl} alt={elemento.nombre} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="portfolio__card-hover"
              >
                <a
                  href={elemento.enlaceProyecto}
                  target="_blank"
                  rel="noreferrer"
                >
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a
                  href={elemento.enlaceCodigo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="portfolio__card-contenido">
              <div className="portfolio__card-hoverMovil">
                <a
                  href={elemento.enlaceProyecto}
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillEye />
                </a>
                <a
                  href={elemento.enlaceCodigo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub />
                </a>
              </div>
              <h4>{elemento.titulo}</h4>
              <p className="portfolio__card-descripcion">
                {elemento.descripcion}
              </p>
              <div className="portfolio__card-etiqueta">
                <p>{elemento.etiquetas[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default ContenedorApp(
  ContenedorMovimientoApp(Portfolio, "portfolio__contenedor"),
  "portfolio",
  "app__backgroundBlanco"
);
