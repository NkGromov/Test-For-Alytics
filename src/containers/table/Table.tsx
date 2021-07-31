import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Group from "../../components/group/Group";
import Headers from "../../components/headers/Headers";
import SubHeaders from "../../components/subHeaders/SubHeaders";
import Summary from "../../components/summary/Summary";
import data from "../../data/data.json";
import { actions } from "../../redux/appReducer";
import { AppStateType } from "../../redux/store";
import { groups } from "../../redux/types";
import Groups from "../groups/Groups";
import styles from "./table.module.css";

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
                    clicks={el.sourseces[0].props.clicks}
                    shows={el.sourseces[0].props.shows}
                    sessions={el.sourseces[0].props.sessions}
                    CTR={el.sourseces[0].props.CTR}
                    price={el.sourseces[0].props.price}
                    counts={el.sourseces[0].props.counts}
                    CPA={el.sourseces[0].props.CPA}
                    proceeds={el.sourseces[0].props.proceeds}
                    countsTarget={el.sourseces[0].props.countsTarget}
                    CPATarget={el.sourseces[0].props.CPATarget}
                    CR={el.sourseces[0].props.CR}
                    expenses={el.sourseces[0].props.expenses}
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
