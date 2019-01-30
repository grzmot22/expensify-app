import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBRAw1OqD10OFvUT6riId6Iyai4XTjtAGU",
    authDomain: "expensify-a983a.firebaseapp.com",
    databaseURL: "https://expensify-a983a.firebaseio.com",
    projectId: "expensify-a983a",
    storageBucket: "expensify-a983a.appspot.com",
    messagingSenderId: "600470454014"
};

firebase.initializeApp(config);

const database = firebase.database();

// database.ref().set({
//     name: 'Bob S',
//     age: 23,
//     isSingle: true,
//     location: {
//         city: 'London',
//         country: 'United Kingdom'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed.', e);
// });

database.ref('isSingle')
.remove()
.then(() => {
    console.log('Data was removed')
}).catch((e) => {
    console.log('Did not remove data', e);
});