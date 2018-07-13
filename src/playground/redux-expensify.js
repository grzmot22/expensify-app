import { createStore, combineReducers} from 'redux';
import uuid from 'uuid';
// ADD_EXPENSE
const addExpense = (
    { 
        desription = '',
        note = '',
        amount = '',
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        desription,
        note,
        amount,
        createdAt
    }
});

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
    switch(action.type) {
        default:
        return state;
    } 
};

// Filters Reducer

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined

};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        default:
        return state;
    }
};

// Store creation
const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer 
    })
);

store.subscribe(() =>{
    console.log(store.getState());
});

store.dispatch(addExpense({desription: 'Rent', amount: 100}));

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