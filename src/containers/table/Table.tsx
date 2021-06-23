import React from "react";
import styles from "./table.module.css";
import Headers from "../../components/headers/Headers";
import SubHeaders from "../../components/subHeaders/SubHeaders";
import Summary from "../../components/summary/Summary";
import Groups from "../groups/Groups";
import Group from "../../components/group/Group";

const Table = () => {
    return (
        <div className={styles.container}>
            <div className={styles.table}>
                <Headers />
                <SubHeaders />
                <Summary />
                <Groups />
                <Groups />
                <Groups />
                <Groups />
                <Group name="dsa" type="ad" shows="12" sessions="12" ctr="12" price="12" count="12" cpa="12" proceeds="12" countTarget="12" cpaTarget="12" cr="12" />
            </div>
        </div>
    );
};

export default Table;
