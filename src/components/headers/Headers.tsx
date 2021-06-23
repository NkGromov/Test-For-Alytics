import React from "react";
import iconOne from "../../img/model_linear.png";
import iconTwo from "../../img/composite (1).png";
import iconThree from "../../img/composite.png";
import iconFour from "../../img/crm.png";
import styles from "./headers.module.css";
import settingsIcon from "../../img/settings.svg";

const Headers = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.item}>
                    <h3 className={styles.title}>Источники трафика</h3>
                </div>
                <div className={styles.item}>
                    <h3 className={styles.title}>Трафик</h3>
                    <button className={styles.settings}>
                        <img src={settingsIcon} alt="Настройки" />
                    </button>
                    <button className={styles.question}></button>
                </div>
                <div className={styles.item}>
                    <h3 className={styles.title}>
                        <img src={iconFour} alt="Иконка" /> Продажи
                    </h3>
                    <span className={styles.subTitle}>
                        <img src={iconOne} alt="Иконка" /> Линейная модель
                    </span>
                    <button className={styles.settings}>
                        <img src={settingsIcon} alt="Настройки" />
                    </button>
                    <button className={styles.question}></button>
                </div>
                <div className={styles.item}>
                    <h3 className={styles.title}>
                        <img src={iconThree} alt="Иконка" /> Цель с осн. GA
                    </h3>
                    <span className={styles.subTitle}>
                        <img src={iconTwo} alt="Иконка" /> Составная цель
                    </span>
                    <button className={styles.settings}>
                        <img src={settingsIcon} alt="Настройки" />
                    </button>
                    <button className={styles.question}></button>
                </div>
            </div>
        </>
    );
};

export default Headers;
