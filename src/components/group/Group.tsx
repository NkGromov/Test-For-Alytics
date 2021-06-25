import React from "react";
import styles from "./group.module.css";
import { useContext } from "react";
import { HidenContext } from "../../containers/groups/Groups";
import { statistics } from "../../redux/types";
interface props extends statistics {
    name: string;
    toggle?: any;
    soursecesNum?: any;
    img: any;
    type: "group" | "ad" | "source";
}

const Group: React.FC<props> = ({ name, img, type, clicks, toggle, expenses, shows, sessions, CTR, price, counts, CPA, proceeds, countsTarget, CPATarget, CR, soursecesNum }) => {
    const ishidden = useContext(HidenContext);
    return (
        <div className={styles.wrapper}>
            <div className={`${styles.item} ${!ishidden && styles.itemActive}`}>
                <div className={styles.wrapperTitle}>
                    {type === "group" ? (
                        <>
                            <button onClick={toggle} className={`${styles.button} ${!ishidden && styles.buttonActive}`}>
                                <span className={styles.line}></span>
                                <span className={styles.line}></span>
                            </button>
                            <img src={img} alt="Изоброжение группы" className={styles.groupImg} />
                            <div>
                                <span className={styles.title}>{name}</span>
                                <span className={styles.subTitle}>Группа. Источников {soursecesNum}</span>
                            </div>
                        </>
                    ) : type === "ad" ? (
                        <>
                            <img src={img} alt="Изоброжение группы" className={`${styles.groupImg} ${styles.margin}`} />
                            <div>
                                <span className={styles.title}>{name}</span>
                                <span className={styles.subTitle}>платная реклама</span>
                            </div>
                            <div className={styles.shape}></div>
                        </>
                    ) : (
                        <>
                            <img src={img} alt="Изоброжение группы" className={`${styles.groupImg} ${styles.margin}`} />
                            <div>
                                <span className={styles.title}>{name}</span>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <div className={`${styles.item} ${!ishidden && styles.itemActive}`}>
                <span className={styles.text}>{shows}</span>
                <span className={styles.text}>{clicks}</span>
                <span className={styles.text}>{sessions}</span>
                <span className={styles.text}>{CTR}</span>
                <span className={styles.text}>{price}</span>
                <span className={styles.text}>{expenses}</span>
            </div>
            <div className={`${styles.item} ${!ishidden && styles.itemActive}`}>
                <span className={styles.text}>{counts}</span>
                <span className={styles.text}>{CPA}</span>
                <span className={styles.text}>{proceeds}</span>
            </div>
            <div className={`${styles.item} ${!ishidden && styles.itemActive}`}>
                <span className={styles.text}>{countsTarget}</span>
                <span className={styles.text}>{CPATarget}</span>
                <span className={styles.text}>{CR}</span>
            </div>
        </div>
    );
};

export default Group;
