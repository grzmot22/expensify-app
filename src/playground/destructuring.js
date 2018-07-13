// 
// Obeject dectrucuring
// 
// const person = {
//     name: 'Andrew',
//     age: 23,
//     location: {
//         city: 'London',
//         temp: 22
//     }
// };

// const {name: firstName = 'Anonymouns', age} = person;
// // const name = person.name;
// // const age = person.age;

// console.log(`${firstName} is ${age}`);

// const {city, temp: temperature} =person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

// 
// Array destucturing
// 

const address = ['99 Cambridge Street','Bedford' ,'Bedfordshire', 'MK40 3EE']

const [street, city, state = 'New York', zip] = address;

console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50','$2.75'];

const [itemName, ,mediumSize,] = item;

console.log(`A ${itemName} costs ${mediumSize}`);