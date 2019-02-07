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

// Setup data sub -> bob is a Software dev at amazon.
// change the data and make it reprints 

database.ref().on('value', (snapshot) => {
    const val = snapshot.val();
    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
}, (e) => {
        console.log('Error with data fetching', e);
});

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref('age').set(25);
// }, 2300);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7300);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10400);


// database.ref('location/city')
// .once('value')
// .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// })
// .catch((e) => {
//     console.log('Error fetching data', e);
// });

// database.ref().set({
//     name: 'Bob S',
//     age: 23,
//     stressLevel: 5,
//     job: {
//         title: 'Sotfware developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'London',
//         country: 'United Kingdom'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed.', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
    
// });

// database.ref('isSingle')
// .remove()
// .then(() => {
//     console.log('Data was removed')
// }).catch((e) => {
//     console.log('Did not remove data', e);
// });