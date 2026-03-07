function Questions() {
  return (
    <div className="reviewsFaq">
      <div className="reviewsTop">
        <h2 className="reviewsTitle">Отзывы</h2>
        <div className="reviewsArrows">
          <button>←</button>
          <button>→</button>
        </div>
      </div>
      <div className="reviewsCards">
        <div className="reviewCard">
          <p className="reviewText">
            Изначально нашёл сервис в поиске Яндекса, когда искал калькулятор
            unit-экономики товара. Калькулятор полностью устроил и решил
            пользоваться самим сайтом. К тому же это было для меня бесплатно,
            так как калькулятор по условиям бесплатного доступа: оборот до
            200т.р. в месяц. Это не встретить на других сайтах, это возможность
            развиваться на ранних этапах, без вложения огромных сумм для доступа
            к подобным сайтам.
          </p>
          <button className="readMoreBtn">Читать полностью ˅</button>
          <h4>— Алексей</h4>
        </div>
        <div className="reviewCard reviewCardSecond">
          <p className="reviewText">
            Функционал сервиса, тот что есть — полностью устраивает. Хочется ещё
            автобиддер по ставкам в рекламных компаниях и это наверное всё что
            будет!
          </p>
          <h4>— Владислав</h4>
        </div>
      </div>
      <div className="reviewDots">
        <span className="dotActive"></span>
        <span></span>
        <span></span>
      </div>
      <div className="faqSection">
        <div className="faqLeft">
          <h2 className="faqTitle">Часто задаваемые вопросы</h2>
          <p className="faqSub">
            Собрали ответы на часто задаваемые вопросы от вас
          </p>
          <div className="faqItem faqItemOpen">
            <div className="faqHead">
              <h3>Чем вы отличаетесь от Mpstats и других систем аналитики?</h3>
              <button className="faqCircle">×</button>
            </div>
            <p className="faqText">
              Мы специализируемся на внутренней финансовой аналитике, поэтому
              данные у нас более точные и полезные. Другие сервисы аналитики
              обычно специализируются на внешнем анализе продаж всех поставщиков
              и берут данные из открытых источников. Мы же собираем данные
              только по вашим кабинетам, по тем доступам, которые вы нам
              предоставили.
            </p>
          </div>
          <div className="faqItem">
            <div className="faqHead">
              <h3>Сколько я могу пользоваться своими данными?</h3>
              <button className="faqCircle">+</button>
            </div>
          </div>
          <div className="faqItem">
            <div className="faqHead">
              <h3>Сколько времени занимает создание отчетов?</h3>
              <button className="faqCircle">+</button>
            </div>
          </div>
          <div className="faqItem">
            <div className="faqHead">
              <h3>В чем удобство вашей аналитики?</h3>
              <button className="faqCircle">+</button>
            </div>
          </div>
          <div className="faqItem">
            <div className="faqHead">
              <h3>Насколько точные данные получаются по API?</h3>
              <button className="faqCircle">+</button>
            </div>
          </div>
          <div className="faqItem">
            <div className="faqHead">
              <h3>Что делать если маркетплейс изменит API?</h3>
              <button className="faqCircle">+</button>
            </div>
          </div>
          <div className="faqItem">
            <div className="faqHead">
              <h3>Безопасно ли передавать вам API ключи от кабинета?</h3>
              <button className="faqCircle">+</button>
            </div>
          </div>
        </div>
        <div className="faqRight">
          <div className="faqBanner">
            <h2>Повысьте эффективность маркетинга и продаж с Mpassistant</h2>
            <p>
              3-дневный пробный период с неограниченным доступом ко всем
              возможностям
            </p>
            <input type="text" placeholder="Введите ваш email" />
            <button>Попробовать</button>
            <img className="faqGirl" src="/images/3.png" alt="" />
            <img className="faqIcon" src="/images/2.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Questions;
