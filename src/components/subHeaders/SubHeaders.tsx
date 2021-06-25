import React from "react";
import styles from "./subHeaders.module.css";
import Question from "../question/Question";
import TitleBtn from "./TitleBtn";

const SubHeaders = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.item}>
                <button className={styles.title}>Название</button>
            </div>
            <div className={styles.item}>
                <div className={styles.flex}>
                    <TitleBtn type="shows">Показы</TitleBtn>
                    {<Question>Текст для подсказки Текст для подсказкиТекст для подсказкиТекст для подсказкиТекст для подсказки Текст для подсказки</Question>}
                </div>
                <div className={styles.flex}>
                    <TitleBtn type="clicks">Клики</TitleBtn>
                </div>
                <div className={styles.flex}>
                    <TitleBtn type="sessions">Сеансы</TitleBtn>
                </div>
                <div className={styles.flex}>
                    <TitleBtn type="CTR">CTR, %</TitleBtn>
                    {<Question>Текст для подсказки</Question>}
                </div>
                <div className={styles.flex}>
                    <TitleBtn type="price"> Цена клика</TitleBtn>
                </div>
                <div>
                    <div className={styles.flex}>
                        <TitleBtn type="expenses">Затраты</TitleBtn>
                    </div>
                    <div className={styles.flex}>
                        <button className={styles.button}>Настроить </button> {<Question>Текст для подсказки</Question>}
                    </div>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.flex}>
                    <TitleBtn type="counts">Кол-во</TitleBtn>
                </div>
                <div className={styles.flex}>
                    <TitleBtn type="CPA">CPA</TitleBtn>
                </div>
                <div className={styles.flex}>
                    <TitleBtn type="proceeds">Выручка</TitleBtn>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.flex}>
                    <TitleBtn type="countsTarget">Кол-во</TitleBtn>
                </div>
                <div className={styles.flex}>
                    <TitleBtn type="CPATarget">CPA</TitleBtn>
                </div>
                <div className={styles.flex}>
                    <TitleBtn type="CR">CR, %</TitleBtn>
                </div>
            </div>
        </div>
    );
};

export default SubHeaders;
