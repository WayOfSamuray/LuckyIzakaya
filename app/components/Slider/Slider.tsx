'use client';

import { useState } from 'react';
import styles from './Slider.module.css';

const images = [
  '/images/scallop.jpeg',
  '/images/fire.jpeg',
  '/images/tataki.jpeg',
  '/images/wagyu.jpeg',
  '/images/otoro.jpeg',
  '/images/rolls.jpeg',
  '/images/beefs.jpeg',
  '/images/chicken.jpeg',
  '/images/iron.jpeg',
  '/images/kitchen.jpeg',
  '/images/number3.jpeg',
  '/images/number12.jpeg',
  '/images/octopus.jpeg',
  '/images/restaurant.jpeg',
  '/images/ricebol.jpeg',
  '/images/sake.jpeg',
  '/images/tatakiWagyu.jpeg',
  '/images/toilet.jpeg',
];

const Slider = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    if(index < images.length - 2) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const prev = () => {
    if(index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(images.length - 2);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.track} style={{
        transform: `translateX(-${index * 294}px)`
      }}>
        {images.map((img,i) => (
          <div className={styles.imageBox} key={i}>
            <img src={img} alt="Main dish" />
            {i === index && (
              <button className={`${styles.arrow} ${styles.left}`} onClick={prev}>‹</button>
            )}
            {i === index + 1 && (
              <button className={`${styles.arrow} ${styles.right}`} onClick={next}>›</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
