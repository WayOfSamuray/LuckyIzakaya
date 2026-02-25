import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.top}>
        <div className={styles.left}>
        <p>© 2026 Lucky Izakaya Bar, Большая Никитская, 23/9</p>
        <a href="#">Политика конфиденциальности</a>
        </div>

        <div className={styles.right}>
        <span>GREAT LIST</span>
        <span className={styles.icon}></span>
        </div>
            </div>
            <div className={styles.line} />
        <div className={styles.bottom}>
        <p>Разработка сайта</p>
        </div>
        </footer>
    )
}

export default Footer;