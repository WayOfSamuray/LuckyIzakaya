import Link from 'next/link';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import styles from './MenuPage.module.css';

const items = [
  { title: 'ЕДА', slug: 'food', image: '/menu/food.jpg' },
  { title: 'SPECIAL', slug: 'special', image: '/menu/special.jpg' },
  { title: 'БАР', slug: 'bar', image: '/menu/bar.jpg' },
  { title: 'ВИНО', slug: 'wine', image: '/menu/wine.jpg' },
  { title: 'КБЖУ', slug: 'kbju', image: '/menu/kbju.jpg' },
  { title: 'MATCHA MENU', slug: 'matcha', image: '/menu/matcha.jpg' },
];

export default function MenuPage() {
  return (
    <div className={styles.page}>
      <Header />

      <section className={styles.menuSection}>
        <div className={styles.menuGrid}>
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`/menu/${item.slug}`}
              className={styles.card}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className={styles.overlay} />
              <span className={styles.title}>{item.title}</span>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
