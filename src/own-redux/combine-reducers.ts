import { Reducer } from './store';

export interface Reducers {
    [key: string]: Reducer
}

export const combineReducers = (reducers: Reducers): Reducer => {
    return null;
}