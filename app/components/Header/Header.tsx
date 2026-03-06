import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href='http://localhost:3000/'>
        <img src="/logo.png" alt="Lucky Izakaya Bar"
        className={styles.logoImg}
        />
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li><Link href="/reserve">Забронировать</Link></li>
          <li><Link href="/delivery">Доставка</Link></li>
          <li><Link href="/menu">Меню</Link></li>
          <li><Link href="/lucky-matcha">Lucky Matcha</Link></li>
          <li><Link href="/gallery">Галерея</Link></li>
          <li><Link href="/team">Команда</Link></li>
          <li><Link href="/career">Карьера</Link></li>
          <li><Link href="/privileges">Привилегии</Link></li>
          <li><Link href="/contacts">Контакты</Link></li>
        </ul>
        <div className={styles.language}>
          <Link href="/ru">RU</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;