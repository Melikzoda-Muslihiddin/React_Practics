import Mena from "../assets/MENA.svg";
import Webinar from "../assets/Vebinar.svg";
import MBangkok from "../assets/m_bangkok.svg";
import Telegram from "../assets/Telegram.svg";
import WhatsApp from "../assets/WhatsApp.svg";

const events = [
  {
    id: 1,
    img: Mena,
    title: "Новый отчет по MENA",
    text: "Аналитический отчет по рынкам Ближнего Востока (инвесторы, объем раундов, ТОП сферы)",
    date: "22.11.2022",
  },
  {
    id: 2,
    img: Webinar,
    title: "Вебинар по особенностям рынков Ближнего Востока",
    text: "Поговорим с экспертами рынков в формате дискуссии",
    date: "22.11.2022",
  },
  {
    id: 3,
    img: MBangkok,
    title: "Вебинар по особенностям рынков Ближнего Востока",
    text: "Поговорим с экспертами рынков в формате дискуссии",
    date: "22.11.2022",
  },
];

function Footer() {
  return (
    <footer className="bg-[#f5f5f5]" id="nov">
      <section
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url('/images/back_contract.png')" }}
      >
        <div className="absolute inset-0 bg-black/35"></div>
        <div className="relative max-w-300 mx-auto px-4 md:px-6 py-16 md:py-24 text-center text-white">
          <h2 className="max-w-190 mx-auto text-[28px] md:text-[42px] leading-[1.2] font-bold mb-5">
            Мы создаем международное сообщество экспертов и партнеров
          </h2>

          <p className="max-w-180 mx-auto text-[13px] md:text-[16px] leading-6 text-white/90 mb-8">
            Если вы или ваш бизнес может быть полезен IT командам при выходе на
            международные рынки, приглашаем вас стать нашим партнером
          </p>

          <button className="bg-[#47aaf0] hover:bg-[#3297de] transition text-white text-[15px] md:text-[16px] font-medium px-10 py-4 rounded-md">
            Стать партнером
          </button>
        </div>
      </section>
      <section className="max-w-300 mx-auto px-4 md:px-6 py-14 md:py-20">
        <h2 className="text-center text-[#1786d8] text-[28px] md:text-[38px] font-bold mb-10 md:mb-14">
          Мероприятия и события
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-37.5 md:h-45 object-cover"
              />

              <div className="p-5">
                <h3 className="text-[18px] md:text-[20px] font-semibold leading-[1.3] mb-3 text-[#222]">
                  {item.title}
                </h3>

                <p className="text-[13px] md:text-[14px] text-[#6f6f6f] leading-6 mb-6">
                  {item.text}
                </p>

                <span className="text-[12px] md:text-[13px] text-[#9a9a9a]">
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section
        className="bg-cover bg-center"
        style={{ backgroundImage: "url('/images/back_portners.png')" }}
      >
        <div className="max-w-300 mx-auto px-4 md:px-6 py-14 md:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="text-white">
              <h2 className="text-[30px] md:text-[42px] font-bold mb-5">
                Остались вопросы?
              </h2>

              <p className="text-[14px] md:text-[16px] text-white/90 mb-12">
                Оставьте заявку и наша команда свяжется с вами
              </p>

              <p className="text-[18px] md:text-[20px] font-semibold mb-6">
                Или напишите нам:
              </p>

              <div className="flex items-center gap-6 md:gap-8">
                <a
                  href="#"
                  className="flex items-center gap-1 text-white hover:opacity-90 transition"
                >
                  <img src={Telegram} alt="Telegram" className="w-25 h-25" />
                  <span className="text-[16px] md:text-[18px]">Telegram</span>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-1 text-white hover:opacity-90 transition"
                >
                  <img src={WhatsApp} alt="WhatsApp" className="w-25 h-25" />
                  <span className="text-[16px] md:text-[18px]">Whatsapp</span>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Имя"
                  className="w-full border-b border-[#d9d9d9] outline-none pb-3 text-[14px] md:text-[15px] placeholder:text-[#9a9a9a]"
                />

                <input
                  type="email"
                  placeholder="Почта"
                  className="w-full border-b border-[#d9d9d9] outline-none pb-3 text-[14px] md:text-[15px] placeholder:text-[#9a9a9a]"
                />

                <input
                  type="tell"
                  placeholder="+992 123 45 67 89"
                  className="w-full border-b border-[#d9d9d9] outline-none pb-3 text-[14px] md:text-[15px] placeholder:text-[#9a9a9a]"
                />

                <button
                  type="button"
                  className="bg-[#18b867] hover:bg-[#12a75b] transition text-white px-8 py-4 rounded-md text-[15px] md:text-[16px] font-medium"
                >
                  Оставить заявку
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section
        className="bg-cover bg-center"
        style={{ backgroundImage: "url('/images/back_hero.png')" }}
      >
        <div className="bg-black/55">
          <div className="max-w-300 mx-auto px-4 md:px-6 py-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 text-white">
              <div className="flex items-center gap-4">
                <img
                  src="/images/INNOMA.VC.png"
                  alt="INNOMA"
                  className="w-32.5 md:w-37.5 object-contain"
                />

                <p className="text-[12px] md:text-[13px] text-white/80">
                  Все права защищены
                </p>
              </div>

              <nav className="flex flex-wrap gap-5 md:gap-8 text-[14px] md:text-[15px] text-white/90">
                <a href="#" className="hover:text-white transition">
                  Кто мы?
                </a>
                <a href="#" className="hover:text-white transition">
                  Услуги
                </a>
                <a href="#" className="hover:text-white transition">
                  Акселератор
                </a>
                <a href="#nov" className="hover:text-white transition">
                  Новости
                </a>
              </nav>

              <div className="text-[13px] md:text-[14px] text-white/85 leading-6">
                <p>Dubai, Single Business Tower</p>
                <p>1503, Business Bay</p>
                <a href="#" className="text-white underline">
                  Sales@innoma.vc
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
export default Footer;
