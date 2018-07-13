import { createStore, combineReducers} from 'redux';

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