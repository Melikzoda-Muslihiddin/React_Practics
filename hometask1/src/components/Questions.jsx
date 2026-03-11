const hackathonImages = [
  "/src/assets/hackaton_1.svg",
  "/src/assets/hackaton_2.svg",
  "/src/assets/hackaton_3.svg",
  "/src/assets/hackaton_4.svg",
  "/src/assets/hackaton_5.svg",
];

const experts = [
  {
    img: "/src/assets/Yuriy_Kim.svg",
    name: "Юрий Ким",
    role: "Проведение исследований целевой аудитории позволит сформировать Product market fit",
  },
  {
    img: "/src/assets/Eshli_Abrams.svg",
    name: "Эшли Абрамс",
    role: "Проведение исследований целевой аудитории позволит сформировать Product market fit",
  },
  {
    img: "/src/assets/Fatimi_Yusuf.svg",
    name: "Фатими Юсуф",
    role: "Проведение исследований целевой аудитории позволит сформировать Product market fit",
  },
  {
    img: "/src/assets/Maykl_Danovan.svg",
    name: "Майкл Донован",
    role: "Проведение исследований целевой аудитории позволит сформировать Product market fit",
  },
];
function Questions() {
  return (
    <section className="bg-[#f5f5f5] py-12 md:py-16 lg:py-20">
      <div className="max-w-295 mx-auto px-4 md:px-6">
        <h2 className="text-[#1385d8] text-[26px] md:text-[34px] font-bold mb-8 md:mb-10">
          Кто мы?
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 items-center mb-14 md:mb-16">
          <div className="flex justify-center lg:justify-start">
            <img
              src="/src/assets/statistica.svg"
              alt="statistics"
              className="w-full max-w-115 object-contain"
            />
          </div>

          <div className="text-center lg:text-left">
            <p className="text-[15px] md:text-[17px] leading-7 text-[#666]">
              <span className="text-[#1385d8] font-semibold">INNOMA.VC</span> -
              международное аналитическое агентство по запуску IT бизнеса на
              локальных рынках регионов Азии, Ближнего Востока, Латинской
              Америки, Африки.
            </p>

            <p className="text-[15px] md:text-[17px] leading-7 text-[#666] mt-6">
              Наша команда состоит из профессионалов своего дела и основной
              нашей целью является помочь IT-компаниям получить необходимые
              знания и пакеты документов, чтобы успешно запустить свой продукт
              на международных рынках.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm px-5 py-6 md:px-8 md:py-8 lg:px-10 lg:py-10 grid lg:grid-cols-[320px_1fr] gap-8 items-center mb-10 md:mb-12">
          <div className="order-2 lg:order-1 flex justify-center">
            <img
              src="/src/assets/roman.svg"
              alt="roman"
              className="w-full max-w-65 md:max-w-75 object-contain"
            />
          </div>

          <div className="order-1 lg:order-2 text-center lg:text-left">
            <p className="text-[#555] leading-8 text-[15px] md:text-[16px] italic">
              Всем привет!
              <br />
              Меня зовут Роман. Последние 6 лет я являюсь частью инновационной
              экосистемы СНГ, прошел путь от проектного менеджера до
              руководителя продукта по автоматизированному скаутингу и ускорению
              стартапов. За 6 лет работы я увидел множество ошибок и отсутствие
              ориентации акселерационных программ под запросы стартапов. Все
              акселераторы выполнялись ради акселераторов и выполнения KPI.
            </p>

            <div className="mt-6 text-[#666] text-[14px] md:text-[15px]">
              <p className="font-medium">Роман Гайн</p>
              <p>Основатель INNOMA.VC</p>
            </div>
          </div>
        </div>
        <div className="mb-14 md:mb-16">
          <div className="flex gap-3 md:gap-4 overflow-x-auto pb-2 scroll-smooth snap-x">
            {hackathonImages.map((img, index) => (
              <div
                key={index}
                className="min-w-45 md:min-w-52.5 lg:min-w-55 shrink-0 snap-start"
              >
                <img
                  src={img}
                  alt={`hackathon-${index + 1}`}
                  className="w-full h-22.5 md:h-30 object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
        <h3 className="text-[#1385d8] text-[24px] md:text-[32px] font-bold mb-8 md:mb-10">
          Эксперты и трекеры программы
        </h3>
        <div className="flex gap-6 md:gap-8 overflow-x-auto pb-4 scroll-smooth snap-x">
          {experts.map((expert, index) => (
            <div
              key={index}
              className="min-w-55 md:min-w-60 lg:min-w-62.5 shrink-0 text-center snap-start"
            >
              <img
                src={expert.img}
                alt={expert.name}
                className="w-30 h-30 md:w-37.5 md:h-37.5 rounded-full mx-auto mb-4 object-cover"
              />

              <h4 className="font-semibold text-[18px] md:text-[20px] mb-2 text-[#222]">
                {expert.name}
              </h4>

              <p className="text-[13px] md:text-[14px] text-[#7a7a7a] leading-5 max-w-55 mx-auto">
                {expert.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Questions;
