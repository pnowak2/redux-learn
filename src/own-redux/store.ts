export interface Store {
    getState: () => State;
    dispatch: (action: Action) => void;
    subscribe: (fn: Listener) => void;
}

export type State = any;
export type Reducer = (state: State, action: Action) => any;
export type Listener = (state: State) => void;

export interface Action {
    type: string;
    payload?: any;
}

const createStore = (rootReducer: Reducer): Store => {
    let state: State;
    const listeners: Listener[] = [];

    const getState = () => state; 

    const dispatch = (action: Action) => {
        state = rootReducer(state, action);
        listeners.forEach(l => l(state));
    }

    const subscribe = (subscriber: Listener) => {
        listeners.push(subscriber);
    }

    return { getState, dispatch, subscribe }
}

export { createStore };