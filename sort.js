// const numbers = [4,7,12,8,43,19,6,1]
// // const numbers_asc = numbers.sort();
// const numbers_asc = [...numbers].sort(function (a, b) {return a - b });
// const numbers_dsc = [...numbers].sort(function (a, b) {return b - a });


// console.log(numbers_asc)
// console.log(numbers_dsc)



const statement = 'I am a hardworking person';

const words = statement.split(" ");
const reversedWords = words.reverse();
const reversedSentence = reversedWords.join(" ");


console.log(reversedSentence);
