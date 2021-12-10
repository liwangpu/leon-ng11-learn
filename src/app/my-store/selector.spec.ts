import * as fromSelector from './selector';
import * as fromState from './state';
import * as fromReducer from './reducer';

describe('Selector测试', () => {

    it('默认Verion应该是0', () => {

        const version = fromSelector.selectVersion.projector(fromReducer.initialState);
        expect(version).toEqual(0);
    });
});