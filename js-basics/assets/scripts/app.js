// import { apiKey } from "./util.js";

// import apiKey from "./util.js";
// import { key } from "./util.js";
// import * as util from "./util.js";

// console.log(apiKey);
// console.log(key);
// console.log(util.default);
// console.log(util.key);

// const hobbies = ["Sports", "Reading", "Singing", "Playing"];

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

const [firstname, lastname] = ["Manoj", "M"];
console.log(firstname);
console.log(lastname);

const { name, age } = { name: "Manoj", age: 21 };
console.log(name, age);

const { name: var_name, age1 } = { name: "Manoj", age: 21 };
console.log(var_name, age1);
