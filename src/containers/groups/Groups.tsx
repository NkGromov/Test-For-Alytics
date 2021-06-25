import React from "react";
import styles from "./groups.module.css";
import Group from "../../components/group/Group";
import { useState } from "react";
import { useRef } from "react";
import { groups } from "../../redux/types";
export const HidenContext = React.createContext(true);
const Groups: React.FC<groups> = (props) => {
    const [ishidden, setIsHidden] = useState<boolean>(true);
    const toggleHidden = () => setIsHidden((prev) => !prev);
    const hiddenRef = useRef<HTMLDivElement | null>(null);
    return (
        <HidenContext.Provider value={ishidden}>
            <div className={styles.wrapper} style={!ishidden ? { paddingBottom: hiddenRef.current?.clientHeight } : { paddingBottom: 0 }}>
                {props.total && (
                    <Group
                        name={props.name}
                        type="group"
                        toggle={toggleHidden}
                        clicks={props.total.clicks}
                        shows={props.total.shows}
                        sessions={props.total.sessions}
                        CTR={props.total.CTR}
                        price={props.total.price}
                        counts={props.total.counts}
                        CPA={props.total.CPA}
                        proceeds={props.total.proceeds}
                        countsTarget={props.total.countsTarget}
                        CPATarget={props.total.CPATarget}
                        CR={props.total.CR}
                        expenses={props.total.expenses}
                        soursecesNum={props.sourseces.length}
                        img={props.img}
                    />
                )}

                <div ref={hiddenRef} className={`${styles.hiddensEl} ${!ishidden && styles.hiddensElActive}`}>
                    {props.sourseces.map(
                        (el) =>
                            el.name && (
                                <Group
                                    name={el.name}
                                    type="source"
                                    key={el.id}
                                    clicks={el.clicks}
                                    shows={el.shows}
                                    sessions={el.sessions}
                                    CTR={el.CTR}
                                    price={el.price}
                                    counts={el.counts}
                                    CPA={el.CPA}
                                    proceeds={el.proceeds}
                                    countsTarget={el.countsTarget}
                                    CPATarget={el.CPATarget}
                                    CR={el.CR}
                                    expenses={el.expenses}
                                    img={el.img}
                                />
                            )
                    )}
                </div>
            </div>
        </HidenContext.Provider>
    );
};

export default Groups;
