export interface Action {
    type: string;
    payload: any;
}

export type State = any;

export interface Store {
    getState: () => State;
    dispatch: (action: Action) => void;
    subscribe: () => void;
}

export type Reducer = (state: State, action: Action) => any;

const createStore = (rootReducer: Reducer): Store => {
    let state: any;

    const getState = () => state; 

    const dispatch = (action: Action) => {
        state = rootReducer(state, action)
    }

    const subscribe = () => {

    }

    return { getState, dispatch, subscribe }
}

export { createStore };