function disemvowel(str) {
  var n = str.length;
  var newStr = "";
 
  var i;
  for(i = 0; i < n+1; i++) {
    if (str.slice(i, i+1) != "a" && str.slice(i, i+1) != "e" && str.slice(i, i+1) != "i" && str.slice(i, i+1) != "o" && str.slice(i, i+1) != "u" && str.slice(i, i+1) != "A" && str.slice(i, i+1) != "E" && str.slice(i, i+1) != "I" && str.slice(i, i+1) != "O" && str.slice(i, i+1) != "U")   {
     newStr = newStr.concat(str.slice(i, i+1))
    }
    
  }
  
  return newStr;
}