import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "react-dadata/dist/react-dadata.css";
import checkbox_active from "../../images/checkbox_active.svg";
import checkbox_inactive from "../../images/checkbox_inactive.svg";
import { useEffect, useState } from "react";
import { FioSuggestions, EmailSuggestions } from "react-dadata";
import "./form.css";
import { Link } from "react-router-dom";

function Form({ pageWidth }) {
  const [isValid, setIsValid] = useState(false);
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [phone, setPhone] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileCount, setSelectedFileCount] = useState(null);
  const [checked, setChecked] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("name: ", name.value, "email: ", email.value, "phone: ", phone, "selectedFile: ", selectedFile);

    // var xhr = new XMLHttpRequest();
    // xhr.addEventListener("load", () => {
    //   console.log(xhr.responseText);
    // });
    // xhr.open(
    //   "GET",
    //   "http://f0792652.xsph.ru/sendemail/index.php?sendto=m_igor97@mail.ru&email=" +
    //     email.value +
    //     "&name=" +
    //     name.value +
    //     "&phone=" +
    //     phone
    // );
    // xhr.send();
    let formData = new FormData();
    formData.append("name", name.value);
    formData.append("email", email.value);
    formData.append("phone", phone);
    fetch("send.php", {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((response) => {
      response
        .json()
        .then((data) => {
          console.log("Successful" + data);
        })
        .catch((error) => console.log(error));
    });
  }

  function handleChangeFiles(e) {
    setSelectedFileCount(e.target.files.length);
    setSelectedFile(e.target.files);
  }

  useEffect(() => {
    if (email && name) {
      setIsValid(email.value && phone.length > 10 && name.value && checked);
    }
  }, [name, email, phone, checked]);

  return (
    <section className="form">
      <div className="form__container">
        <div className="form__title">
          <h2 className="form__title-text">Оставьте заявку на импорт</h2>
        </div>
        <form onSubmit={handleSubmit} name="send" className="form__body">
          <div className="input__container">
            <FioSuggestions
              inputProps={{
                placeholder: "Имя",
                required: true,
                autoFocus: true,
              }}
              selectOnBlur="true"
              containerClassName="form__input"
              id="name"
              name="name"
              type="NAME"
              token="469678a76f51fa567ff874967776f95d2082fdfc"
              value={name}
              onChange={setName}
            />
          </div>
          <div className="input__container input__container_phone">
            <PhoneInput
              inputProps={{
                name: "phone",
                required: true,
                autoFocus: true,
                placeholder: "Телефон",
              }}
              disableDropdown
              disableSearchIcon
              enableAreaCodes={false}
              onlyCountries={["ru"]}
              id="phone"
              type="text"
              inputClass="form__input-phone"
              buttonClass="form__input-phone-button"
              country={"ru"}
              value={phone}
              onChange={setPhone}
            />
          </div>
          <div className="input__container">
            <EmailSuggestions
              selectOnBlur="true"
              containerClassName="form__input"
              id="email"
              name="email"
              type="email"
              token="469678a76f51fa567ff874967776f95d2082fdfc"
              value={email}
              onChange={setEmail}
              inputProps={{
                placeholder: "Почта",
                required: true,
                autoFocus: true,
              }}
            />
          </div>
          <div className="form__add">
            <button className="form__add-file form__add-file_button" type="button">
              <input
                className="form__add-file-input"
                type="file"
                multiple
                onChange={handleChangeFiles}
                accept="image/*, .pdf, .xlsx, .xls, .png, .jpg, .doc, .docx"
              />
              <p className="form__add-file-text">Прикрепить файл</p>
            </button>
            <div className="form__add-file">
              <p className="form__add-file-text">
                {selectedFile ? `Прикреплено файлов: ${selectedFileCount}` : "Файл не прикреплен"}
              </p>
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
              <button className="form__checkbox-button" type="button" onClick={() => setChecked(!checked)}>
                <img src={checked ? checkbox_active : checkbox_inactive} alt="checkbox" className="form__checkbox" />
              </button>
              {pageWidth > 768 ? (
                <>
                  <p className="form__agreement-text">Я даю согласие на&nbsp;</p>
                  <Link to="/personal-data" className="form__agreement-text-link">
                    обработку персональных данных
                  </Link>
                </>
              ) : (
                <div className="form__agreement-text_mobile">
                  <p className="form__agreement-text">Я даю согласие на&nbsp;</p>
                  <Link to="/personal-data" className="form__agreement-text-link">
                    обработку персональных данных
                  </Link>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Form;
