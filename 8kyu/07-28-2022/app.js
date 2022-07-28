// Your function takes two arguments:

//     current father's age (years)
//     current age of his son (years)

// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

function twiceAsOld(dadYearsOld, sonYearsOld) {
    let years = dadYearsOld - (sonYearsOld * 2)
    if(years < 0){
      years *= -1
    } 
    return years
  }