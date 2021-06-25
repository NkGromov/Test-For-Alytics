import React from "react";
import { useSelector } from "react-redux";
import styles from "./summary.module.css";
import { AppStateType } from "../../redux/store";
const Summary = () => {
    const total = useSelector((state: AppStateType) => state.AppReducer.total);
    return (
        <div className={styles.wrapper}>
            <div className={styles.item}>
                <span className={styles.title}>Итого</span>
            </div>
            <div className={styles.item}>
                <span className={styles.text}>{total.shows}</span>
                <span className={styles.text}>{total.clicks}</span>
                <span className={styles.text}>{total.sessions}</span>
                <span className={styles.text}>{total.CTR}</span>
                <span className={styles.text}>{total.price}</span>
                <span className={styles.text}>{total.expenses}</span>
            </div>
            <div className={styles.item}>
                <span className={styles.text}>{total.counts}</span>
                <span className={styles.text}>{total.CPA}</span>
                <span className={styles.text}>{total.proceeds}</span>
            </div>
            <div className={styles.item}>
                <span className={styles.text}>{total.countsTarget}</span>
                <span className={styles.text}>{total.CPATarget}</span>
                <span className={styles.text}>{total.CR}</span>
            </div>
        </div>
    );
};

export default Summary;
