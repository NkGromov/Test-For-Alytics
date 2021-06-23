import React from "react";
import styles from "./group.module.css";
import iconFour from "../../img/crm.png";
import { useContext } from "react";
import { HidenContext } from "../../containers/groups/Groups";
type props = {
    name: any;
    shows: any;
    sessions: any;
    ctr: any;
    price: any;
    count: any;
    cpa: any;
    proceeds: any;
    countTarget: any;
    cpaTarget: any;
    cr: any;
    toggle?: any;
    type: "group" | "ad" | "source";
};
const Group: React.FC<props> = ({ name, type, toggle, shows, sessions, ctr, price, count, cpa, proceeds, countTarget, cpaTarget, cr }) => {
    const ishidden = useContext(HidenContext);
    return (
        <div className={styles.wrapper}>
            <div className={styles.item}>
                <div className={styles.wrapperTitle}>
                    {type === "group" ? (
                        <>
                            <button onClick={toggle} className={`${styles.button} ${!ishidden && styles.buttonActive}`}>
                                <span className={styles.line}></span>
                                <span className={styles.line}></span>
                            </button>
                            <img src={iconFour} alt="Изоброжение группы" className={styles.groupImg} />
                            <div>
                                <span className={styles.title}>{name}</span>
                                <span className={styles.subTitle}>Группа. Источников 1</span>
                            </div>
                        </>
                    ) : type === "ad" ? (
                        <>
                            <img src={iconFour} alt="Изоброжение группы" className={`${styles.groupImg} ${styles.margin}`} />
                            <div>
                                <span className={styles.title}>{name}</span>
                                <span className={styles.subTitle}>платная реклама</span>
                            </div>
                            <div className={styles.shape}></div>
                        </>
                    ) : (
                        <>
                            <img src={iconFour} alt="Изоброжение группы" className={`${styles.groupImg} ${styles.margin}`} />
                            <div>
                                <span className={styles.title}>{name}</span>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <div className={styles.item}>
                <span className={styles.text}>{shows}</span>
                <span className={styles.text}>{shows}</span>
                <span className={styles.text}>{sessions}</span>
                <span className={styles.text}>{ctr}</span>
                <span className={styles.text}>{price}</span>
                <span className={styles.text}>{name}</span>
            </div>
            <div className={styles.item}>
                <span className={styles.text}>{count}</span>
                <span className={styles.text}>{cpa}</span>
                <span className={styles.text}>{proceeds}</span>
            </div>
            <div className={styles.item}>
                <span className={styles.text}>{countTarget}</span>
                <span className={styles.text}>{cpaTarget}</span>
                <span className={styles.text}>{cr}</span>
            </div>
        </div>
    );
};

export default Group;
