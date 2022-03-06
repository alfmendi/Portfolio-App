import { motion } from "framer-motion";

const ContenedorMovimientoApp = (Componente, classNames) =>
  function HOC() {
    return (
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className={`${classNames}`}
      >
        <Componente />
      </motion.div>
    );
  };

export default ContenedorMovimientoApp;
