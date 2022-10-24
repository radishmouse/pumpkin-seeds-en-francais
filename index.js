const BUTTON_SELECTOR=`[data-id="target"]`;
const theButton = document.querySelector(BUTTON_SELECTOR);

const API_URL = `
https://bobsburgers-api.herokuapp.com/characters/?limit=9&skip=370`;


console.log('1');
const pumpkin = fetch(API_URL);

console.log('2');
const seeds  = pumpkin.then((response) => response.json())

console.log('3');
console.log(seeds);
seeds.then((whateverIsInThePromise) =>  {
  console.log(whateverIsInThePromise);
});
// setTimeout(() => {
//   console.log(seeds);
// }, 30);


// console.log('1');


// function sayHello() {
//   console.log('2');
//   console.log('bonjour!');
//   console.log('et voila');


// }

// // 1. add a simple alert when I click
// //theButton

// // 2. move that console.log to its own function
// // 2a. attach the listener
// console.log('3');
// theButton.addEventListener('click', sayHello);

// // 2b. ???
