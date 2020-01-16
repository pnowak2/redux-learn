import { createStore } from 'redux'

describe('Redux', () => {
    function counter(state = 0, action) {
        switch (action.type) {
            case 'INCREMENT':
                return state + 1
            case 'DECREMENT':
                return state - 1
            default:
                return state
        }
    }

    const store = createStore(counter)

    it('should test basic example', () => {
        const mock = jest.fn();
        store.subscribe(mock);

        store.dispatch({ type: 'INCREMENT' })
        store.dispatch({ type: 'INCREMENT' })
        store.dispatch({ type: 'INCREMENT' })
        store.dispatch({ type: 'DECREMENT' })

        expect(mock).toHaveBeenCalledTimes(4);
        expect(store.getState()).toEqual(2);
    });
});