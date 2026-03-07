function Features() {
  return (
    <div className="reports">
      <div className="cta">
        <div className="ctaLeft">
          <h2>Начните экономить своё время</h2>
          <p>
            3-дневный пробный период с неограниченным доступом ко всем
            возможностям
          </p>
          <div className="ctaForm">
            <input placeholder="Введите ваш email" />
            <button>Попробовать</button>
          </div>
        </div>
        <div className="ctaRight">
          <img className="girl" src="/images/5.png" alt="" />
          <img className="clock" src="/images/6.png" alt="" />
        </div>
      </div>
      <div className="reportContent">
        <div className="reportLeft">
          <h2>Собираем единые отчёты по всем вашим магазинам</h2>
          <p className="reportSub">С Mpassistant вы сможете:</p>
          <div className="reportBox">
            <p>
              Сможете видеть прибыль по всем магазинам и маркетплейсам в одном
              месте
            </p>
          </div>
          <div className="reportBox">
            <p>
              Не потратите время на сбор данных из нескольких кабинетов или
              маркетплейсов
            </p>
          </div>
          <div className="reportBox">
            <p>Добавите любое количество магазинов</p>
          </div>
        </div>
        <div className="reportRight">
          <img src="/images/4.png" alt="" />
        </div>
      </div>
    </div>
  );
}
export default Features;
