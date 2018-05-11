const QuestionMarks = (str) => {
  console.time("timer");
  n = str.length
  for(var i = 0; i < n; i++) {
    for(var j = i; j < n; j++) {
        if(Number(str[i])+Number(str[j]) === 10) {
          if(str.slice(i+1,j).split('?').length - 1 === 3) return true;
        }
    }
    console.timeEnd("timer");
  }
  return false;
}
