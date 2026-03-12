function Pricing({works}) {
  return (
    <section className="bg-[#f3f3f3] py-12 md:py-20">
      <div className="max-w-300 mx-auto px-4 md:px-6">
        <div className="relative mb-14 md:mb-20 overflow-hidden">
          <img
            src="/images/Back_Sotrudnichestvo.jpg"
            alt="cooperation"
            className="w-full h-45 md:h-65 object-cover"
          />
          <div className="absolute inset-0 bg-black/35"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <h2 className="text-[24px] md:text-[42px] font-bold uppercase mb-3">
              СОТРУДНИЧЕСТВО
            </h2>
            <p className="max-w-115 text-[12px] md:text-[14px] text-gray-200 mb-5">
              Предприятие постоянно потребляет различный ассортимент продукции и
              услуг
            </p>
            <button className="bg-[#14b22f] hover:bg-[#119a28] text-white text-[12px] md:text-[14px] font-semibold px-8 py-3">
              Подробнее
            </button>
          </div>
        </div>
        <div className="mb-16">
          <div className="flex items-center justify-between gap-4 mb-8">
            <h2 className="text-[30px] md:text-[52px] leading-none font-bold uppercase text-[#4d4d4d]">
              АКТУАЛЬНЫЕ 
              <br className="md:hidden" />
              ВАКАНСИИ
            </h2>
            <div className="hidden md:flex items-center gap-2">
              <button className="w-12 h-12 border border-[#d7d7d7] flex items-center justify-center bg-white">
                <img
                  src="/images/arrowl.svg"
                  alt=""
                  className="w-5 h-5"
                />
              </button>
              <button className="w-12 h-12 border border-[#d7d7d7] flex items-center justify-center bg-white">
                <img
                  src="/images/arrow.svg"
                  alt=""
                  className="w-5 h-5"
                />
              </button>
            </div>
          </div>
          <div className="h-0.5 bg-[#dcdcdc] mb-7"></div>
          <div className="jobs-scroll flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory">
            {works.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-around max-w-60 md:min-w-90 bg-[#efefef] p-6 md:p-8 shrink-0 snap-start border border-transparent rounded-2xl transition">
                <h3 className="text-[20px] md:text-[34px] leading-[1.1] uppercase text-[#555] mb-5">
                  {item.name}
                </h3>
                <p className="text-[#16b22f] text-[20px] md:text-[26px] font-medium mb-5">
                  {item.price}
                </p>
                <p className="text-[#9a9a9a] text-[14px] md:text-[16px] leading-7 mb-10">
                  {item.infoText}
                </p>
                <div className="flex items-center justify-between text-[#16b22f]">
                  <span className="text-[18px] md:text-[22px] font-medium">
                    Подробнее
                  </span>
                  <img
                    src="/images/arrow.svg"
                    alt=""
                    className="w-6 h-6"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-[30px] md:text-[52px] leading-none font-bold uppercase text-[#4d4d4d]">
              НОВОСТИ
            </h2>
            <button className="hidden md:flex items-center gap-3 text-[#16b22f] font-medium text-[22px]">
              <img
                src="/images/arrow.svg"
                alt=""
                className="w-6 h-6"
              />
              Читать все новости
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <img
                src="/images/b_Sclad1.jpg"
                alt=""
                className="w-full h-55 object-cover mb-4"
              />
              <h3 className="text-[20px] md:text-[34px] leading-[1.15] text-[#555] mb-3">
                Вышли на международный рынок
              </h3>
              <p className="text-[#9a9a9a] text-[14px] md:text-[16px] leading-7 mb-4">
                Оборудование предприятия поставляется от мировых лидеров в сфере
                деревообработки и обеспечивает стабильный выпуск продукции.
              </p>
              <span className="text-[#16b22f] text-[16px] md:text-[18px]">
                25.12.2021
              </span>
            </div>

            <div>
              <img
                src="/images/b_sclad2.jpg"
                alt=""
                className="w-full h-55 object-cover mb-4"
              />
              <h3 className="text-[20px] md:text-[34px] leading-[1.15] text-[#555] mb-3">
                Встреча с европейскими коллегами
              </h3>
              <p className="text-[#9a9a9a] text-[14px] md:text-[16px] leading-7 mb-4">
                Оборудование предприятия поставляется от мировых лидеров в сфере
                деревообработки и обеспечивает стабильный выпуск продукции.
              </p>
              <span className="text-[#16b22f] text-[16px] md:text-[18px]">
                25.12.2021
              </span>
            </div>
            <div>
              <img
                src="/images/b_sclad3.jpg"
                alt=""
                className="w-full h-55 object-cover mb-4"
              />
              <h3 className="text-[20px] md:text-[34px] leading-[1.15] text-[#555] mb-3">
                Новое оборудование коллегам от мировых лидеров
              </h3>
              <p className="text-[#9a9a9a] text-[14px] md:text-[16px] leading-7 mb-4">
                Оборудование предприятия поставляется от мировых лидеров в сфере
                деревообработки и обеспечивает стабильный выпуск продукции.
              </p>
              <span className="text-[#16b22f] text-[16px] md:text-[18px]">
                25.12.2021
              </span>
            </div>
          </div>
          <button className="md:hidden mt-8 w-full bg-[#14b22f] hover:bg-[#119a28] text-white py-4 text-[16px] font-semibold">
            Читать все новости
          </button>
        </div>
      </div>
    </section>
  );
}
export default Pricing;
