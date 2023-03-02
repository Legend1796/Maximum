import "./header.css";
import logo from "../../images/logo.svg";
import tg from "../../images/icons/tg.svg";
import wa from "../../images/icons/wa.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img src={logo} alt="logo" className="header__logo" />

        <nav className="header__navigation">
          <ui className="header__links">
            <li className="header__link">
              <a href="#" className="header__link">
                Главная
              </a>
            </li>
            <li className="header__link">
              <a href="#" className="header__link">
                О компании
              </a>
            </li>
            <li className="header__link">
              <a href="#" className="header__link">
                Этапы работы
              </a>
            </li>
          </ui>
        </nav>

        <div className="header__contacts">
          <a href="#" className="header__link">
            <img src={tg} alt="telegram" className="header__tg" />
          </a>
          <a href="#" className="header__link">
            <img src={wa} alt="watsApp" className="header__wa" />
          </a>
          <p className="header__phone">+7 (812) 200 46 43</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
