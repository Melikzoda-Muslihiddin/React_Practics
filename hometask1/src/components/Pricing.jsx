const res = [
  {
    id: "01",
    title: "Документы по продукту",
    text: "Бизнес план, юнит экономика, маркетинговый план, pitch deck, презентация, проект MVP",
  },
  {
    id: "02",
    title: "Обратная связь от рынка",
    text: "Проведённые исследования целевой аудитории позволят сформировать Product market fit",
  },
  {
    id: "03",
    title: "Продвижение продукта",
    text: "Продвижение продукта через аналитические системы лид-генерации",
  },
  {
    id: "04",
    title: "Подписка на отчёты",
    text: "Подписка на аналитические отчёты по международной рыночной высокотехнологичной сфере",
  },
  {
    id: "05",
    title: "Подписка на отчёты",
    text: "Подписка на аналитические отчёты по международной рыночной высокотехнологичной сфере",
  },
  {
    id: "06",
    title: "Подписка на отчёты",
    text: "Подписка на аналитические отчёты по международной рыночной высокотехнологичной сфере",
  },
];

const prising = [
  {
    id: 1,
    icon: "/images/acrobat.png",
    title: "Анализ международных рынков",
    subtitle: "Что входит в отчёт?",
    items: [
      "Анализ конкурентов",
      "Анализ инвесторов",
      "Размеры рынка (TAM,SAM,SOM)",
      "Анализ СМИ",
      "Анализ запросов в сети интернет",
    ],
    ready: "7 раб. дней",
    lang: "рус. / англ.",
    price: "$1 000",
  },
  {
    id: 2,
    icon: "/images/setings.png",
    title: "Упаковка стартапа под локальные рынки",
    subtitle: "Что входит в услугу?",
    items: [
      "Анализ локальных рынков",
      "Бизнес план",
      "Pitch презентация",
      "Финансовый план",
      "Расчёт юнит экономики",
      "Проведение каст дев",
    ],
    ready: "7 раб. дней",
    lang: "рус. / англ.",
    price: "$1 000",
  },
  {
    id: 3,
    icon: "/images/racket.png",
    title: "Акселератор вашего бизнеса",
    subtitle: "Что входит в акселератор?",
    items: [
      "Онлайн доступ к курсам",
      "Документы для бизнеса",
      "Pitch презентация",
      "Демо день",
      "Продвижение по результатам",
    ],
    ready: "7 раб. дней",
    lang: "рус. / англ.",
    price: "$1 000",
  },
];

const partners = [
  { id: 1, img: "/images/Pitchbook.png", alt: "Pitchbook" },
  { id: 2, img: "/images/cranchbase.png", alt: "Crunchbase" },
  { id: 3, img: "/images/Dealroom 1.png", alt: "Dealroom" },
  { id: 4, img: "/images/vedar.png", alt: "Vadar" },
  { id: 5, img: "/images/f6s 3.png", alt: "F6S" },
  { id: 6, img: "/images/angel list.png", alt: "AngelList" },
];

function ResultCard({ id, title, text }) {
  return (
    <div className="bg-white rounded-md shadow-sm px-4 py-6 md:px-6 md:py-8 text-center transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="text-[#8bbfe3] text-[44px] md:text-[64px] font-bold leading-none mb-3">
        {id}
      </div>

      <h3 className="text-[13px] md:text-[18px] font-semibold mb-2">{title}</h3>

      <p className="text-[11px] md:text-[14px] text-[#777] leading-5">{text}</p>
    </div>
  );
}

function PricingCard({ icon, title, subtitle, items, ready, lang, price }) {
  return (
    <div className="bg-white rounded-md shadow-sm overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="px-6 pt-8 pb-6 text-center border-b border-[#ececec]">
        <img
          src={icon}
          alt={title}
          className="w-13.5 h-13.5 mx-auto mb-4 object-contain"
        />

        <h3 className="text-[18px] md:text-[22px] font-semibold leading-[1.2] min-h-13 md:min-h-15.5">
          {title}
        </h3>
      </div>

      <div className="px-6 py-6">
        <p className="text-[14px] font-medium mb-4">{subtitle}</p>

        <ol className="text-[13px] text-[#666] leading-7 mb-6 list-decimal pl-4 min-h-42.5 md:min-h-50">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>

        <div className="space-y-3 text-[13px] md:text-[14px] mb-6">
          <div className="flex justify-between border-t pt-3">
            <span className="text-[#666]">Готовность</span>
            <span>{ready}</span>
          </div>

          <div className="flex justify-between border-t pt-3">
            <span className="text-[#666]">Язык</span>
            <span>{lang}</span>
          </div>

          <div className="flex justify-between border-t pt-3">
            <span className="text-[#666]">Стоимость</span>
            <span className="text-[#1f86d8] font-semibold">{price}</span>
          </div>
        </div>

        <button className="w-full bg-[#48a8e7] hover:bg-[#3798d8] transition text-white py-3 rounded-md text-[14px] md:text-[15px]">
          Оставить заявку
        </button>
      </div>
    </div>
  );
}

export default function PartnersPricing() {
  return (
    <section className="bg-[#f5f5f5]">
      <div className="max-w-295 mx-auto px-4 md:px-6 py-10 md:py-16">
        <div
          className="rounded-sm overflow-hidden bg-cover bg-center mb-14 md:mb-20"
          style={{ backgroundImage: "url('/images/back_portners.png')" }}
        >
          <div className="grid lg:grid-cols-2 gap-8 px-5 py-8 md:px-10 md:py-12 lg:px-14 lg:py-14 items-center">
            <div className="text-white">
              <h2 className="text-[24px] md:text-[34px] leading-[1.2] font-bold max-w-107.5 mb-4">
                Попадите на радары инвесторов и партнёров
              </h2>

              <p className="text-[13px] md:text-[15px] text-blue-50 max-w-105 leading-6 mb-6">
                В результате прохождения обучения мы создадим профили вашей
                компании на всех международных скаутинговых площадках
              </p>

              <button className="bg-[#18b84f] hover:bg-[#14a043] transition text-white text-[14px] md:text-[15px] font-medium px-6 py-3 rounded-md">
                Записаться в акселератор
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 max-w-90 lg:ml-auto">
              {partners.map((partner) => (
                <div
                  key={partner.id}
                  className="bg-white rounded-md h-15.5 md:h-18.5 flex items-center justify-center px-3 transition hover:shadow-md"
                >
                  <img
                    src={partner.img}
                    alt={partner.alt}
                    className="max-h-7 md:max-h-8.5 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <h2 className="text-center text-[#1f86d8] text-[24px] md:text-[34px] font-bold mb-8 md:mb-10">
          Что вы получите в результате?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16 md:mb-20">
          {res.map((item) => (
            <ResultCard
              key={item.id}
              id={item.id}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>

        <h2 className="text-[#1f86d8] text-[24px] md:text-[34px] font-bold mb-8 md:mb-10">
          Стоимость
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prising.map((item) => (
            <PricingCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              subtitle={item.subtitle}
              items={item.items}
              ready={item.ready}
              lang={item.lang}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
