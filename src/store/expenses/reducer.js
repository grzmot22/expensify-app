import types from "./types";

const initialState = [];

export default function expensesReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_EXPENSE:
      return [
        ...state,
        action.expense
      ];
    case types.REMOVE_EXPENSE:
      return state.filter(({ id }) => id !== action.id);
    case types.EDIT_EXPENSE:
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        };
      });
    case types.SET_EXPENSES:
      return action.payload.expenses;
    default:
      return state;
  }
}
