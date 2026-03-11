function Header() {
  return (
    <div style={{ backgroundImage: "/images/back_hero.png", height:"100vh" }} className="">
      <header className="absolute top-0 left-0 w-full h-screen z-50">
        <div className="max-w-full mx-auto px-6 py-4 flex bg-[#45424279] items-center justify-between">
          <div className="flex items-center">
            <img src="/images/INNOMA.VC.png" className="w-32" />
          </div>
          <nav className="hidden md:flex gap-8 text-white text-sm">
            <a href="#dlay" className="hover:text-green-400 transition">
              Кто мы?
            </a>
            <a href="#uslugi" className="hover:text-green-400 transition">
              Услуги
            </a>
            <a href="#acc" className="hover:text-green-400 transition">
              Акселератор
            </a>
            <a href="#nov" className="hover:text-green-400 transition">
              Новости
            </a>
          </nav>
          <div className="hidden md:block">
            <button className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded text-white">
              Войти
            </button>
          </div>
          <div className="md:hidden">
            <img src="/images/menu.png" className="w-8" />
          </div>
        </div>
      </header>
      <section
        className="bg-cover bg-center h-screen flex items-center"
        style={{ backgroundImage: "url('/images/back_hero.png')" }}
      >
        <div className="max-w-5xl lg:ml-40 px-6 text-white">
          <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
            ЗАПУСТИТЕ <br />
            <span className="bg-green-500 px-2">ТЕХНОЛОГИЧЕСКИЙ IT-БИЗНЕС</span>
            <br />
            НА МЕЖДУНАРОДНЫХ РЫНКАХ
          </h1>
          <button className="mt-8 bg-blue-500 px-6 py-3 rounded">
            Подать заявку
          </button>
        </div>
      </section>
      <section id="uslugi" className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-3xl font-bold text-blue-600 mb-16">
            Наши услуги
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1 text-center md:text-left">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Аналитические исследования
              </h3>
              <p className="text-gray-600 mb-6">
                Одним из наших ключевых направлений является анализ
                технологических трендов на международных рынках. Мы проводим
                анализ на основе публикаций исследований McKinsey, BCG, PWC,
                Deloitte и других.
              </p>
              <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded text-white">
                Узнать подробнее
              </button>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <img
                src="/images/image1.png"
                className="w-62.5 sm:w-75 md:w-87.5"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img
                src="/images/rocket 1.png"
                className="w-62.5 sm:w-75 md:w-87.5"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Онлайн акселератор для IT бизнеса
              </h3>
              <p className="text-gray-600 mb-6">
                Онлайн программа акселерации IT бизнеса позволит вашей команде
                открыть новые горизонты и возможности для бизнеса на глобальных
                рынках.
              </p>
              <button id="but" className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded text-white">
                Узнать подробнее
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Header;
