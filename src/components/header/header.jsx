import "./header.css";
import logo from "../../images/logo.svg";
import tg from "../../images/icons/tg.svg";
import wa from "../../images/icons/wa.svg";
import { NavLink } from "react-router-dom";
import { Element } from "react-scroll";
import tg_tablet from "../../images/icons/tg_tablet.svg";
import wa_tablet from "../../images/icons/wa_tablet.svg";
import headerMobileNav from "../../images/header_mobile_nav.svg";
import { useState } from "react";
import { Link } from "react-scroll";

function Header({ pageWidth }) {
  const [modal, setModal] = useState(false);

  function handleToggleModal() {
    setModal(!modal);
  }

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
              <Link className="header__link" to="about" spy={true} smooth={true} offset={-50} duration={400}>
                О компании
              </Link>
              {pageWidth > 1430 ? (
                <Link className="header__link" to="steps" spy={true} smooth={true} duration={500}>
                  Этапы работы
                </Link>
              ) : (
                <></>
              )}
            </nav>
          </div>

          <div className="header__contacts">
            <a href="tg://resolve?domain=maximum_import" className="header__link header__link_wa">
              <img src={tg} alt="telegram" className="header__image" />
            </a>
            <a href="https://wa.me/79995241046" className="header__link" target="_blank">
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
          <button type="button" className="header__modal-button" onClick={handleToggleModal}>
            <img src={headerMobileNav} alt="open modal navigation" className="header__modal-image" />
          </button>
          {modal && (
            <div className="header__modal">
              <nav className="header__links header__links_modal">
                <NavLink className="header__link header__link_modal" to="/">
                  Главная
                </NavLink>
                <Link
                  className="header__link header__link_modal"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={600}>
                  О компании
                </Link>
                <Link
                  className="header__link header__link_modal"
                  to="steps"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={1000}>
                  Этапы работы
                </Link>
              </nav>
            </div>
          )}
        </div>
      )}
    </header>
  );
}

export default Header;
