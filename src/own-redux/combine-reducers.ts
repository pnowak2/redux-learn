import { Action, Reducer, State } from './store';

export interface Reducers {
    [key: string]: Reducer
}

export const combineReducers = (reducers: Reducers): Reducer => {
    return (state: State, action: Action): State => {
        return state;
    };
}