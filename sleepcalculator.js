const getSleepHours = day => {
  if (day === 'Monday') {
    return 8;
  } else if (day === 'Tuesday'){
    return 6;
  } else if (day === 'Wednesday') {
    return 7;
  } else if (day === 'Thursday') {
    return 9;
  } else if (day === 'Friday') {
    return 6;
  } else if (day === 'Saturday') {
    return 7;
  } else if (day === 'Sunday') {
    return 7;
  }
};
console.log(getSleepHours('Monday'))

const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');

console.log(getActualSleepHours())

let getIdealSleepHours = () =>
{let idealHours = 8;
return idealHours * 7;
};

console.log(getIdealSleepHours())

const calculateSleepDebt = () => {const actualSleepHours = getActualSleepHours();
      const idealSleepHours = getIdealSleepHours();
if (actualSleepHours === idealSleepHours) {console.log('You got perfect sleep!');
} else if (actualSleepHours > idealSleepHours){console.log('That\'s too much sleep,' +(actualSleepHours - idealSleepHours) + ' too many.');
} else {
  console.log('You need to get some rest, you only slept for ' + (idealSleepHours - actualSleepHours));}}

calculateSleepDebt()


//For extra practice, try these:
//getActualSleepHours() could be implemented without calling
//getSleepHours(). Use literal numbers and the + operator to
//rewrite getActualSleepHours(). It should still return the total
//actual hours slept in the week.
//Some people need to sleep longer than others.
//Rewrite getIdealSleepHours() so that you can pass
//it an argument, like getIdealSleepHours(8) where 8 is
//the ideal hours per night.
//Update the call to getIdealSleepHours() in
//calculateSleepDebt() too.


//Put the daily sleep hours directly into getActualSleepHours().
//const getActualSleepHours
//const getActualSleepHours = () => 6 + 7 + 9 + 8 + 5 + 10 + 11;

//Make idealHours a parameter and multiply it by 7.
//const getIdealSleepHours = idealHours => idealHours * 7;

//When you call the updated function in calculateSleepDebt(), call it like this:
//const calculateSleepDebt = () => {
  //...

  //const idealSleepHours = getIdealSleepHours(8);

  //...
//};


//= () => 6 + 7 + 9 + 8 + 5 + 10 + 11;
