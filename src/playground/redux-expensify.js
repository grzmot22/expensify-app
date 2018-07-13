import { createStore, combineReducers} from 'redux';

// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT-FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT  
// SET_START_DATE
// SET_END_DATE

// Expenses Reducers

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {

};

const demoState = {
    expenses: [{
        id: 'sdfsdffsd',
        desription: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date of ammount
        startDate: undefined,
        endDate: undefined
    }
};