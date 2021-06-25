import { combineReducers, createStore } from "redux";
import AppReducer from "./appReducer";
const reducers = combineReducers({ AppReducer });
type reducersType = typeof reducers;

export type AppStateType = ReturnType<reducersType>;

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesTypes<T>>;

const store = createStore(reducers);
// @ts-ignore
window.store = store;

export default store;
