const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//let arr=tutorials.map(e=>e.split(" "))
//let result=arr.map(e=>e.map(y=>y.charAt(0).toUpperCase() + y.slice(1)))
//return result.map(e=>e.join(" "))

const titleCased = () => {
  let arr=tutorials.map(e=>e.split(" "))
let result=arr.map(e=>e.map(y=>y.charAt(0).toUpperCase() + y.slice(1)))
return result.map(e=>e.join(" "))
}
