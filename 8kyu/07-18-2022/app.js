
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    console.log(s)
    let a = s.split('!')
    let b = s.split('!').join('')
    console.log(a)
    console.log(b)
    return b;
  }