import "./steps.css";
import step1 from "../../images/steps/step1.svg";
import step2 from "../../images/steps/step2.svg";
import step3 from "../../images/steps/step3.svg";
import step4 from "../../images/steps/step4.svg";
import step5 from "../../images/steps/step5.svg";
import step6 from "../../images/steps/step6.svg";
import step7 from "../../images/steps/step7.svg";
import step8 from "../../images/steps/step8.svg";
import road from "../../images/steps/road.svg";
import roadTab from "../../images/steps/road_tab.svg";
import roadMobile from "../../images/steps/road_mobile.svg";

function Steps({ pageWidth }) {
  return (
    <section className="steps" id="steps">
      <div className="steps__container">
        {pageWidth > 1430 ? (
          <img src={road} alt="road" className="steps__road" />
        ) : pageWidth > 768 ? (
          <img src={roadTab} alt="road" className="steps__road" />
        ) : (
          <img src={roadMobile} alt="road" className="steps__road" />
        )}
        <h2 className="steps__title">Этапы работы</h2>
        <ul className="steps__grid-table">
          <li className="steps__step">
            <div className="steps__step-title">
              <div className="steps__step-circle">
                <p className="steps__number">1</p>
              </div>
              <p className="steps__step-text">Заявка</p>
            </div>
            <img src={step1} alt="1st step" className="steps__image" />
          </li>
          <li className="steps__step">
            <div className="steps__step-title">
              <div className="steps__step-circle">
                <p className="steps__number">2</p>
              </div>
              <p className="steps__step-text">Выбор поставщика</p>
            </div>
            <img src={step2} alt="2nd step" className="steps__image" />
          </li>
          <li className="steps__step">
            <div className="steps__step-title">
              <div className="steps__step-circle">
                <p className="steps__number">3</p>
              </div>
              <p className="steps__step-text">Выбор маршрута</p>
            </div>
            <img src={step3} alt="3rd step" className="steps__image" />
          </li>
          <li className="steps__step">
            <div className="steps__step-title">
              <div className="steps__step-circle">
                <p className="steps__number">4</p>
              </div>
              <p className="steps__step-text">Согласование стоимости</p>
            </div>
            <img src={step4} alt="4th step" className="steps__image" />
          </li>
          <li className="steps__step">
            <div className="steps__step-title">
              <div className="steps__step-circle">
                <p className="steps__number">5</p>
              </div>
              <p className="steps__step-text">Подписание договора в РФ</p>
            </div>
            <img src={step5} alt="5th step" className="steps__image" />
          </li>
          <li className="steps__step">
            <div className="steps__step-title">
              <div className="steps__step-circle">
                <p className="steps__number">6</p>
              </div>
              <p className="steps__step-text">Контракт с поставщиком</p>
            </div>
            <img src={step6} alt="6th step" className="steps__image" />
          </li>
          <li className="steps__step">
            <div className="steps__step-title">
              <div className="steps__step-circle">
                <p className="steps__number">7</p>
              </div>
              <p className="steps__step-text">Закупка оборудования</p>
            </div>
            <img src={step7} alt="7th step" className="steps__image" />
          </li>
          <li className="steps__step">
            <div className="steps__step-title">
              <div className="steps__step-circle">
                <p className="steps__number">8</p>
              </div>
              <p className="steps__step-text">Доставка на Ваш склад</p>
            </div>
            <img src={step8} alt="8th step" className="steps__image" />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Steps;
