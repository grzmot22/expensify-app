import types from './types';
import database from '../../firebase/firebase';

export const addExpense = (expenseData) => {
  const addExpenseSuccess = (expense) => ({
    type: types.ADD_EXPENSE,
    payload: { expense },
  });

  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0,
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    return database
      .ref(`users/${uid}/expenses`)
      .push(expense)
      .then((ref) => {
        dispatch(
          addExpenseSuccess({
            id: ref.key,
            ...expense,
          }),
        );
      });
  };
};

export const removeExpense = ({ id } = {}) => {
  const removeExpenseSuccess = (id) => ({
    type: types.REMOVE_EXPENSE,
    payload: { id },
  });

  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses/${id}`)
      .remove()
      .then(() => {
        dispatch(removeExpenseSuccess({ id }));
      });
  };
};

export const editExpense = (id, updates) => {
  const editExpenseSuccess = (id, updates) => ({
    type: types.EDIT_EXPENSE,
    payload: { id, updates },
  });

  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editExpenseSuccess(id, updates));
      });
  };
};

export const setExpenses = () => {
  const setExpensesSuccess = (expenses) => ({
    type: types.SET_EXPENSES,
    payload: { expenses },
  });

  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses`)
      .once('value')
      .then((snapshot) => {
        const expenses = [];

        snapshot.forEach((childSnapshot) => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        dispatch(setExpensesSuccess(expenses));
      });
  };
};
