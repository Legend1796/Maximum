import "./why.css";

function Why() {
  return (
    <section className="why">
      <div className="container">
        <h2 className="why__title">Почему мы?</h2>
        <ul className="why__list">
          <li className="why__item">
            <h4 className="why__item-title">Прозрачные условия</h4>
            <p className="why__item-text">Переговоры ведутся в общем чате с заказчиком и с поставщиком</p>
          </li>
          <li className="why__item">
            <h4 className="why__item-title">Страховка 100%</h4>
            <p className="why__item-text">Все грузы застрахованы на полную стоимость.</p>
          </li>
          <li className="why__item">
            <h4 className="why__item-title">Личный менеджер</h4>
            <p className="why__item-text">За каждым клиентом закрепляется персональный менеджер.</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Why;
