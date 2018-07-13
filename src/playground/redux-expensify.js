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
const removeExpence = ({id}= {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})
// SET_TEXT-FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT  
// SET_START_DATE
// SET_END_DATE

// Expenses Reducers

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id);
        case 'EDIT_EXPENSE':
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

const expenceOne = store.dispatch(addExpense({desription: 'Rent', amount: 100}));
const expenceTwo = store.dispatch(addExpense({desription: 'Coffee', amount: 300}));

store.dispatch(removeExpence({id: expenceOne.expense.id}));

store.dispatch(editExpense(expenceTwo.expenceTwo.id, { amount:500 }));
console.log(expenceOne);

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
