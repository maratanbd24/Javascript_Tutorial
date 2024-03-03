const van = 'i am a good boy';
let reverse = ''  

//  system 1 ......................

for (const letter of van ){
    // console.log(letter)
    reverse = letter + reverse;
    
}

// console.log(reverse);




let rev = ''
for (i = 0; i < van; i++ ){
    console.log(i)
}




// shortcut  system 2 ........................

const reversed = van.split('').reverse().join('')
console.log(reversed)