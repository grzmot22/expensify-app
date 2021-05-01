import types from './types';

const initialState = [];

export default function expensesReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_EXPENSE:
      return [...state, action.payload.expense];
    case types.REMOVE_EXPENSE:
      return state.filter(({ id }) => id !== action.payload.id);
    case types.EDIT_EXPENSE:
      return state.map((expense) => {
        if (expense.id === action.payload.id) {
          return {
            ...expense,
            ...action.payload.updates,
          };
        } else {
          return expense;
        }
      });
    case types.SET_EXPENSES:
      return action.payload.expenses;
    default:
      return state;
  }
}
