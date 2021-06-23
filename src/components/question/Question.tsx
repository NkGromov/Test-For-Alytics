import React from "react";
import styles from "./question.module.css";
type props = {
    children: string;
};
const Question: React.FC<props> = ({ children }) => {
    return (
        <div className={styles.wrapper}>
            <button className={styles.button}></button>
            <p className={styles.text}>{children}</p>
        </div>
    );
};

export default Question;
