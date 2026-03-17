import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import style from "./Contacts.module.css";

const Contacts = () => {
  return (
    <>
      <Header />

      <div className={style.wrapper}>
        <div className={style.overlay}>
          <div className={style.container}>
            <div className={style.content}>
              <img
                src="/imageFromContacts/luckyLogo.png"
                alt="Lucky Izakaya"
                className={style.logo}
              />

              <div className={style.links}>
                <a href="#" target="_blank" rel="noreferrer">
                  <img src="/imageFromContacts/telegram.svg" alt="Telegram" />
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                  <img src="/imageFromContacts/max.png" alt="Max" />
                </a>
              </div>

              <a href="tel:+74951897888" className={style.phone}>
                +7 (495) 189-78-88
              </a>

              <p className={style.text}>
                Нажимая на телефонный номер ресторана или переходя в чат с ним,
                Вы соглашаетесь с Политикой конфиденциальности
              </p>

              <div className={style.divider} />

              <div className={style.block}>
                <p className={style.label}>Адрес</p>
                <p>Большая Никитская, 23/9</p>
              </div>

              <div className={style.block}>
                <p className={style.label}>Время работы</p>
                <p>Вс–Чт 12:00 – 00:00</p>
                <p>Пт–Сб 12:00 – 02:00</p>
              </div>

              <div className={style.divider} />

              <img
                src="/imageFromContacts/luckyOrangeLogo.png"
                alt="Lucky Group"
                className={style.orangeLogo}
              />

              <div className={style.footerLinks}>
                <a href="#">Перейти на сайт Lucky Group</a>
                <a href="#">Канал Lucky Group в Telegram</a>
              </div>

              <div className={style.divider} />

              <div className={style.contacts}>
                <div>
                  <p className={style.label}>Для общих вопросов</p>
                  <p>info@lucky-group.ru</p>
                </div>

                <div>
                  <p className={style.label}>HR</p>
                  <p>hr@lucky-group.ru</p>
                </div>

                <div>
                  <p className={style.label}>PR & Партнерство</p>
                  <p>pr@lucky-group.ru</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contacts;
