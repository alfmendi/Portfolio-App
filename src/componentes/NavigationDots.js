/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

const NavigationDots = ({ activo }) => (
  <div className="app__navigation">
    {["inicio", "formacion", "conocimientos", "portfolio", "contacto"].map(
      (item) => (
        <a
          href={`#${item}`}
          key={item}
          className="app__navigation-dot"
          style={
            activo === item
              ? { border: "none", backgroundColor: "var(--secondary-color)" }
              : {}
          }
        />
      )
    )}
  </div>
);

export default NavigationDots;
