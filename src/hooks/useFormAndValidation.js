import { useState } from "react";
import { regularEmail, regularPhone, regularName } from "../utils/consts";

export function useFormAndValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValidName, setIsValidName] = useState(false);
  const [isValidPhone, setIsValidPhone] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);

  function handleChange(e) {
    console.log(e);
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    switch (name) {
      case "name":
        console.log("name!");
        if (regularName.test(String(value).toLowerCase())) {
          setIsValidName(true);
          setErrors({ ...errors, [name]: "" });
        } else {
          setIsValidName(false);
          setErrors({ ...errors, [name]: "некорректное имя" });
        }
        break;

      case "phone":
        if (regularPhone.test(String(value).toLowerCase())) {
          setIsValidPhone(true);
          setErrors({ ...errors, [name]: "" });
        } else {
          setIsValidPhone(false);
          setErrors({ ...errors, [name]: "некорректный номер телефона" });
        }
        break;

      case "email":
        if (regularEmail.test(String(value).toLowerCase())) {
          setIsValidEmail(true);
          setErrors({ ...errors, [name]: "" });
        } else {
          setIsValidEmail(false);
          setErrors({ ...errors, [name]: "некорректный email" });
        }
        break;

      default:
        console.log("Error!");
    }
  }

  function resetErrors(data) {
    setValues(data);
    // setIsValid(false);
  }

  return { values, handleChange, errors, resetErrors, setValues, isValidName, isValidPhone, isValidEmail };
}
