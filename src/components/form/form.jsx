import "./form.css";
import checkbox_active from "../../images/checkbox_active.svg";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import { useEffect, useState } from "react";

function Form() {
  const { values, handleChange, errors, resetErrors, isValidName, isValidPhone, isValidEmail } = useFormAndValidation(
    {}
  );
  const [isValid, setIsValid] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submit");
  }

  useEffect(() => {
    setIsValid(isValidName && isValidPhone && isValidEmail);
    console.log(isValid);
  }, [isValidName, isValidPhone, isValidEmail]);

  useEffect(() => {
    resetErrors({ name: "", phone: "", email: "" });
  }, []);
  return (
    <section className="form">
      <div className="form__container">
        <div className="form__title">
          <h2 className="form__title-text">Оставьте заявку на импорт</h2>
        </div>
        <form onSubmit={handleSubmit} name="send" className="form__body">
          <div className="input__container">
            <input
              id="name"
              name="name"
              type="text"
              className={`${"form__input"} ${errors.name ? "form__input_error" : ""}`}
              placeholder="Имя"
              value={values.name || ""}
              onChange={handleChange}
              minLength="2"
              maxLength="30"
              required
            />
            <span className={`${"form__validation-message"} ${errors.name ? "form__validation-message_active" : ""}`}>
              {errors.name}
            </span>
          </div>
          <div className="input__container">
            <input
              id="phone"
              name="phone"
              type="text"
              className={`${"form__input"} ${errors.phone ? "form__input_error" : ""}`}
              placeholder="Телефон"
              value={values.phone || ""}
              onChange={handleChange}
              minLength="10"
              maxLength="11"
              required
            />
            <span className={`${"form__validation-message"} ${errors.phone ? "form__validation-message_active" : ""}`}>
              {errors.phone}
            </span>
          </div>
          <div className="input__container">
            <input
              id="email"
              name="email"
              type="email"
              className={`${"form__input"} ${errors.email ? "form__input_error" : ""}`}
              placeholder="Почта"
              value={values.email || ""}
              onChange={handleChange}
              required
            />
            <span className={`${"form__validation-message"} ${errors.email ? "form__validation-message_active" : ""}`}>
              {errors.email}
            </span>
          </div>
          <div className="form__add">
            <button className="form__add-file form__add-file_button" type="button">
              <p className="form__add-file-text">Прикрепить файл</p>
            </button>
            <div className="form__add-file">
              <p className="form__add-file-text">Файл не прикреплен</p>
            </div>
          </div>
          <button
            className={`${"form__send-button"} ${isValid ? "" : "form__send-button_disabled"}`}
            type="submit"
            disabled={!isValid}>
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
        </form>
      </div>
    </section>
  );
}

export default Form;
