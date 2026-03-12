function Header() {
  return (
    
    <section className="relative h-screen w-full">
        <header className="absolute top-0 left-0 w-full z-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-6 text-white">

        <img src="/images/Logo.png" className="h-10" />

        <nav className="hidden md:flex gap-8">
          <a href="#">Продукция</a>
          <a href="#">Поставщикам</a>
          <a href="#">Вакансии</a>
          <a href="#">Новости</a>
          <a href="#">Контакты</a>
        </nav>

        <div className="hidden md:flex items-center gap-6">

          <div className="flex items-center gap-2">
            <img src="/images/Phone_icon.png" className="w-4" />
            +7 (342) 250-08-88
          </div>

          <div className="flex items-center gap-2">
            <img src="/images/Email_icon.png" className="w-4" />
            info@grdok.ru
          </div>

        </div>

        <img src="/images/Menu.png" className="w-7 md:hidden" />

      </div>
    </header>
      <img
        src="/images/BackImage.jpg"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 max-w-5xl mx-auto px-6 h-full flex items-center sm:max-w-[90%] sm:px-4">
        <div className="text-white max-w-2xl">
          <h1 className="text-4xl font-bold leading-tight">
            ГРУППА КОМПАНИЙ
            <br />
            ГРЕМЯЧИНСКИЙ ДОК
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            Современное предприятие по производству гнуто-клееных изделий
            (латофлекс), фанеры, топливных брикетов RUF, березового угля,
            пиломатериалов.
          </p>

          <button className="mt-8 bg-green-600 hover:bg-green-700 px-8 py-3 rounded-xs text-white">
            Связаться с нами
          </button>
        </div>
      </div>
      <div className="absolute bottom-8 right-8">
        <img src="/images/WhatsApp.png" className="w-14 h-14" />
      </div>
    </section>
  );
}
export default Header;
