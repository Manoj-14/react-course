// import { apiKey } from "./util.js";

// import apiKey from "./util.js";
// import { key } from "./util.js";
// import * as util from "./util.js";

// console.log(apiKey);
// console.log(key);
// console.log(util.default);
// console.log(util.key);

// const hobbies = ["Sports", "Reading", "Singing", "Playing"];
// const hobbies2 = ["Sports1", "Reading1", "Singing1", "Playing1"];

// hobbies.push("Stoty telling");
// hobbies.unshift("Sports");
// hobbies.forEach((hobby) => {
//   console.log(hobby);
// });
// let index = hobbies.findIndex((item) => item === "Sports");
// console.log(index);
// const edidtedHobbies = hobbies.map((item) => item + "!");
// console.log(edidtedHobbies);
// const edidtedHobbiesWithObjects = hobbies.map((item) => ({
//   text: item,
// }));
// console.log(edidtedHobbiesWithObjects);

// const [firstname, lastname] = ["Manoj", "M"];
// console.log(firstname);
// console.log(lastname);

// const { name, age } = { name: "Manoj", age: 21 };
// console.log(name, age);

// const { name: var_name, age1 } = { name: "Manoj", age: 21 };
// console.log(var_name, age1);

// const newHobbies = [...hobbies, ...hobbies2];

// console.log(newHobbies);

// const handleTimeOut = () => {
//   console.log("Time out");
// };

// const handleTimeOut1 = () => {
//   console.log("Time out 1");
// };

// setTimeout(handleTimeOut, 2000);
// setTimeout(handleTimeOut1, 3000);
// setTimeout(() => {
//   console.log("Time out last");
// }, 4000);

// function greeter(greet) {
//   greet();
// }

// greeter(() => console.log("Calling funtion"));

const name = "Manoj";
var name1 = name;
name1 = name1 + "!";
console.log(name, name1); // original value is not change bcz var stors the original value insted of memory

const hobbies = ["Sports", "Reading", "Singing", "Playing"];

const hobbiesRef = hobbies;
hobbiesRef.push("New Hobby"); // original value is will change bcz var stors the memory address insted of value

console.log(hobbies);
console.log(hobbiesRef);
