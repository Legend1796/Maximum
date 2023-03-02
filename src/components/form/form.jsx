import "./form.css";
import checkbox_active from "../../images/checkbox_active.svg";

function Form() {
  return (
    <section className="form">
      <div className="form__container">
        <div className="form__title">
          <h2 className="form__title-text">Оставьте заявку на импорт</h2>
        </div>
        <div className="form__body">
          <input type="text" className="form__input" placeholder="Имя" />
          <p className="form__validation-message">некорректное имя</p>
          <input type="text" className="form__input" placeholder="Телефон" />
          <p className="form__validation-message">некорректный телефон</p>
          <input type="text" className="form__input" placeholder="Почта" />
          <p className="form__validation-message">некорректный email</p>
          <div className="form__add">
            <button className="form__add-file form__add-file_button" type="button">
              <p className="form__add-file-text">Прикрепить файл</p>
            </button>
            <div className="form__add-file">
              <p className="form__add-file-text">Файл не прикреплен</p>
            </div>
          </div>
          <button className="form__send-button" type="submit">
            <p className="form__send-button-text">Оставить заявку</p>
          </button>
          <div className="form__agreement">
            <div className="form__agreement-text-box">
              <img src={checkbox_active} alt="checkbox" className="form__checkbox" />
              <p className="form__agreement-text">Я принимаю условия&nbsp;</p>
              <a href="#" className="form__agreement-text-link">
                пользовательского соглашения
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form;
