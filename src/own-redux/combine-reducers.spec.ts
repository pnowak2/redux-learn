import { combineReducers } from './combine-reducers';
import { Action } from './store';

describe('Combine Reducers', () => {
    it('should behave...', () => {
        const rootReducer = combineReducers({
            'foo': (state: any, action: Action): any => {
            },
            'bar': (state: any, action: Action): any => {
            }
        });
    });
});