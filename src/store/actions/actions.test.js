import configureStore from 'redux-mock-store';

// Actions to be tested
import * as taskActions from './taskActions';

import thunk from 'redux-thunk';

const mockStore = configureStore([thunk]);
const store = mockStore();

describe('task actions', () => {
    beforeEach(() => { // Runs before each test in the suite
      store.clearActions();
    });

    describe('createTask', () => {
        it('Dispatches the correct action and payload', () => {
          const expectedActions = [
            {
              'payload': 1,
              'type': 'createTask',
            },
          ];
      
          store.dispatch(taskActions.createTask(1));
          expect(store.getActions()).toEqual(expectedActions);
        });
      });
})
