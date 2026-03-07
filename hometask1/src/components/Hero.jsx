function Hero() {
  return (
    <div className="service">
      <div className="numbers">
        <div className="numBox">
          <h1>777</h1>
          <p>
            Увеличивай прибыль, автоматизируй рутину и экономь время на сборе и
            анализе отчётов
          </p>
        </div>
        <div className="numBox">
          <h1>5</h1>
          <p>
            Увеличивай прибыль, автоматизируй рутину и экономь время на сборе и
            анализе отчётов
          </p>
        </div>
        <div className="numBox">
          <h1>100 000</h1>
          <p>
            Увеличивай прибыль, автоматизируй рутину и экономь время на сборе и
            анализе отчётов
          </p>
        </div>
      </div>
      <h2 className="serviceTitle">Возможности сервиса</h2>

      <div className="tabs">
        <button className="tabActive">Финансовая аналитика</button>
        <button>Товарная аналитика</button>
        <button>Аналитика внутренней рекламы</button>
        <button>Статистика</button>
        <button>Инструменты</button>
      </div>
      <div className="serviceBody">
        <div className="serviceLeft">
          <h3>Инструменты для финансовой аналитики</h3>
          <ul>
            <li>Отчёт о прибылях и убытках (P&L)</li>
            <li>Отчёт о движении денежных средств (ДДС)</li>
            <li>Журнал операций</li>
            <li>Сводка продаж</li>
            <li>Учёт самовыкупов</li>
          </ul>
          <button className="tryBtn">Попробовать бесплатно</button>
        </div>
        <div className="serviceRight">
          <img className="tableImg" src="/images/table.png" />
        </div>
      </div>
    </div>
  );
}
export default Hero;
