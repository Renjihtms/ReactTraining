// just logging a message in console

console.log("Hai this is the very beginning of react training !");

// END - just logging a message in console



// The const Keyword

const a = 5;
//a = 10; // will throw error "TypeError: Assignment to constant variable"

// END: The const Keyword



// The let Keyword - Block Scope

var b1 = 1;

if (true) {
  var b1 = 2;
  console.log(b1);
}

console.log(b1);


let b2 = 3;

if (true) {
  let b2 = 4;

  console.log(b2);
}

console.log(b2);

// END: The let Keyword - Block Scope



// The let Keyword - Hoisting
console.log(c1);
var c1 = 10;

// console.log(c2);
// let c2 = 5; // ReferenceError: Cannot access 'c2' before initialization

// END: The let Keyword - Hoisting



// The let Keyword - A step towards closure

var div,
  container = document.getElementById("container");

for (var i = 0; i < 3; i++) {
  div = document.createElement("div");
  div.onclick = () => {
    alert("This is box #" + i);
  };
  container.appendChild(div);
}

for (let j = 3; j < 6; j++) {
  div = document.createElement("div");
  div.onclick = () => {
    alert("This is box #" + j);
  };
  container.appendChild(div);
}

// END: The let Keyword



// Template Strings

const firstName = "Renjith";
const lastName = "MS";
console.log(`Hey "${lastName}, ${firstName}"`);

// END: Template Strings



// Default Parameters

function sayHello(entity1,entity = "World") {
  console.log(`${entity1} ${entity}!`);
}
sayHello("Hello","Suyati");
sayHello("Hello");

// END: Default Parameters



// Arrow Functions

const greet = entity => `Hello ${entity}!`;
console.log(greet("Suyati"));

const customGreet = (greet="Hello", entity) => {
//   if (!greet) {
//     greet = "Hello";
//   }

  if (!entity) {
    entity = "World";
  }

  return `${greet}, ${entity}`;
};
console.log(customGreet("Hey", "Renjith"));
console.log(customGreet());

// END: Arrow Functions



// Arrow Functions - A closure

// const triveni1 = {
//   rivers: ["Ganga", "Yamuna", "Saraswati"],
//   display: function(delay = 1000) {
//     setTimeout(function() {
//       console.log(this.rivers.join(", "));
//     }, delay);
//   }
// };

// triveni1.display(); // Uncaught TypeError: Cannot read property 'join' of undefined

const triveni2 = {
  rivers: ["Ganga", "Yamuna", "Saraswati"],
  display: function (delay = 1000) {
    setTimeout(() => {
      console.log(this.rivers.join(", "));
    }, delay);
  },
};

triveni2.display();

// END: Arrow Functions - A closure



// Destructuring Objects

const myAddress = {
  houseName: "MOOLAMPUZHA",
  street: "KAKADASSERY",
  place: "MUVATUPUZHA",
  district: "ERNAKULAM",
  state: "KERALA",
  country: "INDIA"
};

const { state, country } = myAddress;

console.log(state, country);


const printHouseName1 = (myAddress) => {
  console.log(`My house name is ${myAddress.houseName}`);
}
printHouseName1(myAddress);

// Personally, I don't prefer this
const printHouseName2 = ({ houseName }) => {
  console.log(`My house name is ${houseName}`);
}
printHouseName2(myAddress);

// END: Destructuring Objects



// Destructuring Arrays

const nicknames = ["Master Blaster", "God of the Off Side", "The Wall"];

const [sachin] = nicknames;
console.log(`Sachin's nickname is ${sachin}`);

const [,,dravid] = nicknames;
console.log(`Dravid's nickname is ${dravid}`);

const [, sourav, ] = nicknames;
console.log(`Sourav's nickname is ${sourav}`);

// END: Destructuring Arrays



// Object Literal Enhancement

const houseName = "MMOLAMPUZHA",
    street = "KAKKADASSERY",
    place = "MUVATUPUZHA",
    district = "ERNAKULAM";

const myAddress1 = {
    houseName,
    street,
    place,
    district,
    printHouseName() {
        console.log(`My house name is ${this.houseName}`);
    },
};

console.log(myAddress1);
myAddress1.printHouseName();

// END: Object Literal Enhancement



const array1 = ["1","2","3"];
const array2 = ["a","b","c"];

const array1Array2 = [...array1, ...array2];
console.log(`Arrays: ${array1Array2.join(", ")}`);

const [element1,...restelements] = array1Array2;
console.log(`elements: ${element1},${restelements}`);


// The Spread Operator

