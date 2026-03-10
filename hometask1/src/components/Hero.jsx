function Hero() {
  return (
    <section className="bg-[#f3f3f3] py-12 md:py-20">
      <div className="max-w-295 mx-auto px-4 md:px-6">
        <h2 className="md:hidden text-[28px] font-bold leading-[1.15] text-[#4f4f4f] uppercase mb-8">
          НАША ОСНОВНАЯ
          <br />
          ДЕЯТЕЛЬНОСТЬ
        </h2>
        <div className="md:hidden mb-10">
          <button className="w-full bg-[#18ad2f] text-white h-14 px-5 flex items-center justify-between font-semibold text-[18px]">
            <span>Наше производство</span>
            <span className="text-[20px]">▼</span>
          </button>
        </div>
        <div className="hidden md:grid md:grid-cols-[270px_1fr] gap-8 items-start mb-20">
          <div>
            <h3 className="text-[#18ad2f] text-[22px] font-bold uppercase leading-[1.2] mb-6">
              ПРОИЗВОДСТВО
            </h3>
            <p className="text-[#9a9a9a] text-[14px] leading-7">
              Оборудование предприятия поставляется от мировых лидеров в сфере
              деревообработки и обеспечивает стабильный выпуск продукции.
            </p>
            <p className="text-[#9a9a9a] text-[14px] leading-7 mt-5">
              Поставки осуществляются по России и в 14 стран мира. Строгий
              контроль на каждом этапе производства помогает поддерживать
              качество продукции.
            </p>
          </div>
          <div>
            <img
              src="/images/Fabrica1.jpg"
              alt="production main"
              className="w-full h-80 object-cover"
            />
            <div className="grid grid-cols-3 gap-4 mt-4">
              <img
                src="/images/Fabrica2.jpg"
                alt="production 1"
                className="w-full h-27.5 object-cover"
              />
              <img
                src="/images/Fabrica3.jpg"
                alt="production 2"
                className="w-full h-27.5 object-cover"
              />
              <img
                src="/images/Fabrica4.jpg"
                alt="production 3"
                className="w-full h-27.5 object-cover"
              />
            </div>
          </div>
        </div>
        <div className="hidden md:grid md:grid-cols-[270px_1fr] gap-8 items-start mb-20">
          <div>
            <h3 className="text-[#18ad2f] text-[22px] font-bold uppercase leading-[1.2] mb-6">
              ЛЕСОУПРАВЛЕНИЕ
              <br />И ЗАГОТОВКА
            </h3>

            <p className="text-[#9a9a9a] text-[14px] leading-7">
              Рубка леса осуществляется на арендованных участках, обеспеченных
              бесперебойной поставкой сырья для производства и для продажи.
              Расчетная лесосека – 320 000 м3.
            </p>

            <p className="text-[#9a9a9a] text-[14px] leading-7 mt-5">
              Общая площадь арендованного леса – 306 000 Га – сертифицирована по
              стандартам международной добровольной лесной сертификации FSC.
            </p>
          </div>

          <div>
            <img
              src="/images/Fabrica5.jpg"
              alt="forest main"
              className="w-full h-80 object-cover"
            />

            <div className="grid grid-cols-3 gap-4 mt-4">
              <img
                src="/images/Fabrica6.jpg"
                alt="forest 1"
                className="w-full h-27.5 object-cover"
              />
              <img
                src="/images/Fabrica7.jpg"
                alt="forest 2"
                className="w-full h-27.5 object-cover"
              />
              <img
                src="/images/Fabrica8.jpg"
                alt="forest 3"
                className="w-full h-27.5 object-cover"
              />
            </div>
          </div>
        </div>
        <div className="hidden md:grid md:grid-cols-[270px_1fr] gap-8 items-start">
          <div>
            <h3 className="text-[#18ad2f] text-[22px] font-bold uppercase leading-[1.2] mb-6">
              ПИТОМНИК
            </h3>
            <p className="text-[#9a9a9a] text-[14px] leading-7">
              Задача лесопитомника – обеспечение посадочным материалом
              собственной и сторонней лесозаготовки.
            </p>
            <p className="text-[#9a9a9a] text-[14px] leading-7 mt-5">
              Питомник полностью покрывает потребность Пермского края в сеянцах
              сосны-ели. Общая площадь теплиц – 4800 м3, питомника – 15 Га.
              Потенциал – до 4 млн. сеянцев в год.
            </p>
          </div>
          <div>
            <img
              src="/images/Fabrica5.jpg"
              alt="nursery main"
              className="w-full h-80 object-cover"
            />

            <div className="grid grid-cols-3 gap-4 mt-4">
              <img
                src="/images/Fabrica7.jpg"
                alt="nursery 1"
                className="w-full h-27.5 object-cover"
              />
              <img
                src="/images/Fabrica8.jpg"
                alt="nursery 2"
                className="w-full h-27.5 object-cover"
              />
              <img
                src="/images/Fabrica9.jpg"
                alt="nursery 3"
                className="w-full h-27.5 object-cover"
              />
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <img
            src="/images/Fabrica1.jpg"
            alt="mobile main"
            className="w-full h-47.5 object-cover mb-4"
          />

          <img
            src="/images/Fabrica4.jpg"
            alt="mobile second"
            className="w-full h-47.5 object-cover mb-8"
          />

          <h3 className="text-[#4f4f4f] text-[24px] font-bold uppercase mb-5">
            ОБОРУДОВАНИЕ
          </h3>

          <p className="text-[#8f8f8f] text-[16px] leading-9">
            Оборудование предприятия поставляется от мировых лидеров в сфере
            деревообработки и обеспечивает стабильный выпуск продукции. Поставки
            осуществляются по России и в 14 стран мира. Строгий контроль на
            каждом этапе производства помогает поддерживать качество продукции.
          </p>
        </div>
      </div>
    </section>
  );
}
export default Hero;
