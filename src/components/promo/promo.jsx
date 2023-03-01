import "./promo.css";
import promoImage from "../../images/promo_image.png";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <div className="promo__column">
          <h1 className="promo__title">Организация импорта для промышленных предприятий</h1>
          <p className="promo__text">Доставка промышленного оборудования из Китая, Тайваня и Южной Кореи</p>
          <button className="promo__button" type="button">
            <p className="promo__button-text">Оформить заявку</p>
          </button>
        </div>
        <div className="promo__column">
          <img src={promoImage} alt="promoImage" className="promo__image" />
        </div>
      </div>
    </section>
  );
}

export default Promo;
