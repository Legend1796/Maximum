import "./about.css";

function About() {
  return (
    <section className="about">
      <div className="about__container">
        <h2 className="about__title">О компании</h2>
        <p className="about__text">
          «Максимум» - развивающаяся компания по организации импорта для промышленных предприятий из Китая, Тайваня,
          Южной Кореи, в нашей компании работают профессионалы, имеющие 10 лет опыта работы в сфере международных
          грузоперевозок
        </p>
        <ul className="about__table">
          <li className="about__table-column">
            <h3 className="about__table-column-title">3 года</h3>
            <p className="about__table-column-text">на рынке импорта</p>
          </li>
          <li className="about__table-column">
            <h3 className="about__table-column-title">10 лет</h3>
            <p className="about__table-column-text">опыта сотрудников</p>
          </li>
          <li className="about__table-column">
            <h3 className="about__table-column-title">50+</h3>
            <p className="about__table-column-text">постоянных клиентов</p>
          </li>
          <li className="about__table-column">
            <h3 className="about__table-column-title">10%</h3>
            <p className="about__table-column-text">комиссия</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
