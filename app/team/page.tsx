'use client';

import { useState } from 'react';
import styles from './Team.module.css';
import TeamCard from './team';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const team = [
  {
    id: 1,
    image: '/teamGallery/HeadCoach.jpeg',
    name: 'Василий Зайцев',
    role: 'Бренд-шеф',
    description: 'Начал свою карьеру 15 лет назад. Стажировался в Гонконге и Пекине. В качестве шеф-повара принимал участие в открытии таких проектов, как Zodiac, Chicha, Сахалин. Возглавлял ресторан средиземноморской кухни “Tinto”. Любит путешествовать по странам Юго-Восточной Азии и группу Pink Floyd.',
  },
  {
    image: '/teamGallery/BigBosses.jpeg',
    name: 'Иван Кукарских и Богдан Панченко',
    role: 'Oснователи Lucky Group',
    description: 'Объездив Европу и набравшись опыта, Богдан и Иван осознанно шли к ресторанной индустрии. Иван открыл первый проект BB Burgers в 2013 году. Богдан, помогая партнеру и близкому другу, параллельно занимался поставкой овощей и фруктов из городов России крупным компаниям столицы. Осенью 2017 года вместе с бренд-шефом Гленом Баллисом на углу Малой Бронной был открыт совместный проект Margarita Bistro. Сейчас в Lucky Group 22 ресторана, которых объединяют ценности, внимание к деталям и, главное, – гостеприимство. Помимо ресторанов, компания Lucky Group развивает направления мероприятий, кейтеринга, сервиса обучения и мерча.',
  },
  {
    image: '/teamGallery/WineMan.jpeg',
    name: 'Георгий Елизаров',
    role: 'Шеф-сомелье',
    description: 'Начал путь в 2011 в ресторане «Арт-Академия» на позиции официанта, где познакомился с миром вина и сомелье Марией Миловидовой. Позже, в 2013 году, попал в FF Bar под руководством Фёдора Фомина и команды Simachëv Shop&Bar. Через три года присоединился к команде 15 kitchen+bar, в котором работал с шефами из Мишленовских ресторанов. Там он прошел путь от старшего официанта до сомелье, обучаясь в школе вина «Энотрия», и встретил Тома Халпина, с которым продолжили работу в качестве сомелье в «Иностранцах». Успешно проявив себя, получил приглашение от шеф-сомелье Lucky Group стать частью компании. В 2021 году стал сомелье Lucky Izakaya Bar, а через два года и ресторана Koji.',
  },
  {
    image: '/teamGallery/BigHeadBarman.jpeg',
    name: 'Андрей Шипков',
    role: 'Бар-менеджер',
    description: 'Свой путь в мире гостеприимства начал в 2006 году. В 2017 году переехал в Москву, проработав в множестве ресторанов Москвы, присоединился к команде Lucky Group. После 4 лет работы в KOJI, в 2025 году стал бар-менеджером ресторана Lucky Izakaya. Финалист Top 20 Bacardi Legacy Global Cocktail Competition 2019, победитель Remy Cointreau Ambassadors Way 2021, победитель Champion NEVA Bartender cup 2023, финалист Top Lucky Bartender 2023.',
  },
  {
    image: '/teamGallery/HeadKitchen.jpeg',
    name: 'Дина Эргешова',
    role: 'Шеф-повар',
    description: 'Начала карьеру в 2008 году, и с тех пор любовь к кулинарии стала неотъемлемой частью жизни. Пробовала найти себя и в других направлениях - работала за баром, была официантом, но любовь к продукту была сильнее. «Меня всегда тянуло к азиатской кухне, и в 2019 году я нашла своё место в ресторане Lucky».',
  },
  {
    image: '/teamGallery/BigHeadWine.jpeg',
    name: 'Дмитрий Кипелкин',
    role: 'Шеф-сомелье',
    description: 'В профессии сомелье с 2007 года. Проходил курсы в Германии и Бургундии (Ecole de Bourgogne). Работал шеф-сомелье в ресторане Selfie группы WRF. Занимается составлением винных карт всех сегментов, а также навигацией по ним. Любит вино на всех этапах - от лозы до бокала в руке. Ценит возможность прикоснуться к искусству талантливых виноделов.',
  },
  {
    image: '/teamGallery/HeadBarman.jpeg',
    name: 'Максим Горелик',
    role: 'Шеф-бармен',
    description: 'В индустрии 10 лет. Начинал карьеру в Красноярске (2011-2012 годы), затем работал в барах Санкт-Петербурга (2013 год) с будущими основателями бара Imbibe. В 2014 году переехал в Москву и работал в одном из первых Speak Easy в России - Jack Rose, затем попал в команду Bruce Lee Bar (бывший Belka Bar), где через полгода стал бар-менеджером в возрасте 22 года. В 2016 году был опыт барного консалтинга, а в начале 2017 года попал в команду открытия ресторана Cevicheria. В середине 2017 года получил предложение открытия нового проекта Margarita Bistro в качестве бар-менеджера.',
  },
  {
    image: '/teamGallery/HeadLucky.jpeg',
    name: 'Артём Моторин',
    role: 'Управляющий',
    description: 'Окончил МГИИТ им Ю. А. Сенкевича, факультет «Гостичного и ресторанного бизнеса» и успешно завершил International Language Academy of Canada в Торонто. В 2014 году начал свою карьеру в ресторанной индустрии. В 2023 году пришел в Lucky Izakaya на позицию менеджера. В 2025 стал управляющим проекта.',
  },
];

const TeamSlider = () => {
  const [index, setIndex] = useState(0);

  const cardWidth = 490;
  const gap = 40;
  const step = cardWidth + gap;

  const prev = () => {
    setIndex((prev) => (prev - 1 + team.length) % team.length);
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % team.length);
  };

  return (
    <>
      <Header />
      <div className={styles.slider}>
        <div className={styles.sliderWrapper}>
          <button
            onClick={prev}
            className={`${styles.arrow} ${styles.prev}`}
          >
            ‹
          </button>

          <div
            className={styles.track}
            style={{
              transform: `translateX(-${index * step}px)`,
            }}
          >
            {team.map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </div>

          <button
            onClick={next}
            className={`${styles.arrow} ${styles.next}`}
          >
            ›
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TeamSlider;