const south = [
  "Kerala",
  "Andaman and Nicobar",
  "Andhra Pradesh",
  "Karnataka",
  "Lakshadweep",
  "Puducherry",
  "Tamil Nadu",
  "Telangana",
];
const north = [
  "Chandigarh",
  "Delhi",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Ladakh",
  "Punjab",
  "Rajasthan",
  "Uttarakhand",
  "Uttar Pradesh",
];

const southAndNorth = [...south, ...north];
console.log(`SouthNorth States: ${southAndNorth.join(", ")}`);

const [ourState, ...others] = southAndNorth;
console.log(`Our state: ${ourState}`);
console.log(`Other states: ${others.join(", ")}`);

const southOfKerala = (...districts) => {
  const [southEast, ...rest] = districts;
  console.log(`Southest district of Kerala is ${southEast}.`);
  console.log(`Other district of Kerala are ${rest}.`);
}
southOfKerala("Thiruvananthapuram", "Kollam", "Pathanamthitta","Alapuzha","Kottayam","Idukki","Ernakulam","Thrissur","Malappuram","Kozhikode","Palakkad","Kannur","Vayanad","Kasargod");

// END: The Spread Operator



// XMLHttpRequest

function onResponse() {
  var data = JSON.parse(this.responseText);
  console.log(`Response from XHR call: ${data}`);
}

function onError(error) {
  console.log(error);
}

var xhrRequest = new XMLHttpRequest();
xhrRequest.onload = onResponse;
xhrRequest.onerror = onError;
xhrRequest.open('get', 'https://randomuser.me/api/', true);
xhrRequest.send();

// END: XMLHttpRequest



// jQuery Ajax

$.ajax("https://randomuser.me/api/")
  .then(function (data) {
    console.log(`Response from AJAX call: ${data}`);
  })
  .catch(function (error) {
    console.log(error);
  });

// END: jQuery Ajax



// Fetch API

fetch("https://randomuser.me/api/")
  .then((response) => {
    if (response.status !== 200) {
      throw new Error(`Request failed with status - ${response.status}`);
    }

    // response is a stream
    response.json().then((data) => {
      console.log(`Response from Fetch call: ${data}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// END: Fetch API



// Async/Await

const getRandomUser = async () => {
  const response = await fetch("https://randomuser.me/api/");
  const user = await response.json();
  console.log(`Response from async fn: ${user}`);
}
getRandomUser();

// END: Async/Await



// OOP prior to ES6

function PersonClass2(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

PersonClass2.prototype.print = function () {
  console.log(
    `{ firstName: "${this.firstName}", lastName: "${this.lastName}" }`
  );
};

const Renjith2 = new PersonClass2("Renjith", "MS");
Renjith2.print();

// END: OOP prior to ES6



// ES6 Classes

class PersonClass1 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  print() {
    console.log(
      `{ firstName: "${this.firstName}", lastName: "${this.lastName}" }`
    );
  }
}

const Renjith1 = new PersonClass1("Renjith", "Shaji");
Renjith1.print();

PersonClass1.prototype.greet = function () {
  console.log(`Hey "${this.lastName}, ${this.firstName}"`);
};
Renjith1.greet();

// END: Classes



// // ES6 Modules

// import { print } from "./modules/logger.js";
// print("We are done for the day!");

// // END: ES6 Modules

// // Evaluation Tasks

import {shallowCopyOfList,shallowCopyOfObject,deepCopy} from "./modules/clones.js";
let triveni = {
  name: "Prayagraj Confluence",
  rivers: ["Ganga", "Yamuna", "Saraswati"]
};

let list = ["1","2","3"];

let deepCopyOfObject = deepCopy(triveni);
let deepCopyOfList = deepCopy(list);
let shallowCopyObject = shallowCopyOfObject(triveni);
let shallowCopyList = shallowCopyOfList(list);

deepCopyOfObject.rivers.push("Periyar");
deepCopyOfList.push("4");

shallowCopyObject.rivers.push("Nila");
shallowCopyObject.name = "New Name";
shallowCopyList.push("5");


console.log(`Original Object: ${JSON.stringify(triveni)}`);
console.log(`Original List: ${JSON.stringify(list)}`);

console.log(`Deep Copy of object: ${JSON.stringify(deepCopyOfObject)}`);
console.log(`Deep Copy List: ${JSON.stringify(deepCopyOfList)}`);

console.log(`Shallow Copy object: ${JSON.stringify(shallowCopyObject)}`);
console.log(`Shallow Copy list: ${JSON.stringify(shallowCopyList)}`);

// import {clone} from "ramda" 

// console.log(`Ramada Clone Copy of Original: ${JSON.stringify(clone(triveni1))}`);
