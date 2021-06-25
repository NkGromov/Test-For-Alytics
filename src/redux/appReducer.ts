import { groups, sort, sourseces, statistics } from "./types";
import { InferActionsTypes } from "./store";
const initialState = {
    groups: [] as groups[],
    total: {} as statistics,
    sort: null as sort | null,
};
export type initialState = typeof initialState;

const AppReducer = (state = initialState, action: ActionsTypes): initialState => {
    switch (action.type) {
        case "APP_INIT_DATA":
            const data: groups[] = action.data;
            for (let key in data) {
                const sourseces = data[key].sourseces;
                const total = sourseces.reduce((acc: statistics, current) => {
                    if (!acc["expenses"]) acc["expenses"] = current.expenses;
                    else acc["expenses"] += current.expenses;
                    if (!acc["CPA"]) acc["CPA"] = current.CPA;
                    else acc["CPA"] += current.CPA;
                    if (!acc["CR"]) acc["CR"] = current.CR;
                    else acc["CR"] += current.CR;
                    if (!acc["CPATarget"]) acc["CPATarget"] = current.CPATarget;
                    else acc["CPATarget"] += current.CPATarget;
                    if (!acc["CTR"]) acc["CTR"] = current.CTR;
                    else acc["CTR"] += current.CTR;
                    if (!acc["clicks"]) acc["clicks"] = current.clicks;
                    else acc["clicks"] += current.clicks;
                    if (!acc["counts"]) acc["counts"] = current.counts;
                    else acc["counts"] += current.counts;
                    if (!acc["countsTarget"]) acc["countsTarget"] = current.countsTarget;
                    else acc["countsTarget"] += current.countsTarget;
                    if (!acc["price"]) acc["price"] = current.price;
                    else acc["price"] += current.price;
                    if (!acc["proceeds"]) acc["proceeds"] = current.proceeds;
                    else acc["proceeds"] += current.proceeds;
                    if (!acc["sessions"]) acc["sessions"] = current.sessions;
                    else acc["sessions"] += current.sessions;
                    if (!acc["shows"]) acc["shows"] = current.shows;
                    else acc["shows"] += current.shows;
                    return acc;
                }, {} as statistics);
                data[key].total = total;
            }
            const allTotal = data.reduce((acc: statistics, current) => {
                if (!current.total) return acc;
                if (!acc["expenses"]) acc["expenses"] = current.total.expenses;
                else acc["expenses"] += current.total.expenses;
                if (!acc["CPA"]) acc["CPA"] = current.total.CPA;
                else acc["CPA"] += current.total.CPA;
                if (!acc["CR"]) acc["CR"] = current.total.CR;
                else acc["CR"] += current.total.CR;
                if (!acc["CPATarget"]) acc["CPATarget"] = current.total.CPATarget;
                else acc["CPATarget"] += current.total.CPATarget;
                if (!acc["CTR"]) acc["CTR"] = current.total.CTR;
                else acc["CTR"] += current.total.CTR;
                if (!acc["clicks"]) acc["clicks"] = current.total.clicks;
                else acc["clicks"] += current.total.clicks;
                if (!acc["counts"]) acc["counts"] = current.total.counts;
                else acc["counts"] += current.total.counts;
                if (!acc["countsTarget"]) acc["countsTarget"] = current.total.countsTarget;
                else acc["countsTarget"] += current.total.countsTarget;
                if (!acc["price"]) acc["price"] = current.total.price;
                else acc["price"] += current.total.price;
                if (!acc["proceeds"]) acc["proceeds"] = current.total.proceeds;
                else acc["proceeds"] += current.total.proceeds;
                if (!acc["sessions"]) acc["sessions"] = current.total.sessions;
                else acc["sessions"] += current.total.sessions;
                if (!acc["shows"]) acc["shows"] = current.total.shows;
                else acc["shows"] += current.total.shows;
                return acc;
            }, {} as statistics);
            return { ...state, groups: data, total: allTotal };
        case "APP_SORT_DATA":
            const newArray: groups[] = JSON.parse(JSON.stringify(state.groups));
            let newSort: sort | null = action.typeSort;
            if (state.sort === action.typeSort) newSort = null;
            newArray.sort((a: groups, b: groups) => {
                if (a.total && b.total) return b.total[action.typeSort] - a.total[action.typeSort];
                return 0;
            });
            for (let key in newArray) newArray[key].sourseces.sort((a: sourseces, b: sourseces) => b[action.typeSort] - a[action.typeSort]);

            return { ...state, groups: newArray, sort: newSort };
        default:
            return state;
    }
};
type ActionsTypes = InferActionsTypes<typeof actions>;
export const actions = {
    initData: (data: groups[]) => ({ type: "APP_INIT_DATA", data } as const),
    sortData: (typeSort: sort) => ({ type: "APP_SORT_DATA", typeSort } as const),
};

export default AppReducer;
