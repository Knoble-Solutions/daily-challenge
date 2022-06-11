// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.
// Example:

// h = 0
// m = 1
// s = 1

// result = 61000

// Input constraints:

//     0 <= h <= 23
//     0 <= m <= 59
//     0 <= s <= 59

function past(h, m, s){
    //#Happy Coding! ^_^
    
    
     // 1 hour is 60 minutes
    // 60 minutes is 3600 seconds
    // 3600 seconds is 3600000 milliseconds
    
    
    let result = 1000 * ( (60 * (h * 60)) + (m * 60) + (s) )
    
    return result
  }