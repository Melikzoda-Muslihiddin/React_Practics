function Footer() {
  return (
    <>
      <section
        className="relative bg-cover bg-center py-24"
        style={{ backgroundImage: "url('/images/Back_img_fabric.jpg')" }}
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              СВЯЖИТЕСЬ С НАШИМ <br /> СПЕЦИАЛИСТОМ
            </h2>
            <p className="text-gray-200 mb-10">
              Заинтересованы в сотрудничестве или остались вопросы? Заполните
              форму обратной связи и наши менеджеры обязательно свяжутся с вами.
            </p>
            <div className="flex gap-10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border border-green-500 rounded-full flex items-center justify-center text-green-500">
                  ✓
                </div>
                <p className="text-sm">
                  Ответим в течение <br /> 15 минут в рабочее время
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border border-green-500 rounded-full flex items-center justify-center text-green-500">
                  ✓
                </div>
                <p className="text-sm">
                  Бережем ваши <br /> персональные данные
                </p>
              </div>
            </div>
          </div>
          <div className="bg-green-600 p-10 text-white">
            <p className="mb-2 text-sm">Контактное лицо</p>
            <input
              type="text"
              placeholder="Ф.И.О."
              className="w-full p-3 bg-white outline-none rounded-xs text-black mb-4"
            />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm mb-1">Телефон</p>
                <input
                  type="text"
                  placeholder="+7 999 199 19 19"
                  className="w-full p-3 text-black bg-white outline-none rounded-xs"
                />
              </div>
              <div>
                <p className="text-sm mb-1">Email</p>
                <input
                  type="text"
                  placeholder="info@mail.ru"
                  className="w-full p-3 text-black bg-white outline-none rounded-xs"
                />
              </div>
            </div>
            <p className="text-sm mt-4 mb-1">Причина обращения</p>
            <select className="w-full p-3 text-black mb-4 bg-white outline-none rounded-xs">
              <option>Выберите из списка</option>
              <option>Сотрудничество</option>
              <option>Покупка продукции</option>
              <option>Вакансии</option>
            </select>
            <p className="text-sm mb-1">Комментарий</p>
            <textarea
              placeholder="Напишите суть вашего вопроса"
              className="w-full p-3 text-black mb-4 h-28 bg-white outline-none rounded-xs"
            />
            <div className="flex items-center gap-2 mb-6">
              <input type="checkbox" />
              <p className="text-sm">
                Нажимая кнопку я соглашаюсь с политикой конфиденциальности
              </p>
            </div>
            <button className="border border-white px-8 py-3 hover:bg-white hover:text-green-600 transition">
              Связаться с нами
            </button>
          </div>
        </div>
      </section>
      <footer className="bg-[#2f2f2f] text-gray-300 pt-16 pb-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-10">
            <div>
              <img src="/images/Logo.png" className="mb-4 w-40" />
              <p className="text-sm text-gray-400 leading-relaxed">
                Современное предприятие по производству гнуто-клееных изделий
                (латофлекс), фанеры, топливных брикетов RUF, березового угля,
                пиломатериалов
              </p>
            </div>
            <div>
              <h4 className="text-white mb-4 font-semibold">Реализация</h4>
              <ul className="space-y-2 text-sm">
                <li>Латофлекс</li>
                <li>Фанера</li>
                <li>Брикеты топливные RUF</li>
                <li>Пиломатериалы</li>
                <li>Кроватные основания</li>
                <li>Уголь</li>
                <li>Саженцы</li>
                <li>Отходы производства</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4 font-semibold">О компании</h4>
              <ul className="space-y-2 text-sm">
                <li>Продукция</li>
                <li>Деятельность</li>
                <li>Преимущества</li>
                <li>Поставщикам</li>
                <li>Вакансии</li>
                <li>Новости</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4 font-semibold">Отдел закупок</h4>
              <ul className="space-y-2 text-sm">
                <li>purchase@grdok.ru</li>
                <li className="mt-4 text-gray-400">Отдел продаж</li>
                <li>sale@grdok.ru</li>
                <li>@gremdok_bot</li>
                <li className="mt-2">
                  Мелкий опт, «карандаш», «пятак» : +7 (342) 502-16-91
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4 font-semibold">Контакты</h4>
              <ul className="space-y-2 text-sm">
                <li>info@grdok.ru</li>
                <li className="mt-4 text-gray-400">Адрес</li>
                <li>
                  Гремячинск Пермский край 618270 РФ, г. Гремячинск, ул.
                  Коммунистическая, д.1
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-12 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-400">
            <p>© 2022 ГремДок, все права защищены</p>
            <p className="mt-2 md:mt-0">Политика конфиденциальности</p>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
