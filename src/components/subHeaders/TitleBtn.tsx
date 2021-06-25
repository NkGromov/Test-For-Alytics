import React from "react";
import styles from "./subHeaders.module.css";
import arrow from "../../img/right-arrow.svg";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../redux/appReducer";
import { sort } from "../../redux/types";
import { useState } from "react";
import { AppStateType } from "../../redux/store";
interface props {
    type: sort;
    children: string;
}
const TitleBtn: React.FC<props> = ({ children, type }) => {
    const dispatch = useDispatch();
    const sort = useSelector((state: AppStateType) => state.AppReducer.sort);
    return (
        <>
            <button className={styles.title} onClick={() => dispatch(actions.sortData(type))}>
                {children}
            </button>
            {sort === type && <img src={arrow} alt="Срелка" className={styles.arrow} />}
        </>
    );
};

export default TitleBtn;
