import { combineReducers } from './combine-reducers';
import { Action, State, Reducer } from './store';

interface AppState {
    name: FooState;
    age: BarState;
}

interface FooState {
    name: string;
}

interface BarState {
    age: number;
}

const foo = (state: FooState, action: Action): FooState => {
    switch (action.type) {
        case 'foo.action': {
            return { ...state, name: action.payload }
        }
        default: {
            return state;
        }
    }
}

const bar = (state: BarState, action: Action): BarState => {
    switch (action.type) {
        case 'bar.action': {
            return { ...state, age: action.payload }
        }
        default: {
            return state;
        }
    }
}

describe('Combine Reducers', () => {
    it('should return function', () => {
        const rootReducer = combineReducers({});
        expect(typeof rootReducer).toBe('function');
    });

    xit('should return function', () => {
        const rootReducer: Reducer = combineReducers({ foo, bar });
        const resultState: AppState = rootReducer({}, {
            type: 'foo.action',
            payload: 'foo name'
        });

        expect(resultState).toEqual({
            foo: {
                name: 'foo name'
            },
            bar: undefined
        });
    });
});