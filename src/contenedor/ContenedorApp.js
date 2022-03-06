import NavigationDots from "../componentes/NavigationDots";

const ContenedorApp = (Componente, idBloque, clases) =>
  function HOC() {
    return (
      <div id={idBloque} className={`app__contenedor ${clases}`}>
        <div className="app__wrapper">
          <Componente />
        </div>
        <NavigationDots activo={idBloque} />
      </div>
    );
  };

export default ContenedorApp;
