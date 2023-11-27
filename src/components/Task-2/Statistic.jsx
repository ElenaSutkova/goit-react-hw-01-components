import React from 'react';
import style from '../Task-2/Statistic.module.css'

const Statistics = ({ id, label, percentage }) => {
    return (
        <section className={style.statistics}>
            <h2 className={style.title}>Upload stats</h2>

            <ul className={style.list}>
                <li className={style.item} id={id}>
                    <span className={style.label}>{label}</span>
                    <span className={style.percentage}>{percentage}</span>
                </li>
                <li className={style.item} id={id}>
                    <span className={style.label}>{label}</span>
                    <span className={style.percentage}>{percentage}</span>
                </li>
                <li className={style.item} id={id}>
                    <span className={style.label}>{label}</span>
                    <span className={style.percentage}>{percentage}</span>
                </li>
                <li className={style.item} id={id}>
                    <span className={style.label}>{label}</span>
                    <span className={style.percentage}>{percentage}</span>
                </li>

            </ul>
        </section>
    )
}

export default Statistics