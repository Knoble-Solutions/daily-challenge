//P
// ?
//Returns
// going to how many people will be left off of the bus.
//Examples
// ?
//P
// subtract riders on the bus from the bus' capacity. then take that total and aplly it to the number of people 
// waiting to get on the bus.

function enough(cap, on, wait) {
    let room = (cap - on)
    if (wait >= room){
      console.log(cap, on, room, wait, wait-room )
      return wait - room
    } else {
      return 0
    }
  }