import authReducer from '../../../store/auth/reducer';

test('should set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: '123h4'
    };
    const state = authReducer({}, action);
    expect(state.uid).toEqual(action.uid);
  });

  test('should clear uid for logout', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({uid: 'blablas'}, action);
    expect(state).toEqual({});
  });