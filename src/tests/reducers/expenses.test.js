import expensesReducucer from '../../reducers/expenses'

test('should set default state', () => {
  const state = expensesReducucer(undefined, { type: '@@INIT'});
  expect(state).toEqual([]);
})
