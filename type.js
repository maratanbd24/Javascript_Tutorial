let myObject = {
    name: 'ratan',
    age: 22,
    city: 'dhaka',
    isStudent: true
}

Object.keys(myObject).forEach(key => {
    const value = myObject[key];
    console.log(`Key: ${key} | type: ${typeof value}`) ;
    // console.log(typeof value )
});