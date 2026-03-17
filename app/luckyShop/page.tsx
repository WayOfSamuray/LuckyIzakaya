import Image from "next/image";
import styles from "./LuckyShop.module.css";

const LuckyShop = () => {
  return (
    <main className={styles.wrapper}>
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <Image
          src="/shopImages/logo.png"
          alt="logo"
          width={70}
          height={70}
          className={styles.logo}
        />

        <p className={styles.text}>
          Lucky Matcha — церемониальный матча, произведенный в Удзи (Киото,
          Япония). Матча раскрывается сливочной текстурой с нотами зеленого
          яблока, свежестью арбузной корки, зеленым горошком и шпинатом,
          завершаясь легким терпким послевкусием.
        </p>

        <p className={styles.text}>
          Отлично подходит для приготовления усуча (матча с водой, средней
          крепости) и матча-латте.
        </p>

        <div className={styles.products}>
          <div className={styles.card}>
            <Image
              src="/shopImages/matcha.png"
              alt="matcha"
              width={430}
              height={300}
              className={styles.image}
            />

            <div className={styles.info}>
              <p>Lucky Matcha</p>
              <span>5.500</span>
            </div>

            <button className={styles.button}>КУПИТЬ</button>
          </div>

          <div className={styles.card}>
            <Image
              src="/shopImages/wenik.png"
              alt="matcha kit"
              width={430}
              height={300}
              className={styles.image}
            />

            <div className={styles.info}>
              <p>Lucky Matcha Kit</p>
              <span>12.000</span>
            </div>

            <button className={styles.button}>КУПИТЬ</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LuckyShop;
