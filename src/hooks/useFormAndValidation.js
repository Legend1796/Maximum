import { useState } from "react";
import { regularEmail, regularPhone, regularName } from "../utils/consts";

export function useFormAndValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    switch (name) {
      case "name":
        if (regularName.test(String(value).toLowerCase())) {
          setErrors({ ...errors, [name]: "" });
          setIsValid(true);
          console.log(name);
        } else {
          setErrors({ ...errors, [name]: "некорректное имя" });
          setIsValid(false);
        }
        break;

      case "phone":
        if (regularPhone.test(String(value).toLowerCase())) {
          setIsValid(true);
          setErrors({ ...errors, [name]: "" });
          console.log(name);
        } else {
          setIsValid(false);
          setErrors({ ...errors, [name]: "некорректный номер телефона" });
        }
        break;

      case "email":
        if (regularEmail.test(String(value).toLowerCase())) {
          setErrors({ ...errors, [name]: "" });
          setIsValid(true);
        } else {
          setIsValid(false);
          setErrors({ ...errors, [name]: "некорректный email" });
        }
        break;

      default:
        console.log("Error!");
    }
    // setValues({ ...values, [name]: value });
    // setErrors({ ...errors, [name]: e.target.validationMessage });
    // if (name === "name") {
    //   setIsValid(regularEmail.test(value) && e.target.closest(".form__body").checkValidity());
    // } else if (name === "email") {
    //   setIsValid(regularEmail.test(value) && e.target.closest(".form__body").checkValidity());
    // } else if (name === "phone") {
    //   setIsValid(regularPhone.test(value) && e.target.closest(".form__body").checkValidity());
    //   setErrors({ ...errors, [name]: "fewdqwdqdw" });
    // } else {
    //   setIsValid(e.target.closest(".form__body").checkValidity());
    //   setErrors({ ...errors, [name]: "fewdqwdqdw" });
    // }
  }

  function resetErrors(data) {
    setValues(data);
    setIsValid(false);
  }

  return { values, handleChange, errors, isValid, resetErrors, setValues };
}
