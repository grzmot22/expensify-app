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

database.ref().set({
    name: 'Bob S',
    age: 23,
    isSingle: true,
    location: {
        city: 'London',
        country: 'United Kingdom'
    }
});

database.ref('age').set(24);
database.ref('location/city').set('St Albans');

database.ref('attributes').set({
    height: 33,
    weight: 66

});