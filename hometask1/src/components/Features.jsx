function Features() {
  return (
    <section id="acc" className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-blue-600 text-2xl font-bold mb-4">
          Об акселераторе IT бизнеса
        </h2>
        <p className="text-center text-gray-500 mb-12">
          Программа акселератора рассчитана на 3 недели интенсивного онлайн
          курса с вебинарами приглашенных экспертов
        </p>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-8 rounded shadow text-center">
            <img src="/images/3.png" className="mx-auto mb-4 w-16" />
            <p className="text-gray-500 text-sm">Месяца обучения</p>
          </div>
          <div className="bg-white p-8 rounded shadow text-center">
            <img src="/images/earth.png" className="mx-auto mb-4 w-22" />
            <p className="text-gray-500 text-sm">Приглашенные эксперты</p>
          </div>
          <div className="bg-white p-8 rounded shadow text-center">
            <img src="/images/meneger_icon.png" className="mx-auto mb-4 w-28" />
            <p className="text-gray-500 text-sm">Персональный менеджер</p>
          </div>
        </div>
        <div className="bg-black rounded-lg flex items-center justify-center h-65 md:h-90 mb-16">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/HyD7X2oo_pY?si=aylG73N1lwNvBuOe"
            title="video"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
        <h3 className="text-blue-600 text-xl font-bold mb-8">
          Программа акселератора
        </h3>
        <div className="space-y-4">
          <div className="bg-white p-5 rounded shadow flex justify-between items-center">
            <p className="text-blue-600 font-semibold">
              Модуль 1 Unit экономика и финансовое моделирование
            </p>
            <img src="/images/arrow-bottom.png" className="w-5" />
          </div>
          <div className="bg-white p-5 rounded shadow flex justify-between items-center">
            <p className="text-blue-600 font-semibold">
              Модуль 2 Что такое MVP и почему это важно
            </p>
            <img src="/images/arrow-bottom.png" className="w-5" />
          </div>
          <div className="bg-white p-5 rounded shadow flex justify-between items-center">
            <p className="text-blue-600 font-semibold">
              Модуль 3 Определение рынка, поиск и исследование Целевой аудитории
            </p>
            <img src="/images/arrow-bottom.png" className="w-5" />
          </div>
          <div className="bg-white p-5 rounded shadow flex justify-between items-center">
            <p className="text-blue-600 font-semibold">
              Модуль 4 Бизнес моделирование и поиск Product Market Fit
            </p>
            <img src="/images/arrow-bottom.png" className="w-5" />
          </div>
          <div className="bg-white p-5 rounded shadow flex justify-between items-center">
            <p className="text-blue-600 font-semibold">
              Модуль 5 Стартап подход к созданию международного IT продукта
            </p>
            <img src="/images/arrow-bottom.png" className="w-5" />
          </div>
        </div>
        <div className="text-center mt-12">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded">
            Получить полную программу
          </button>
        </div>
      </div>
    </section>
  );
}
export default Features;
