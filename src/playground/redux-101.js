import { createStore } from 'redux';

const store = createStore((state={ count: 0 }) => {
    console.log('running');
    return state;

});

console.log(store.getState());

store.dispatch({
    type: 'INCREMENT'
});


console.log(store.getState());