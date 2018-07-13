const person = {
    name: 'Andrew',
    age: 23,
    location: {
        city: 'London',
        temp: 22
    }
};

const {name: firstName = 'Anonymouns', age} = person;
// const name = person.name;
// const age = person.age;

console.log(`${firstName} is ${age}`);

const {city, temp: temperature} =person.location;
if (city && temperature) {
    console.log(`It's ${temperature} in ${city}`)
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);