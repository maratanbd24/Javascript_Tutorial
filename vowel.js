// let subject = 'chemistry';
// let book = 'ChemIstry';
 
// // if (subject === book)

// if (subjectLetter=='a' || subjectLetter=='e'|| subjectLetter=='i' || subjectLetter=='o' || subjectLetter=='u') {
//     return true;
//   }
//   console.log('ami porbooooo');



let sub = "chemistry";
let book = 'ChemIstry';

function Vowel(sub) {
  let subLetter = sub.charAt(0);
  if (subLetter==='a' || subLetter==='e'|| subLetter==='i' || subLetter==='o' || subLetter==='u') {
    return true;
  }
  return false;
}

console.log(Vowel(sub));



