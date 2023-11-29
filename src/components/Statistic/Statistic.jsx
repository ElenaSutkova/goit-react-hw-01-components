import React from 'react';
import style from '../Statistic/Statistic.module.css'


const Statistics = ({ title, stats }) => {
    return (
        <section className={style.statistics}>
            {title && <h2 className={style.title}>{title}</h2>}
            <ul className={style.list}>
                {stats.map(({ id, label, percentage }) => (
                    <li key={id} className={style.item}>
                        <span className={style.label}>{label}</span>
                        <span className={style.percentage}>{percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Statistics