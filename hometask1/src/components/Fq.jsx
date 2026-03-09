function Fq() {
  return (
    <section className="w-full bg-[#f5f3ef] py-8 lg:py-12">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-black lg:text-5xl">
          Частые вопросы
        </h2>

        <div className="mt-5 flex flex-wrap gap-3">
          <button className="h-11 rounded-full border border-[#dccbb8] bg-white px-5 text-[#4a403f]">
            Продукты
          </button>
          <button className="h-11 rounded-full border border-[#dccbb8] bg-white px-5 text-[#4a403f]">
            Программы
          </button>
          <button className="h-11 rounded-full bg-[#dcc9af] px-5 text-[#4a403f]">
            Оплата и доставка
          </button>
          <button className="h-11 rounded-full border border-[#dccbb8] bg-white px-5 text-[#4a403f]">
            Хранение
          </button>
        </div>

        <div className="mt-6 space-y-3">
          <div className="rounded-3xl bg-[#fbfbfa] px-4 py-5 sm:px-6">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-base font-semibold text-[#4a403f] sm:text-2xl">
                Как я могу оплатить заказ?
              </h3>
              <span className="text-2xl text-[#4a403f]">⌄</span>
            </div>
          </div>

          <div className="rounded-3xl bg-[#fbfbfa] px-4 py-5 sm:px-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-base font-semibold text-[#4a403f] sm:text-2xl">
                  Могу ли я изменить адрес и время доставки?
                </h3>

                <p className="mt-4 max-w-5xl text-xs leading-5 text-[#6a5f5d] sm:text-sm sm:leading-6">
                  Каждый вечер, в день доставки, с вами связывается курьер,
                  ориентировочно с 19:00 до 20:00 для уточнения адреса и времени
                  доставки. При необходимости, вы можете их изменить, сообщив об
                  этом курьеру при звонке.
                </p>
              </div>

              <span className="text-2xl text-[#4a403f]">⌃</span>
            </div>
          </div>

          <div className="rounded-3xl bg-[#fbfbfa] px-4 py-5 sm:px-6">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-base font-semibold text-[#4a403f] sm:text-2xl">
                Могу ли я перенести день доставки?
              </h3>
              <span className="text-2xl text-[#4a403f]">⌄</span>
            </div>
          </div>

          <div className="rounded-3xl bg-[#fbfbfa] px-4 py-5 sm:px-6">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-base font-semibold text-[#4a403f] sm:text-2xl">
                Могу ли я приостановить доставку, на какой срок?
              </h3>
              <span className="text-2xl text-[#4a403f]">⌄</span>
            </div>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl bg-[#a5c193] lg:mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-5 sm:p-6 lg:p-8">
              <h3 className="max-w-md text-3xl font-semibold leading-tight text-white lg:text-6xl">
                Бесплатная консультация диетолога
              </h3>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="h-11 rounded-full bg-[#f6f2ee] px-4 text-sm outline-none placeholder:text-[#6a5f5d]"
                />
                <input
                  type="text"
                  placeholder="Телефон"
                  className="h-11 rounded-full bg-[#f6f2ee] px-4 text-sm outline-none placeholder:text-[#6a5f5d]"
                />
              </div>

              <button className="mt-4 h-12 rounded-full bg-[#4f9a7f] px-8 text-sm font-semibold text-white">
                Отправить заявку
              </button>

              <div className="mt-8 flex items-center gap-3 text-white">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white">
                  <span className="text-sm"><img src="/images/instagram.svg" alt="" /></span>
                </div>
                <div>
                  <p className="text-sm leading-4">Нутрициолог Вероника</p>
                  <p className="text-sm leading-4">vnk_fitness</p>
                </div>
              </div>
            </div>

            <div className="flex items-end justify-center lg:justify-end">
              <img
                src="/images/cta1.png"
                alt=""
                className="w-full max-w-xs object-contain sm:max-w-sm lg:max-w-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Fq;
