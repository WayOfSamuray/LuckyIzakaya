import Slider from '../Slider/Slider';
import style from './Hero.module.css';

const Hero = () => {
  return (
    <section className={style.hero}>
      <div className={style.overlay}>
      <div className={style.content}>
    <div className={style.left}>
    <h1 className={style.title}>Lucky Izakaya Bar</h1>
    <p className={style.text}>
      Lucky Izakaya Bar – авторская интерпретация традиционного японского ресторана, гастрономического бара на каждый день. В меню Lucky Izakaya Bar татаки, райс боулы, корейские пельмени, суп с лапшой, кушияки – национальный стритфуд, приготовленный на сделанном под заказ гриле робата.
    </p>
    <div className={style.buttons}>
    <button>Забронировать</button>
    <button>Lucky Matcha</button>
    <button>Доставка</button>
    </div>
    <p className={style.policy}>
Нажимая на кнопку «Забронировать», вы соглашаетесь с
            <span> Политикой конфиденциальности</span>
    </p>
    </div>
    <div className={style.right}>
    <Slider />
    </div>
      </div>
      </div>
    </section>
  )
}

export default Hero;