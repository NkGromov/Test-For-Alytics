import { InferActionsTypes } from "./store";
import { groups, sort, sourseces, statistics } from "./types";
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
                    const props = Object.keys(current.props) as sort[];
                    for (let prop of props) {
                        if (!acc[prop]) acc[prop] = current.props[prop];
                        else acc[prop] += current.props[prop];
                    }

                    return acc;
                }, {} as statistics);
                data[key].total = total;
            }
            const allTotal = data.reduce((acc: statistics, current) => {
                if (!current.total) return acc;
                const props = Object.keys(current.total) as sort[];
                for (let prop of props) {
                    if (!acc[prop]) acc[prop] = current.total[prop];
                    else acc[prop] += current.total[prop];
                }
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
            for (let key in newArray) newArray[key].sourseces.sort((a: sourseces, b: sourseces) => b.props[action.typeSort] - a.props[action.typeSort]);

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
