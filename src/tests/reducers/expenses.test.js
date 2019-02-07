import expensesReducucer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', () => {
  const state = expensesReducucer(undefined, { type: '@@INIT'});
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
      type: 'REMOVE_EXPENSE',
      id: expenses[1].id
  };
  const state = expensesReducucer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducucer(expenses, action);
    expect(state).toEqual(expenses);
  });

  test('should add expense', () => {
    const expense = {
        id: '4',
        description: 'Rum',
        note: '',
        createdAt: 2000,
        amount: 4500
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducucer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
  });
  
  test('should edit expense by id', () => {
    const note = 'Kotek';
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            note
        }
    };
    const state = expensesReducucer(expenses, action);
    expect(state[0].note).toBe('Kotek');
  });
  
  test('should not edit expense if id not found', () => {
    const note = 'Kotek';
    const action = {
        type: 'EDIT_EXPENSE',
        id: -1,
        updates: {
            note
        }
    };
    const state = expensesReducucer(expenses, action);
    expect(state).toEqual(expenses);
    });

    test('should set expenses', () => {
      const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
      }
      const state = expensesReducucer(expenses, action);
      expect(state).toEqual([expenses[1]]);
    });
    