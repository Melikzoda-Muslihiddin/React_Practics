function Questions() {
  return (
    <section className="bg-[#f4f4f4] py-20">
      <div className="max-w-300 mx-auto px-6 mb-20">
        <div className="relative overflow-hidden rounded">
          <img
            src="/images/Back_img_fabric.jpg"
            className="w-full h-105 object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute left-12 top-16 max-w-105 text-white">
            <h2 className="text-4xl font-bold leading-tight mb-6">
              СТАБИЛЬНЫЕ
              <br />
              ПОСТАВКИ ЗА СЧЕТ
              <br />
              СОБСТВЕННОЙ
              <br />
              ЛЕСОЗАГОТОВКИ
            </h2>
            <div className="flex items-center gap-3 text-green-400 mb-6">
              <div className="border border-green-500 w-12 h-12 flex items-center justify-center">
                <img src="/images/Play_icon.svg" className="w-4" />
              </div>
              <span className="text-sm">СМОТРЕТЬ ВИДЕО О ЗАВОДЕ</span>
            </div>
            <p className="text-gray-200 text-sm">
              Гибкий подход к условиям сотрудничества – скидки, различные формы
              оплаты, условия поставки.
            </p>
          </div>
          <div className="absolute right-0 top-0 w-105 h-full bg-green-600 p-10 text-white">
            <div className="mb-10">
              <h3 className="font-bold mb-2">Сертификат FSC</h3>
              <p className="text-sm text-green-100">
                Сертифицированная продукция (FSC 100%) по системе Forest
                Stewardship Council®.
              </p>
            </div>
            <div className="mb-10">
              <h3 className="font-bold mb-2">Соответствие регламенту EUTR</h3>
              <p className="text-sm text-green-100">
                (European Union Timber Regulation) – предоставляем необходимый
                пакет документов.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Сертификат CARB / CARB2</h3>
              <p className="text-sm text-green-100">
                Для поставок в США и другие страны, запрещающие сертификацию на
                соответствие производимой продукции стандартам по выбросам
                формальдегида.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-300 mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-700 mb-10">
          ГЕОГРАФИЯ ПОСТАВОК
        </h2>
        <div className="lg:flex justify-between items-start mb-8">
          <p className="text-gray-500 text-sm max-w-65">
            Доставляем грузы по всему миру в Европу, Азию, Америку, Египет
          </p>
          <div className="flex lg:flex-col flex-wrap  gap-4 flex-row my-10">
            <div className="flex items-center gap-3">
                <span className="text:green">- - - - - - - - - - - - -</span>
              <img src="/images/Korabl.png" className="w-6" />
              <span className="text-gray-500 text-sm">Морские перевозки</span>
            </div>
            <div className="flex items-center gap-3">
                <span className="text:green">- - - - - - - - - - - - -</span>
              <img src="/images/Poezd.png" className="w-6" />
              <span className="text-gray-500 text-sm">Железная дорога</span>
            </div>
            <div className="flex items-center gap-3">
                <span className="text:green">- - - - - - - - - - - - -</span>
              <img src="/images/Fura.png" className="w-6" />
              <span className="text-gray-500 text-sm">Автотранспорт</span>
            </div>
          </div>
        </div>
        <img src="/images/Map.png" className="w-full" />
      </div>
    </section>
  );
}
export default Questions;
