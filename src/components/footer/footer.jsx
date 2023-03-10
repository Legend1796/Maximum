import "./footer.css";
import tg from "../../images/icons/tg.svg";
import wa from "../../images/icons/wa.svg";
import mail from "../../images/icons/mail.svg";
import geo from "../../images/icons/geo.svg";
import tg_tablet from "../../images/icons/tg_tablet.svg";
import wa_tablet from "../../images/icons/wa_tablet.svg";

function Footer({ pageWidth }) {
  return (
    <section className="footer">
      <div className="footer__container">
        <a href="#" className="footer__social">
          {pageWidth > 1430 || pageWidth < 768 ? (
            <img src={tg} alt="telegram" className="footer__icon" />
          ) : (
            <img src={tg_tablet} alt="telegram" className="footer__icon" />
          )}

          <p className="footer__social-text">@maximum_log</p>
        </a>
        <a href="#" className="footer__social">
          {pageWidth > 1430 || pageWidth < 768 ? (
            <img src={wa} alt="watsApp" className="footer__icon" />
          ) : (
            <img src={wa_tablet} alt="watsApp" className="footer__icon" />
          )}
          <p className="footer__social-text">+7 (812) 200 46 43</p>
        </a>
        <a href="#" className="footer__social">
          <img src={mail} alt="mail" className="footer__icon" />
          <p className="footer__social-text">info@max-imum.ru</p>
        </a>
        <a href="#" className="footer__social">
          <img src={geo} alt="geo" className="footer__icon" />
          <p className="footer__social-text">
            Санкт-Петербург, <br />
            ул. Ольги Берггольц, д 36, офис 1
          </p>
        </a>
      </div>
    </section>
  );
}

export default Footer;
