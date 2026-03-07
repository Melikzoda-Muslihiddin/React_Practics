function Footer() {
  return (
    <div className="footer">
      <div className="footerTop">
        <div className="footerLogoBlock">
          <img className="footerLogo" src="/images/logo.png" alt="" />

          <p className="footerDesc">Аналитика и оцифровка продаж</p>

          <p className="footerMarkets">
            <span>Wildberries</span> и <span>Ozon</span>
          </p>

          <div className="footerSocials">
            <img src="/images/vk.png" alt="" />
            <img src="/images/tg.png" alt="" />
            <img src="/images/youtube.png" alt="" />
          </div>
        </div>

        <div className="footerCol">
          <h3>Сервис</h3>
          <p>Для кого</p>
          <p>Возможности</p>
          <p>Тарифы</p>
        </div>

        <div className="footerCol">
          <h3>Клиентам</h3>
          <p>Вход</p>
          <p>Регистрация</p>
          <p>Восстановления пароля</p>
        </div>

        <div className="footerCol footerDocs">
          <h3>Документы</h3>
          <p>Пользовательское соглашение</p>
          <p>Политика конфиденциальности</p>
          <p>Публичная оферта</p>
          <p>Использование cookie</p>
          <p>Техническая поддержка</p>
        </div>
      </div>

      <div className="footerBottom">
        <div className="footerLeftBottom">
          <p>© 2022–2023 Mpassistant</p>

          <p className="footerOffer">
            Информация, размещённая на сайте, не является публичной офертой
          </p>
        </div>

        <div className="footerRightBottom">
          <img className="footerPay" src="/images/payments.png" alt="" />

          <p className="footerDesign">
            Редизайн сайта <span>Turkuletsdesign</span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
