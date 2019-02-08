import authReducucer from '../../reducers/auth';

test('should set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: '123h4'
    };
    const state = authReducucer({}, action);
    expect(state.uid).toEqual(action.uid);
  });

  test('should clear uid for logout', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducucer({uid: 'blablas'}, action);
    expect(state).toEqual({});
  });