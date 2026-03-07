function Pricing() {
  return (
    <div className="choose">
      <h2 className="chooseTitle">Почему выбирают Mpassistant</h2>

      <div className="chooseGrid">
        <div className="chooseCard">
          <img src="/images/71.svg" alt="" />
          <h3>Точность данных</h3>
          <p>
            Данные в отчётах сервиса полностью совпадают с данными ваших
            магазинов на маркетплейсах.
          </p>
        </div>

        <div className="chooseCard">
          <img src="/images/72.svg" alt="" />
          <h3>Большой функционал</h3>
          <p>
            Полный набор инструментов для внутренней аналитики для Wildberries и
            Ozon. Более 10 полезных отчётов с удобными настраиваемыми фильтрами
            и параметрами.
          </p>
        </div>

        <div className="chooseCard">
          <img src="/images/73.svg" alt="" />
          <h3>Лёгкость освоения</h3>
          <p>
            Наши отчёты просты и удобны. Весь отчётный период сопровождается
            инструкциями и видео, помогающие легко читать их и использовать.
          </p>
        </div>

        <div className="chooseCard">
          <img src="/images/74.svg" alt="" />
          <h3>Подходит всем</h3>
          <p>
            Mpassistant создан селлерами для селлеров. Наш опыт в товарном
            бизнесе и разработке IT систем позволил создать полезный и удобный
            продукт, поэтому он подойдёт как для новичков, так и для опытных
            селлеров.
          </p>
        </div>

        <div className="chooseCard">
          <img src="/images/75.svg" alt="" />
          <h3>Конфиденциальность</h3>
          <p>
            Ваша конфиденциальность для нас самый главный приоритет. Все ваши
            данные надёжно сохранены, а информация об этом записана в договоре-
            оферте. По желанию можем заключить дополнительное соглашение (NDA).
          </p>
        </div>

        <div className="chooseCard">
          <img src="/images/76.svg" alt="" />
          <h3>Служба заботы</h3>
          <p>
            Наша служба заботы готова решить практически любые вопросы и в
            режиме 24/7.
          </p>
        </div>
      </div>

      <div className="freeBanner">
        <div className="freeLeft">
          <h2>Попробуйте бесплатно</h2>

          <p>
            3-дневный пробный период с неограниченным доступом ко всем
            возможностям
          </p>

          <div className="freeForm">
            <input type="text" placeholder="Введите ваш email" />
            <button>Попробовать</button>
          </div>
        </div>

        <div className="freeRight">
          <img className="freeGirl" src="/images/8.png" alt="" />
          <img className="gift1" src="/images/10.png" alt="" />
          <img className="gift2" src="/images/9.png" alt="" />
        </div>
      </div>

      <div className="tarif">
        <h2 className="tarifTitle">Выберите тариф</h2>

        <div className="tarifTabs">
          <button className="tarifTabActive">1 месяц</button>
          <button>3 месяца</button>
          <button>6 месяцев</button>
          <button>12 месяца</button>
        </div>

        <div className="tarifCards">
          <div className="tarifCard">
            <h3>Стартовый</h3>
            <p className="oldPrice empty">.</p>
            <h2>4 990 ₽</h2>

            <button className="tarifBtn">Попробовать</button>
            <button className="moreBtn">Подробнее ⟲</button>
          </div>

          <div className="tarifCard tarifCardBlue">
            <span className="sale">−10%</span>

            <h3>Стартовый +</h3>
            <p className="oldPrice">4 491 ₽/мес</p>
            <h2>13 473 ₽</h2>

            <button className="tarifBtn">Попробовать</button>
            <button className="moreBtn">Подробнее ⟲</button>
          </div>

          <div className="tarifCard tarifCardGreen">
            <span className="sale">−15%</span>

            <h3>Профи</h3>
            <p className="oldPrice">4 241 ₽/мес</p>
            <h2>25 446 ₽</h2>

            <button className="tarifBtn">Попробовать</button>
            <button className="moreBtn">Подробнее ⟲</button>
          </div>
        </div>

        <div className="beginnerBanner">
          <div className="beginnerLeft">
            <h3>Начинающим селлерам с выручкой</h3>
            <p>до 200 000 ₽/мес</p>
            <h2>Бесплатно</h2>

            <button className="tarifBtn beginnerBtn">Попробовать</button>
            <button className="moreBtn beginnerMore">Подробнее ⟲</button>
          </div>

          <div className="beginnerRight">
            <img className="beginnerGift1" src="/images/9.png" alt="" />
            <img className="beginnerGift2" src="/images/11.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Pricing;
