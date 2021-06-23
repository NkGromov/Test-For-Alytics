import React from "react";
import styles from "./subHeaders.module.css";
import Question from "../question/Question";

const SubHeaders = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.item}>
                <span className={styles.title}>Название</span>
            </div>
            <div className={styles.item}>
                <span className={styles.title}>
                    Показы {<Question>Текст для подсказки Текст для подсказкиТекст для подсказкиТекст для подсказкиТекст для подсказки Текст для подсказки</Question>}
                </span>
                <span className={styles.title}>Клики</span>
                <span className={styles.title}>Сеансы</span>
                <span className={styles.title}>CTR, % {<Question>Текст для подсказки</Question>}</span>
                <span className={styles.title}>Цена клика</span>
                <div>
                    <span className={styles.title}>Затраты</span>
                    <div>
                        <button className={styles.button}>Настроить </button> {<Question>Текст для подсказки</Question>}
                    </div>
                </div>
            </div>
            <div className={styles.item}>
                <span className={styles.title}>Кол-во</span>
                <span className={styles.title}>CPA</span>
                <span className={styles.title}>Выручка</span>
            </div>
            <div className={styles.item}>
                <span className={styles.title}>Кол-во</span>
                <span className={styles.title}>CPA</span>
                <span className={styles.title}>CR, % </span>
            </div>
        </div>
    );
};

export default SubHeaders;
