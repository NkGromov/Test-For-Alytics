import React from "react";
import styles from "./table.module.css";
import Headers from "../../components/headers/Headers";
import SubHeaders from "../../components/subHeaders/SubHeaders";
import Summary from "../../components/summary/Summary";
import Groups from "../groups/Groups";
import Group from "../../components/group/Group";
import { useEffect } from "react";
import data from "../../data/data.json";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../redux/appReducer";
import { groups } from "../../redux/types";
import { AppStateType } from "../../redux/store";

const Table = () => {
    const dispatch = useDispatch();
    const dispalyData = useSelector((state: AppStateType) => state.AppReducer.groups);
    const display = dispalyData.map((el: groups) => {
        if (el.type === "group") {
            return <Groups {...el} key={el.id} />;
        } else {
            return (
                <Group
                    name={el.name}
                    key={el.id}
                    type="ad"
                    clicks={el.sourseces[0].clicks}
                    shows={el.sourseces[0].shows}
                    sessions={el.sourseces[0].sessions}
                    CTR={el.sourseces[0].CTR}
                    price={el.sourseces[0].price}
                    counts={el.sourseces[0].counts}
                    CPA={el.sourseces[0].CPA}
                    proceeds={el.sourseces[0].proceeds}
                    countsTarget={el.sourseces[0].countsTarget}
                    CPATarget={el.sourseces[0].CPATarget}
                    CR={el.sourseces[0].CR}
                    expenses={el.sourseces[0].expenses}
                    img={el.img}
                />
            );
        }
    });
    useEffect(() => {
        const dataInit: groups[] = data.groups;
        dispatch(actions.initData(dataInit));
    }, []);
    return (
        <div className={styles.container}>
            <div className={styles.table}>
                <Headers />
                <SubHeaders />
                <Summary />
                {display}
            </div>
        </div>
    );
};

export default Table;
