import * as fromReducer from './reducer';

describe('Reducer测试', () => {
    it('未定义的action时候state应该是初始值', () => {
        const { initialState } = fromReducer;
        const action = {
            type: 'Unknown',
        };
        const state = fromReducer.stateReducer(initialState, action);

        expect(state).toBe(initialState);
    });
});
