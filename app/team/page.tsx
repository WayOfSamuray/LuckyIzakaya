'use client';
import { useState } from 'react';
import style from './Team.module.css';
import { team } from './team';

const Team = () => {
    const [active, setActive] = useState(0);
    const prev = () => setActive((prev) => (prev === 0 ? team.length - 1 : prev - 1));
    const next = () => setActive((prev) => (prev === team.length - 1 ? 0 : prev + 1))
    return (
        <section className={style.slider}>
            <button onClick={prev} className={style.arrow}>‹</button>
            <div className={style.slide}>
            <img src={team[active].image} alt={team[active].name} />
            <div className={style.overlay}>
        <h2>{team[active].name}</h2>
        <p className={style.role}>{team[active].role}</p>
        <p>{team[active].description}</p>
            </div>
            </div>
            <button onClick={next} className={style.arrow}>›</button>
        </section>
    )
}

export default Team;