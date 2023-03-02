import "./footer.css";
import tg from "../../images/icons/tg.svg";
import wa from "../../images/icons/wa.svg";
import mail from "../../images/icons/mail.svg";
import geo from "../../images/icons/geo.svg";

function Footer() {
  return (
    <section className="footer">
      <div className="footer__container">
        <a href="#" className="footer__social">
          <img src={tg} alt="telegram" className="footer__tg" />
          <p className="footer__social-text">@maximum_log</p>
        </a>
        <a href="#" className="footer__social">
          <img src={wa} alt="watsApp" className="footer__wa" />
          <p className="footer__social-text">+7 (812) 200 46 43</p>
        </a>
        <a href="#" className="footer__social">
          <img src={mail} alt="mail" className="footer__mail" />
          <p className="footer__social-text">info@max-imum.ru</p>
        </a>
        <a href="#" className="footer__social">
          <img src={geo} alt="geo" className="footer__geo" />
          <p className="footer__social-text">Санкт-Петербург, ул. Ольги Берггольц, д 36, офис 1</p>
        </a>
      </div>
    </section>
  );
}

export default Footer;
