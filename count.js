let student = {
    name: 'ratan',
    age: 22,
    city: 'dhaka',
    isStudent: true
}

const property = Object.keys(student);

// Count the number of keys
const count = property.length;

console.log("Number of property: " + count);