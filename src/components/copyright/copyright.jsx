import "./copyright.css";
import logo from "../../images/logo.svg";

function Copyright() {
  return (
    <section className="copyright">
      <div className="copyright__container">
        <img src={logo} alt="logo" className="copyright__logo" />
        <div className="copyright__policy">
          Пользуясь сайтом , вы соглашаетесь с условиями&nbsp;
          <a href="/policy" className="copyright__link">
            политики конфиденциальности&nbsp;
          </a>
          и даете&nbsp;
          <a href="/personal-data" className="copyright__link">
            согласие на обработку персональных данных
          </a>
        </div>
      </div>
    </section>
  );
}

export default Copyright;
