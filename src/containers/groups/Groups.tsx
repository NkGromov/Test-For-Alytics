import React from "react";
import styles from "./groups.module.css";
import Group from "../../components/group/Group";
import { useState } from "react";
import { useRef } from "react";
export const HidenContext = React.createContext(true);
const Groups = () => {
    const [ishidden, setIsHidden] = useState<boolean>(true);
    const toggleHidden = () => setIsHidden((prev) => !prev);
    const hiddenRef = useRef<HTMLDivElement | null>(null);
    console.log(hiddenRef);
    return (
        <HidenContext.Provider value={ishidden}>
            <div className={styles.wrapper} style={!ishidden ? { paddingBottom: hiddenRef.current?.clientHeight } : { paddingBottom: 0 }}>
                <Group
                    name="dsa"
                    type="group"
                    toggle={toggleHidden}
                    shows="12"
                    sessions="12"
                    ctr="12"
                    price="12"
                    count="12"
                    cpa="12"
                    proceeds="12"
                    countTarget="12"
                    cpaTarget="12"
                    cr="12"
                />

                <div ref={hiddenRef} className={`${styles.hiddensEl} ${!ishidden && styles.hiddensElActive}`}>
                    <Group name="dsa" type="source" shows="12" sessions="12" ctr="12" price="12" count="12" cpa="12" proceeds="12" countTarget="12" cpaTarget="12" cr="12" />
                    <Group name="dsa" type="source" shows="12" sessions="12" ctr="12" price="12" count="12" cpa="12" proceeds="12" countTarget="12" cpaTarget="12" cr="12" />
                    <Group name="dsa" type="source" shows="12" sessions="12" ctr="12" price="12" count="12" cpa="12" proceeds="12" countTarget="12" cpaTarget="12" cr="12" />
                </div>
            </div>
        </HidenContext.Provider>
    );
};

export default Groups;
