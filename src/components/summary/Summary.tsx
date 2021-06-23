import React from "react";
import styles from "./summary.module.css";

const Summary = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.item}>
                <span className={styles.title}>Итого</span>
            </div>
            <div className={styles.item}>
                <span className={styles.text}>1000</span>
                <span className={styles.text}>1000</span>
                <span className={styles.text}>1000</span>
                <span className={styles.text}>1000</span>
                <span className={styles.text}>1000</span>
                <span className={styles.text}>1000</span>
            </div>
            <div className={styles.item}>
                <span className={styles.text}>1000</span>
                <span className={styles.text}>1000</span>
                <span className={styles.text}>1000</span>
            </div>
            <div className={styles.item}>
                <span className={styles.text}>1000</span>
                <span className={styles.text}>1000</span>
                <span className={styles.text}>1000</span>
            </div>
        </div>
    );
};

export default Summary;
