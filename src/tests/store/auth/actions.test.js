import { login, logout } from "../../../store/auth/actions";


test('should generate login action object', () => {
    const uid = 'blabla2'
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('should generate logout action object', () => {
  const action = logout();
  expect(action).toEqual({
      type: 'LOGOUT'
  });
});