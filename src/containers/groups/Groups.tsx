import React, { useRef, useState } from "react";
import Group from "../../components/group/Group";
import { groups } from "../../redux/types";
import styles from "./groups.module.css";
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
                                    clicks={el.props.clicks}
                                    shows={el.props.shows}
                                    sessions={el.props.sessions}
                                    CTR={el.props.CTR}
                                    price={el.props.price}
                                    counts={el.props.counts}
                                    CPA={el.props.CPA}
                                    proceeds={el.props.proceeds}
                                    countsTarget={el.props.countsTarget}
                                    CPATarget={el.props.CPATarget}
                                    CR={el.props.CR}
                                    expenses={el.props.expenses}
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
