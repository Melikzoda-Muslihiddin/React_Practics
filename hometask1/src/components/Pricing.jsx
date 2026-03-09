function Pricing() {
  return (
    <section className="w-full bg-[#f5f3ef] py-4 sm:py-6 lg:py-8">
      <div className="w-full px-2 sm:px-4 lg:px-6">
        <div className="rounded-4xl bg-[#fbfbfa] px-3 py-4 sm:px-5 sm:py-6 lg:px-6 lg:py-6">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
            <h2 className="text-2xl font-semibold text-black sm:text-3xl lg:text-5xl">
              Программа питания
            </h2>

            <div className="flex items-center gap-2 text-xs text-[#5a977b] sm:text-sm">
              <span>🍽</span>
              <p>Каждый день новое меню</p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-medium text-[#3f3736] lg:text-2xl">
              Калорийность
            </h3>

            <p className="mt-2 max-w-3xl text-xs leading-5 text-[#b18b63] sm:text-sm">
              Норма калорий позволяет достигать цели. Как рассчитать? На сайте
              есть калькулятор
            </p>

            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
              <button className="flex h-16 flex-col bg-white items-center justify-center rounded-3xl border-[#e2cfba] px-3 text-[#4a403f]">
                <span className="text-lg font-medium ">900 ккал</span>
                <span className="text-sm">3 блюда</span>
              </button>

              <button className="flex h-16 flex-col items-center justify-center rounded-3xl bg-[#d8c4ab] px-3 text-[#4a403f]">
                <span className="text-lg font-medium">1250 ккал</span>
                <span className="text-sm">5 блюд</span>
              </button>

              <button className="flex h-16 flex-col items-center justify-center rounded-3xl border border-[#e2cfba] bg-white px-3 text-[#4a403f]">
                <span className="text-lg font-medium">1600 ккал</span>
                <span className="text-sm">5 блюд</span>
              </button>

              <button className="flex h-16 flex-col items-center justify-center rounded-3xl border border-[#e2cfba] bg-white px-3 text-[#4a403f]">
                <span className="text-lg font-medium">2050 ккал</span>
                <span className="text-sm">6 блюд</span>
              </button>

              <button className="col-span-2 flex h-16 flex-col items-center justify-center rounded-3xl border border-[#e2cfba] bg-white px-3 text-[#4a403f] sm:col-span-3 lg:col-span-1">
                <span className="text-base font-medium sm:text-lg">
                  индивидуально
                </span>
                <span className="text-sm">подобрать</span>
              </button>
            </div>
          </div>

          <div className="mt-6 lg:mt-8">
            <h3 className="text-lg font-medium text-[#3f3736] lg:text-2xl">
              Продолжительность
            </h3>

            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
              <button className="flex h-16 flex-col items-center justify-center rounded-3xl border border-[#e2cfba] bg-white px-3 text-[#4a403f]">
                <span className="text-base font-medium sm:text-lg">
                  Пробные 2 дня
                </span>
                <span className="text-sm">за 2 900 ₽</span>
              </button>

              <button className="flex h-16 flex-col items-center justify-center rounded-3xl border border-[#e2cfba] bg-white px-3 text-[#4a403f]">
                <span className="text-base font-medium sm:text-lg">
                  1 неделя
                </span>
                <span className="text-sm">1 700 ₽ в день</span>
              </button>

              <button className="flex h-16 flex-col items-center justify-center rounded-3xl bg-[#d8c4ab] px-3 text-[#4a403f]">
                <span className="text-base font-medium sm:text-lg">
                  2 недели
                </span>
                <span className="text-sm">1 600 ₽ в день</span>
              </button>

              <button className="flex h-16 flex-col items-center justify-center rounded-3xl border border-[#e2cfba] bg-white px-3 text-[#4a403f]">
                <span className="text-base font-medium sm:text-lg">
                  3 недели
                </span>
                <span className="text-sm">1 520 ₽ в день</span>
              </button>

              <button className="flex h-16 flex-col items-center justify-center rounded-3xl border border-[#e2cfba] bg-white px-3 text-[#4a403f]">
                <span className="text-base font-medium sm:text-lg">
                  4 недели
                </span>
                <span className="text-sm">1 450 ₽ в день</span>
              </button>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <p className="max-w-55 text-xs leading-4 text-[#4a403f] sm:text-sm">
                Выберите, сколько дней в неделю вы хотите питаться
              </p>

              <div className="flex w-max items-center rounded-full border border-[#e2cfba] bg-white p-1">
                <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d8c4ab] text-sm text-[#4a403f]">
                  5
                </button>
                <button className="flex h-8 w-8 items-center justify-center rounded-full text-sm text-[#4a403f]">
                  6
                </button>
                <button className="flex h-8 w-8 items-center justify-center rounded-full text-sm text-[#4a403f]">
                  7
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#5a977b] sm:text-sm">
              <span>🍳</span>
              <p>Что мы готовили на прошлой неделе</p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-medium text-[#3f3736] lg:text-2xl">
              Пример недельного рациона
            </h3>

            <p className="mt-2 text-xs leading-5 text-[#b18b63] sm:text-sm">
              6 блюд. Калорийность — 1235 ккал. Белки — 103 г, жиры — 37 г,
              углеводы — 120 г
            </p>

            <div className="mt-4 flex flex-wrap gap-2 lg:gap-4">
              <button className="h-10 rounded-full border border-[#e2cfba] bg-white px-4 text-sm text-[#4a403f] sm:h-12 sm:px-5 sm:text-lg">
                понедельник
              </button>
              <button className="h-10 rounded-full border border-[#e2cfba] bg-white px-4 text-sm text-[#4a403f] sm:h-12 sm:px-5 sm:text-lg">
                вторник
              </button>
              <button className="h-10 rounded-full border border-[#e2cfba] bg-white px-4 text-sm text-[#4a403f] sm:h-12 sm:px-5 sm:text-lg">
                четверг
              </button>
              <button className="h-10 rounded-full border border-[#e2cfba] bg-[#d8c4ab] px-4 text-sm text-[#4a403f] sm:h-12 sm:px-5 sm:text-lg">
                пятница
              </button>
              <button className="h-10 rounded-full border border-[#e2cfba] bg-white px-4 text-sm text-[#4a403f] sm:h-12 sm:px-5 sm:text-lg">
                суббота
              </button>
              <button className="h-10 rounded-full border border-[#e2cfba] bg-white px-4 text-sm text-[#4a403f] sm:h-12 sm:px-5 sm:text-lg">
                воскресенье
              </button>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-x-3 gap-y-5 lg:grid-cols-4 lg:gap-6">
            <div className="text-center lg:text-left">
              <img
                src="/images/image 20.png"
                alt=""
                className="mx-auto h-36 w-36 rounded-full object-cover shadow-sm sm:h-44 sm:w-44 lg:h-52 lg:w-52 lg:mx-0"
              />
              <p className="mt-3 text-xs text-[#b18b63]">Завтрак 300 гр</p>
              <p className="mt-1 text-sm leading-5 text-[#4a403f] lg:max-w-52 lg:text-base">
                Геркулес с зелёным яблоком и семенами льна
              </p>
            </div>

            <div className="text-center lg:text-left">
              <img
                src="/images/image 21.png"
                alt=""
                className="mx-auto h-36 w-36 rounded-full object-cover shadow-sm sm:h-44 sm:w-44 lg:h-52 lg:w-52 lg:mx-0"
              />
              <p className="mt-3 text-xs text-[#b18b63]">Ланч 160 гр</p>
              <p className="mt-1 text-sm leading-5 text-[#4a403f] lg:max-w-52 lg:text-base">
                Дольки яблок в клюквенном маринаде
              </p>
            </div>

            <div className="text-center lg:text-left">
              <img
                src="/images/image 22.png"
                alt=""
                className="mx-auto h-36 w-36 rounded-full object-cover shadow-sm sm:h-44 sm:w-44 lg:h-52 lg:w-52 lg:mx-0"
              />
              <p className="mt-3 text-xs text-[#b18b63]">Обед 275 гр</p>
              <p className="mt-1 text-sm leading-5 text-[#4a403f] lg:max-w-52 lg:text-base">
                Рагу из морепродуктов
              </p>
            </div>

            <div className="text-center lg:text-left">
              <img
                src="/images/image 23.png"
                alt=""
                className="mx-auto h-36 w-36 rounded-full object-cover shadow-sm sm:h-44 sm:w-44 lg:h-52 lg:w-52 lg:mx-0"
              />
              <p className="mt-3 text-xs text-[#b18b63]">Ужин 415 гр</p>
              <p className="mt-1 text-sm leading-5 text-[#4a403f] lg:max-w-52 lg:text-base">
                Гречневая каша с куриным филе
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-[28px] bg-[#a4c290] px-4 py-5 lg:mt-8 lg:px-6 lg:py-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-col items-center gap-3 lg:items-start">
                <button className="h-12 rounded-full bg-[#5a977b] px-5 text-sm font-semibold text-white sm:px-6">
                  Заказать 10 дней питания за 16 000 ₽
                </button>
                <p className="text-center text-xs text-white/90 sm:text-sm lg:text-left">
                  1250 ккал за 1 600 ₽ в день
                </p>
              </div>

              <div className="text-center text-white lg:max-w-2xl lg:text-left">
                <div className="mb-3 text-4xl flex mb:justify-center"><img src="/images/3.png" alt="" /></div>
                <h4 className="text-2xl font-semibold leading-8 lg:text-4xl lg:leading-10">
                  Будем доставлять наборы каждый день.
                </h4>
                <p className="mt-3 text-xs leading-5 text-white/95 sm:text-sm lg:text-base lg:leading-6">
                  Доставка осуществляется каждый день с 06:00 до 12:00. Выбор
                  интервала — 2 часа. Заявки принимаются не позднее, чем за день
                  до предполагаемой доставки.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Pricing;
