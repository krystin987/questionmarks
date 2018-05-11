const QuestionMarks = (str) => {
  for(var i in str) {
    for(var j in str) {
        if(Number(str[i])+Number(str[j]) === 10) {
          if(str.slice(i+1,j).split('?').length - 1 === 3) return true;
        }
      }
    }
  return false;
}
