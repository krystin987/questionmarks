/* Currently running, as page loads
for loops are the 'big expense', save time by storing values */
lookup = Array(256)
lookup[String.prototype.charCodeAt('1')] = '9'
lookup[String.prototype.charCodeAt('2')] = '8'
lookup[String.prototype.charCodeAt('3')] = '7'
lookup[String.prototype.charCodeAt('4')] = '6'
lookup[String.prototype.charCodeAt('5')] = '5'
lookup[String.prototype.charCodeAt('6')] = '4'
lookup[String.prototype.charCodeAt('7')] = '3'
lookup[String.prototype.charCodeAt('8')] = '2'
lookup[String.prototype.charCodeAt('9')] = '1'

const QuestionMarks = (str) => {
  n = str.length;
  for (var i=0; i<n; i++) {
    v = lookup[String.prototype.charCodeAt(str[i])];
    if (v) {
      for (var j = i + 1 + 3; j < n; j++) { // +1 to move once to the right past i, +3 for the minimum 3 characters separation
        if (str[j] == v) {
           if(str.slice(i+1,j).split('?').length - 1 === 3) return true;
        }
      }
    }
  }
  return false;
}

const test3 = "bb6?9"; //false
const test2 = "bcc?7??ccc?3tt1??????5"; //true
const test4 = "g??7??ccc??3tt1??????5"; //false
const test1 = "arrb6???4xxbl5???eee5"; //true

console.time();
QuestionMarks(test1); // true
console.timeEnd();
console.time();
QuestionMarks(test2) // true
console.timeEnd();
console.time();
QuestionMarks(test3); //false
console.timeEnd();
console.time();
QuestionMarks(test4); // true
console.timeEnd();



// const QuestionMarks = (str) => {
//   n = str.length; // storage in this case saves a bit of time
//   for (var i = 0; i < n; i++) { // outerloop
//     ni = Number(str[i]); // store for time
//     if (ni) {
//       nn = 10 - ni; // store the difference in the first iterator from 10
//       for (var j = i; j < n; j++) { // inner loop
//         nj = Number(str[j]);
//         if (nj && (nj==nn)) { // check if the difference is the same, if so, check for the char rules
//           if(str.slice(i+1,j).split('?').length - 1 === 3) return true;
//         }
//       }
//     }
//   }
//   return false;
// }

// const QuestionMarks = (str) => {
//   var n = str.length;
//   var NumberMemo = Array(n);
//   for (var i = 0; i < n; i++) {
//     ni = NumberMemo[i] = NumberMemo[i] || Number(str[i]);
//     if (ni) {
//       nn = 10-ni;
//       for (var j = i + 1 + 3; j < n; j++) { // +1 to move once to the right past i, +3 for the minimum 3 characters separation
//         nj = NumberMemo[j] = NumberMemo[j] || Number(str[j]);
//         if (nj && (nj==nn)) {
//            if(str.slice(i+1,j).split('?').length - 1 === 3) return true;
//         }
//       }
//     }
//   }
//   return false;
// }

// revamped
// const QuestionMarks = (str) => {
//   n = str.length // removed boolean, stored input length
//   for(var i = 0; i < n; i++) { // outer loop
//     for(var j = i; j < n; j++) { // inner loop
//         if(Number(str[i])+Number(str[j]) === 10) { checks integers for added value = 10
//           if(str.slice(i+1,j).split('?').length - 1 === 3) return true; //checks shallow copy for 3 '?' between integers that added to 10
//         }
//     }
//   }
//   return false; // returns when condition in the first if statement for integer values fails or when the chars between the integers that add to 10 don't have 3 question marks
// }


/* This section is identical to the above function, but has the calls for timing embedded, the difference seems negligible */

// const QuestionMarks = (str) => {
//   console.time("timer");
//   console.time("otherTimer");
//   n = str.length
//   for(var i = 0; i < n; i++) {
//     for(var j = i; j < n; j++) {
//         if(Number(str[i])+Number(str[j]) === 10) {
//           if(str.slice(i+1,j).split('?').length - 1 === 3) return true;
//         }
//     }
//   console.timeEnd("timer");
//   }
//   console.timeEnd("otherTimer");
//   return false;
// }

// function solution found on google
// function QuestionsMarks(str) {
//   res = false; // this boolean is redundant and unnecessary
//   for(let i = 0; i < str.length; i++) { // outer loop
//       for(let j = i+1; j < str.length; j++) { // inner loop
//           if(Number(str[i])+Number(str[j]) === 10) { // checks integers from input string for value = 10
//             if(str.slice(i+1,j).split('?').length - 1 === 3) { // checks for '?' between the integers to see if there are 3
//                 res = true; // unnecessary boolean reassignment
//                 break; //unnecessary break
//             } else {
//                 return false; // unnecessary boolean return and else statement
//             }
//           }
//       }
//   }
//   return res; // unnecessary reassigned boolean return
// }
