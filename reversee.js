const numbers = [1,2,3,4,5,6,7,8,9]

// console.log(numbers)

// numbers.reverse();

// console.log(numbers)

const rev_numbers = [];
for (const num of numbers){
    console.log(num);
    rev_numbers.push[num];
    
}
console.log(rev_numbers)




// reversed side //

const rev_rev_numbers = [];
for (let i = numbers.length -1; i >=0; i--){
    const num = numbers[i];
    console.log(num);
    rev_rev_numbers.push(num);
}

console.log(rev_rev_numbers)












const numbers = [1,2,3,4,5,6,7]
const ulta = numbers.reverse();

console.log(ulta)



































const colors = ['red', 'blue', 'green', 'yellow','orange']


for (let i = colors.length -1; i >=0; i--){
    const num = colors[i];
    // console.log(num);
    // colors.push(num);
}

// console.log(colors)


let i = colors.length
while (i >= 0){
    i--;
    
}
console.log(colors)
































// const statement = 'i am a hard working person'

// const ulta = statement.reverse('');
// console.log(ulta)





const statement = 'I am a hardworking person';

const words = statement.split(" ");
const reversedWords = words.reverse();
const reversedSentence = reversedWords.join(" ");

// console.log("Input:", statement);
console.log(reversedSentence);

