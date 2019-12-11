let input = 'a whale of a deal!'

const vowels = ['a', 'e', 'i', 'o', 'u']
let resultArray = []

for (let i = 0; i < input.length; i++)
  {for(let v = 0; v < vowels.length; v++) {
    if (input[i] === vowels[v]){resultArray.push(input[i]); console.log(v)} }
  if (input[i] === 'e'){resultArray.push(input[i]);}
  if (input[i] === 'u'){resultArray.push(input[i])}}


console.log(resultArray.join('').toUpperCase());
