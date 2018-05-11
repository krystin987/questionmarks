/* Currently running, as page loads */
const QuestionMarks = (str) => {
  n = str.length // stored for efficiency
  for(var i = 0; i < n; i++) {
    for(var j = i; j < n; j++) {
        if(Number(str[i])+Number(str[j]) === 10) {
          if(str.slice(i+1,j).split('?').length - 1 === 3) return true;
        }
    }
  }
  return false;
}

// true is slower than false, as true actually runs through the inner loop and false just dumps out
console.time("timer");
QuestionMarks("bcc?7??ccc?3tt1??????5");
console.timeEnd("timer");

console.time("timer");
QuestionMarks("alsdkf")
console.timeEnd("timer");

/* This section has the calls for timing embedded, the difference seems negligible */

// const QuestionMarks = (str) => {
//   console.time("timer");
//   n = str.length
//   for(var i = 0; i < n; i++) {
//     for(var j = i; j < n; j++) {
//         if(Number(str[i])+Number(str[j]) === 10) {
//           if(str.slice(i+1,j).split('?').length - 1 === 3) return true;
//         }
//     }
//   console.timeEnd("timer");
//   }
//   console.timeEnd("timer");
//   return false;
// }
