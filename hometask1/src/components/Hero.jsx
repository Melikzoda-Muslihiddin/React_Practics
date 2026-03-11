function Hero() {
  return (
    <section id="dlay" className="bg-gray-100 mt-199">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-center text-blue-600 text-2xl font-bold mb-12">
          Для кого мы?
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-10 rounded-lg shadow text-center">
            <h3 className="text-5xl text-blue-400 font-bold mb-4">01</h3>
            <p className="font-semibold mb-3">IT проекты на стадии идеи</p>
            <p className="text-gray-500 text-sm">
              Для стартапов, которые планируют привлечь международные инвестиции
              и протестировать спрос
            </p>
          </div>
          <div className="bg-white p-10 rounded-lg shadow text-center">
            <h3 className="text-5xl text-blue-400 font-bold mb-4">02</h3>
            <p className="font-semibold mb-3">Инновационный бизнес</p>
            <p className="text-gray-500 text-sm">
              Для уже работающего технологического бизнеса, позволяющий найти
              новые международные рынки
            </p>
          </div>
          <div className="bg-white p-10 rounded-lg shadow text-center">
            <h3 className="text-5xl text-blue-400 font-bold mb-4">03</h3>
            <p className="font-semibold mb-3">Корпорации</p>
            <p className="text-gray-500 text-sm">
              Для крупных технологических компаний желающих выйти на новые рынки
            </p>
          </div>
        </div>
      </div>
      <div
        className="bg-cover bg-center py-24"
        style={{ backgroundImage: "url('/images/back_contract.png')" }}
      >
        <div className="max-w-5xl mx-auto text-center text-white px-6">
          <h2 className="bg-green-500 inline-block px-6 py-3 text-xl md:text-3xl font-bold">
            НАУЧИТЕСЬ ИССЛЕДОВАТЬ ИНОСТРАННЫЕ РЫНКИ И ОТКРОЙТЕ НОВЫЕ ВОЗМОЖНОСТИ
            ДЛЯ СВОЕГО БИЗНЕСА
          </h2>
          <p className="mt-6 text-sm md:text-base">
            Наша команда поможет вам изучить рынки Ближнего Востока, Азии,
            Латинской Америки и Африки
          </p>
          <button className="mt-8 bg-blue-500 px-8 py-3 rounded text-white">
            Получить консультацию
          </button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-center text-blue-600 text-2xl font-bold mb-10">
          С какими рынками мы работаем?
        </h2>
        <div className="flex justify-center mb-12">
          <div className="bg-gray-200 rounded flex overflow-hidden">
            <button className="px-6 py-3 bg-blue-400 text-white">
              Ближний восток
            </button>
            <button className="px-6 py-3 text-gray-600">Азия</button>
            <button className="px-6 py-3 text-gray-600">
              Латинская Америка
            </button>
            <button className="px-6 py-3 text-gray-600">Африка</button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-xl font-bold mb-4">
              ЧЕМ ИНТЕРЕСЕН
              <span className="text-green-500"> РЫНОК MENA:</span>
            </h3>
            <p className="text-gray-600 mb-6">
              ОАЭ, Саудовская Аравия, Израиль, Оман, Бахрейн, Катар, Тунис,
              Иордания
            </p>
            <div className="flex items-center gap-4 mb-6">
              <img
                src="/images/Profil_icon.png"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold">Фатима</p>
                <p className="text-gray-500 text-sm">Менеджер по MENA</p>
              </div>
            </div>
            <button className="bg-blue-500 px-6 py-3 text-white rounded">
              Выйти на рынок
            </button>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded shadow text-center">
              <p className="text-2xl text-blue-500 font-bold">&gt;5,5</p>
              <p className="text-sm text-gray-500">Млрд инвестиций</p>
            </div>
            <div className="bg-white p-6 rounded shadow text-center">
              <p className="text-2xl text-blue-500 font-bold">&gt;300</p>
              <p className="text-sm text-gray-500">Акселераторов</p>
            </div>
            <div className="bg-white p-6 rounded shadow text-center">
              <p className="text-2xl text-blue-500 font-bold">73</p>
              <p className="text-sm text-gray-500">Венчурных фонда</p>
            </div>
            <div className="bg-blue-500 p-6 rounded text-white text-center flex flex-col items-center justify-center">
              <img src="/images/Down_icon.png" className="w-6 mb-3" />
              <p className="text-sm">
                Скачать отчет
                <br />
                по рынку MENA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
