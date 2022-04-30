import { useState } from "react";

import { motion } from "framer-motion";

import { TiThMenu, TiTimes } from "react-icons/ti";

import logo from "../../assets/logo.png";

import "./navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        {/* <h1>A</h1> */}
        <img src={logo} alt="imagen con logo propio" />
      </div>
      <ul className="navbar__links">
        {[
          ["inicio", "Inicio"],
          ["formacion", "Formación"],
          ["conocimientos", "Conocimientos"],
          ["portfolio", "Portfolio"],
          ["contacto", "Contacto"],
        ].map((item) => (
          <li key={item[0]}>
            <a href={`#${item[0]}`}>{item[1]}</a>
          </li>
        ))}
      </ul>

      <div className="navbar__menu">
        <TiThMenu onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <TiTimes onClick={() => setToggle(false)} />
            <ul>
              {[
                ["inicio", "Inicio"],
                ["formacion", "Formación"],
                ["conocimientos", "Conocimientos"],
                ["portfolio", "Portfolio"],
                ["contacto", "Contacto"],
              ].map((item) => (
                <li key={item[0]}>
                  <a href={`#${item[0]}`} onClick={() => setToggle(false)}>
                    {item[1]}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
