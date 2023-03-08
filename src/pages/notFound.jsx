import notfoundImage from "../images/notfound.svg";
import { NavLink } from "react-router-dom";
import "./anotherPages.css";

function NotFound() {
  return (
    <section className="notFound">
      <div className="notfound__container">
        <img src={notfoundImage} alt="notfound" className="notfound__image" />
        <h3 className="notfound__title">Не удалось найти страницу</h3>
        <button className="notfound__button" type="button">
          <NavLink className="notfound__button" to="/">
            <p className="notfound__button-text">Вернуться на главную</p>
          </NavLink>
        </button>
      </div>
    </section>
  );
}

export default NotFound;
