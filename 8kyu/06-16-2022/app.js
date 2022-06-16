// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x){
    let result = ''
    x.split('').map( item => (item < 5) ? result += '0' : result += '1' )
     return result
   }