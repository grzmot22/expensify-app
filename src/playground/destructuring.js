const person = {
    name: 'Andrew',
    age: 23,
    location: {
        city: 'London',
        temp: 22
    }
};

const {name, age} = person;
// const name = person.name;
// const age = person.age;

console.log(`${name} is ${age}`);

const {city, temp} =person.location;
if (city && temp) {
    console.log(`It's ${temp} in ${city}`)
}