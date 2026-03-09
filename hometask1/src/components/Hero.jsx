function Hero() {
  return (
    <section className="w-full bg-[#F5F3EF] overflow-hidden">
      <div className="w-full grid lg:grid-cols-2 items-center px-4 sm:px-6 lg:px-10 xl:px-16 pt-4 lg:pt-8 pb-8 lg:pb-12 gap-8 lg:gap-4">
        <div className="order-2 lg:order-1">
          <h1 className="text-[#111111] text-[34px] leading-10 sm:text-[42px] sm:leading-12 lg:text-[64px] lg:leading-17.5 xl:text-[72px] xl:leading-19.5 font-semibold tracking-[-0.02em] max-w-190">
            Прогрессивное питание
            <br />
            на каждый день
          </h1>

          <p className="mt-5 lg:mt-7 text-[#4F4746] text-[16px] leading-6 sm:text-[18px] sm:leading-7 lg:text-[24px] lg:leading-8.5 max-w-155">
            Сбалансированный рацион в современном формате — Супер-боул
          </p>

          <div className="mt-7 lg:mt-10 flex flex-col sm:flex-row gap-4">
            <button className="h-13.5 lg:h-16 px-7 lg:px-10 rounded-full bg-[#5A977B] text-white text-[16px] lg:text-[20px] font-semibold">
              Подобрать питание
            </button>

            <button className="h-13.5 lg:h-16 px-7 lg:px-10 rounded-full border border-[#5A977B] text-[#5A977B] bg-transparent text-[16px] lg:text-[20px] font-semibold">
              Получить консультацию
            </button>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative flex items-center justify-center min-h-75 sm:min-h-105 lg:min-h-155">
          <div className="absolute left-[6%] bottom-[8%] w-35 h-35 sm:w-45 sm:h-45 lg:w-62.5 lg:h-62.5 rounded-full bg-[#D8D1AF]"></div>

          <div className="absolute right-[8%] top-[10%] w-17.5 h-17.5 sm:w-23.75 sm:h-23.75 lg:w-30 lg:h-30 rounded-full bg-[#739A88]"></div>

          <img
            src="/images/1.png"
            alt="bowl"
            className="relative z-10 w-70 sm:w-95 lg:w-155 xl:w-170 object-contain"
          />
        </div>
      </div>

      <div className="w-full flex items-center justify-center gap-3 pb-8 lg:pb-10">
        <span className="w-3 h-3 rounded-full bg-[#D6CFAC]"></span>
        <span className="w-7 h-3 rounded-full bg-[#5A977B]"></span>
        <span className="w-3 h-3 rounded-full bg-[#D6CFAC]"></span>
      </div>
    </section>
  );
}
export default Hero;
