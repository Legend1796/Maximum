import "./copyright.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Copyright() {
  return (
    <section className="copyright">
      <div className="copyright__container">
        <img src={logo} alt="logo" className="copyright__logo" />
        <div className="copyright__policy">
          Пользуясь сайтом , вы соглашаетесь с условиями&nbsp;
          <Link to="/policy" className="copyright__link">
            политики конфиденциальности&nbsp;
          </Link>
          и даете&nbsp;
          <Link to="/personal-data" className="copyright__link">
            согласие на обработку персональных данных
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Copyright;
