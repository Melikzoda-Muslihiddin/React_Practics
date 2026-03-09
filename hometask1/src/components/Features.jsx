function Features() {
  return (
    <section className="w-full bg-[#F5F3EF] pb-10 lg:pb-16">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">
        <div className="w-full rounded-3xl lg:rounded-[34px] bg-[#D9D2B3] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
          <h2 className="text-center text-black font-medium text-[28px] leading-8.5 sm:text-[36px] sm:leading-10.5 lg:text-[56px] lg:leading-15.5 max-w-215 mx-auto">
            Подберите рацион для своих целей
          </h2>

          <div className="mt-6 lg:mt-9 grid grid-cols-1 lg:grid-cols-7 gap-4">
            <div className="flex items-center gap-2 bg-[#F6F3EE] rounded-full p-1 w-fit">
              <button className="w-10.5 h-10.5 rounded-full bg-[#ffffff] text-[#514847] text-[20px]">
                Ж
              </button>
              <button className="w-10.5 h-10.5 rounded-full bg-white text-[#514847] text-[20px]">
                М
              </button>
            </div>

            <input
              type="text"
              placeholder="Ваш вес"
              className="h-13.5 lg:h-15 w-full rounded-full bg-[#F6F3EE] px-5 text-[16px] lg:text-[20px] text-[#514847] outline-none placeholder:text-[#514847]"
            />

            <input
              type="text"
              placeholder="Ваш рост"
              className="h-13.5 lg:h-15 w-full rounded-full bg-[#F6F3EE] px-5 text-[16px] lg:text-[20px] text-[#514847] outline-none placeholder:text-[#514847]"
            />

            <input
              type="text"
              placeholder="Ваш возраст"
              className="h-13.5 lg:h-15 w-full rounded-full bg-[#F6F3EE] px-5 text-[16px] lg:text-[20px] text-[#514847] outline-none placeholder:text-[#514847]"
            />

            <select className="h-13.5 lg:h-15 w-full rounded-full bg-[#F6F3EE] px-5 text-[16px] lg:text-[20px] text-[#514847] outline-none">
              <option>Активность</option>
            </select>

            <select className="h-13.5 lg:h-15 w-full rounded-full bg-[#F6F3EE] px-5 text-[16px] lg:text-[20px] text-[#514847] outline-none">
              <option>Выберите цель</option>
            </select>

            <button className="h-13.5 lg:h-15 w-full rounded-full bg-[#5A977B] text-white text-[16px] lg:text-[20px] font-semibold px-6">
              Рассчитать рацион
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Features;
