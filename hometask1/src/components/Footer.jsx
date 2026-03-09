function Footer() {
  return (
    <section className="w-full bg-[#f5f3ef] py-6 lg:py-10">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* отзывы */}
        <div>
          <h2 className="text-3xl font-semibold text-black lg:text-5xl">
            Отзывы
          </h2>

          <div className="mt-6 flex items-center gap-3 lg:gap-5">
            <img src="/images/arrow-left.png" alt="" />

            <div className="grid flex-1 grid-cols-2 gap-3 lg:grid-cols-2 lg:gap-6">
              <img
                src="/images/Chat1.png"
                alt=""
                className="h-40 w-full rounded-3xl object-cover sm:h-56 lg:h-80"
              />
              <img
                src="/images/Chat2.png"
                alt=""
                className="h-40 w-full rounded-3xl object-cover sm:h-56 lg:h-80"
              />
            </div>

            <img src="/images/arrow-right.png" alt="" />
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 items-center gap-8 lg:mt-16 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold text-black lg:text-5xl">
              Пробный рацион
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-[#6a5f5d] lg:text-xl lg:leading-9">
              Сомневаетесь? Начните с пробного меню на два дня. Попробуйте
              полноценную дневную программу всего за 2 900 ₽
            </p>

            <button className="mt-8 h-12 rounded-full bg-[#5a977b] px-8 text-sm font-semibold text-white lg:h-14 lg:px-10 lg:text-base">
              Попробовать
            </button>
          </div>

          <div className="relative flex min-h-64 items-center justify-center lg:min-h-80">
            <div className="h-44 w-44 rounded-full bg-[#d9d2b3] sm:h-52 sm:w-52 lg:h-64 lg:w-64"></div>
            <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-y-2 rounded-full bg-[#9fa6b8] sm:h-40 sm:w-40 lg:h-48 lg:w-48"></div>
          </div>
        </div>
        <div className="mt-10 rounded-3xl bg-[#c49d88] px-4 py-6 sm:px-6 lg:mt-14 lg:px-8 lg:py-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-3xl font-semibold text-white lg:text-5xl">
                Будьте всегда в курсе!
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-6 text-white/95 lg:text-base">
                ✉ Подпишитесь на рассылку и будьте всегда в курсе новинок, акций
                и новостей!
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 lg:w-auto lg:flex-row lg:items-center">
              <input
                type="text"
                placeholder="Укажите вашу почту"
                className="h-12 w-full rounded-full bg-white px-5 text-sm outline-none placeholder:text-[#7b7271] lg:w-72"
              />
              <button className="h-12 rounded-full bg-[#5a977b] px-8 text-sm font-semibold text-white">
                Подписаться
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-8 lg:mt-12 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="text-3xl font-semibold text-[#4a403f] lg:text-4xl">
              +7 988 500-1-700
            </p>
            <p className="mt-1 text-xs text-[#6a5f5d] lg:text-sm">
              Ежедневно с 09:00 до 21:00
            </p>
          </div>

          <div>
            <p className="text-2xl font-semibold text-[#4a403f] lg:text-3xl">
              hello@pora-poest.com
            </p>
          </div>

          <div className="flex items-center gap-4">
            <img src="/images/Group 144.png" alt="" />
          </div>
        </div>

        <div className="mt-8 text-center lg:text-left">
          <p className="text-sm leading-6 text-[#6a5f5d]">
            ООО «ПораПоесть», г. Краснодар, ул. Кубанская Набережная улица, дом
            5, офис 4
          </p>

          <p className="mt-3 text-sm leading-6 text-[#6a5f5d]">
            © 2021 ПораПоесть — сервис доставки прогрессивного питания.
          </p>

          <p className="mt-3 max-w-4xl text-xs leading-5 text-[#6a5f5d]">
            Фотографии блюд на сайте являются вариантом сервировки блюда.
            Внешний вид блюда может отличаться от фотографии на сайте. Указывая
            электронную почту и номер телефона на сайте, вы соглашаетесь с
            условиями Публичной оферты и Политикой конфиденциальности
          </p>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-end">
          <img src="/images/card.png" alt="" />
        </div>
      </div>
    </section>
  );
}
export default Footer;
