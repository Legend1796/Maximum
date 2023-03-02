import "./copyright.css";
import logo from "../../images/logo.svg";

function Copyright() {
  return (
    <section className="copyright">
      <div className="copyright__container">
        <img src={logo} alt="logo" className="copyright__logo" />
        <a href="#" className="copyright__link">
          Пользовательское соглашение
        </a>
        <a href="#" className="copyright__link">
          Отказ от оферты
        </a>
      </div>
    </section>
  );
}

export default Copyright;
