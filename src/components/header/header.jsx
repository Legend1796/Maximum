import "./header.css";
import logo from "../../images/logo.svg";
import tg from "../../images/icons/tg.svg";
import wa from "../../images/icons/wa.svg";
import { NavLink } from "react-router-dom";
import { Element } from "react-scroll";
import tg_tablet from "../../images/icons/tg_tablet.svg";
import wa_tablet from "../../images/icons/wa_tablet.svg";
import headerMobileNav from "../../images/header_mobile_nav.svg";

function Header({ pageWidth }) {
  return (
    <header className="header">
      {pageWidth > 768 ? (
        <div className="header__container">
          <Element className="header__logo" name="/">
            <NavLink className="header__logo" to="/">
              <img src={logo} alt="logo" className="header__logo" />
            </NavLink>
          </Element>
          <div className="header__navigation">
            <nav className="header__links">
              <NavLink className="header__link" to="/">
                Главная
              </NavLink>
              <NavLink className="header__link" to="/">
                О компании
              </NavLink>
              {pageWidth > 1430 ? (
                <NavLink className="header__link" to="/">
                  Этапы работы
                </NavLink>
              ) : (
                <></>
              )}
            </nav>
          </div>

          <div className="header__contacts">
            <a href="#" className="header__link header__link_wa">
              <img src={tg} alt="telegram" className="header__image" />
            </a>
            <a href="#" className="header__link">
              <img src={wa} alt="watsApp" className="header__image" />
            </a>
            <p className="header__phone">+7 (812) 200 46 43</p>
          </div>
        </div>
      ) : (
        <div className="header__container">
          <Element className="header__logo" name="/">
            <NavLink className="header__logo" to="/">
              <img src={logo} alt="logo" className="header__logo" />
            </NavLink>
          </Element>
          <div className="header__contacts">
            <a href="#" className="header__link header__link_wa">
              <img src={tg_tablet} alt="telegram" className="header__image" />
            </a>
            <a href="#" className="header__link">
              <img src={wa_tablet} alt="watsApp" className="header__image" />
            </a>
          </div>
          <button type="button" className="header__modal">
            <img src={headerMobileNav} alt="open modal navigation" className="header__modal-image" />
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
