import { Action, createStore, State, Store } from './store';

describe('Store', () => {
    describe('API', () => {
        describe('.createStore()', () => {
            let store;

            beforeEach(() => {
                store = createStore(null);
            });
            it('should return an object', () => {
                expect(store).toBeDefined();
            });

            it('should have getState() method', () => {
                expect(store.getState).toBeDefined();
            });

            it('should have dispatch() method', () => {
                expect(store.dispatch).toBeDefined();
            });

            it('should have subscribe() method', () => {
                expect(store.subscribe).toBeDefined();
            });
        });
    });

    describe('Features', () => {
        let store: Store;
        const rootReducer = (state: State = 0, action: Action) => {
            switch(action.type) {
                case 'increment': {
                    return state + action.payload;
                }
                default: {
                    return state;
                }
            }
        }

        beforeEach(() => {
            store = createStore(rootReducer);
        });

        it('should return default state', () => {
            expect(store.getState()).toEqual(undefined);
        });

        it('should dispatch an action', () => {
            store.dispatch({
                type: 'increment',
                payload: 1
            });

            expect(store.getState()).toEqual(1)
        });
    });
});