/* Currently running, as page loads
for loops are the 'big expense', save time by storing values */
const QuestionMarks = (str) => {
  n = str.length; // storage in this case saves a bit of time
  for (var i = 0; i < n; i++) { // outerloop
    ni = Number(str[i]); // store for time
    if (ni) {
      nn = 10 - ni; // store the difference in the first iterator from 10
      for (var j = i; j < n; j++) { // inner loop
        nj = Number(str[j]);
        if (nj && (nj==nn)) { // check if the difference is the same, if so, check for the char rules
          if(str.slice(i+1,j).split('?').length - 1 === 3) return true;
        }
      }
    }
  }
  return false;
}

console.time();
QuestionMarks("bcc?7??ccc?3tt1??????5");
console.timeEnd();

console.time();
QuestionMarks("alsdkf")
console.timeEnd();

// function solution found on google
// function QuestionsMarks(str) {
//   res = false;
//   for(let i = 0; i < str.length; i++) {
//       for(let j = i+1; j < str.length; j++) {
//           if(Number(str[i])+Number(str[j]) === 10) {
//             if(str.slice(i+1,j).split('?').length - 1 === 3) {
//                 res = true;
//                 break;
//             } else {
//                 return false;
//             }
//           }
//       }
//   }
//   return res;
// }

// const QuestionMarks = (str) => {
//   n = str.length // stored for efficiency
//   for(var i = 0; i < n; i++) {
//     for(var j = i; j < n; j++) {
//         if(Number(str[i])+Number(str[j]) === 10) {
//           if(str.slice(i+1,j).split('?').length - 1 === 3) return true;
//         }
//     }
//   }
//   return false;
// }


/* This section has the calls for timing embedded, the difference seems negligible */

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
