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
        const rootReducer = (state: number = 0, action: Action) => {
            switch (action.type) {
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

        it('should dispatch an action change state', () => {
            store.dispatch({
                type: 'increment',
                payload: 1
            });

            expect(store.getState()).toEqual(1)
        });

        it('should subscribe to store changes', (done) => {
            store.subscribe((counter: number) => {
                expect(counter).toEqual(1);
                done();
            });

            store.dispatch({
                type: 'increment',
                payload: 1
            });
        });

        it('should subscribe to multiple store changes', () => {
            const mockFn = jest.fn();
            store.subscribe(mockFn);

            store.dispatch({
                type: 'increment',
                payload: 1
            });

            store.dispatch({
                type: 'increment',
                payload: 3
            });

            expect(mockFn).toHaveBeenCalledTimes(2);

            expect(mockFn.mock.calls[0][0]).toEqual(1);
            expect(mockFn.mock.calls[1][0]).toEqual(4);
        });
    });
});