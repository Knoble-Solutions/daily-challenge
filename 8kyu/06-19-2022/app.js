// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
    const bmiNum = weight / (height ** 2);
    if (bmiNum <= 18.5) return 'Underweight';
    else if (bmiNum <= 25.0) return 'Normal';
    else if (bmiNum <= 30.0) return 'Overweight';
    else return 'Obese';
  }