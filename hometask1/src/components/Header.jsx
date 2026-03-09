function Header() {
  return (
    <header className="w-full bg-[#F5F3EF]">
      <div className="w-full bg-[#AF9163] text-white">
        <div className="h-13 w-full flex items-center justify-center text-center text-[14px] sm:text-[15px] font-medium px-4">
          Скидка 10% при заказе от 2х недель
        </div>
      </div>

      <div className="w-full">
        <div className="h-21 lg:h-27.5 w-full flex items-center justify-between px-4 sm:px-6 lg:px-10 xl:px-16">
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-22 sm:w-27.5 lg:w-31.25 object-contain"
          />

          <nav className="hidden lg:flex items-center gap-8 xl:gap-10 text-[#4A403F] text-[17px] xl:text-[18px] font-medium">
            <a href="#">Подбор рациона</a>
            <a href="#">Программы питания</a>
            <a href="#">О нас</a>
            <a href="#">Доставка</a>
            <a href="#">Акции</a>
            <a href="#">FAQ</a>
            <a href="#">Отзывы</a>
          </nav>

          <div className="hidden lg:block text-right">
            <p className="text-[#4A403F] text-[20px] font-semibold leading-none">
              +7 988 500-1-700
            </p>
            <p className="text-[#7B7271] text-[12px] mt-2">с 09:00 до 21:00</p>
          </div>

          <div className="lg:hidden flex flex-col items-center">
            <div className="flex flex-col gap-1">
              <span className="block w-8 h-0.75 rounded-full bg-[#4A403F]"></span>
              <span className="block w-8 h-0.75 rounded-full bg-[#4A403F]"></span>
              <span className="block w-8 h-0.75 rounded-full bg-[#4A403F]"></span>
            </div>
            <span className="mt-1 text-[13px] text-[#4A403F]">МЕНЮ</span>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
