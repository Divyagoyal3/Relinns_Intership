

// JSON is a string whose format very much resembles JavaScript object literal format. You can include the same basic data types inside JSON as you can in a standard JavaScript object — strings, numbers, arrays, booleans, and other object literals. 
// This allows you to construct a data hierarchy, like so:
// {
//     "squadName": "Super hero squad",
//     "homeTown": "Metro City",
//     "formed": 2016,
//     "secretBase": "Super tower",
//     "active": true,
//     "members": [
//       {
//         "name": "Molecule Man",
//         "age": 29,
//         "secretIdentity": "Dan Jukes",
//         "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
//       },
//       {
//         "name": "Madame Uppercut",
//         "age": 39,
//         "secretIdentity": "Jane Wilson",
//         "powers": [
//           "Million tonne punch",
//           "Damage resistance",
//           "Superhuman reflexes"
//         ]
//       },
//       {
//         "name": "Eternal Flame",
//         "age": 1000000,
//         "secretIdentity": "Unknown",
//         "powers": [
//           "Immortality",
//           "Heat Immunity",
//           "Inferno",
//           "Teleportation",
//           "Interdimensional travel"
//         ]
//       }
//     ]
//   }
  // superHeroes.homeTown;
// superHeroes["active"];

// Above we mentioned that JSON text basically looks like a JavaScript object inside a string. We can also convert arrays to/from JSON. Below is also valid JSON, for example:

// JSON
// Copy to Clipboard
// [
//   {
//     "name": "Molecule Man",
//     "age": 29,
//     "secretIdentity": "Dan Jukes",
//     "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
//   },
//   {
//     "name": "Madame Uppercut",
//     "age": 39,
//     "secretIdentity": "Jane Wilson",
//     "powers": [
//       "Million tonne punch",
//       "Damage resistance",
//       "Superhuman reflexes"
//     ]
//   }
// ]



async function populate() {
  const requestURL =
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const superHeroes = await response.json();

  populateHeader(superHeroes);
  populateHeroes(superHeroes);
}
// To obtain the JSON, we use an API called Fetch. This API allows us to make network requests to retrieve resources from a server via JavaScript (e.g. images, text, JSON, even HTML snippets), meaning that we can update small sections of content without having to reload the entire page.

// In our function, the first four lines use the Fetch API to fetch the JSON from the server:

// we declare the requestURL variable to store the GitHub URL
// we use the URL to initialize a new Request object.
// we make the network request using the fetch() function, and this returns a Response object
// we retrieve the response as JSON using the json() function of the Response object.





// Populating the header
// Now that we've retrieved the JSON data and converted it into a JavaScript object, let's make use of it by writing the two functions we referenced above. First of all, add the following function definition below the previous code:


function populateHeader(obj) {
  const header = document.querySelector("header");
  const myH1 = document.createElement("h1");
  myH1.textContent = obj.squadName;
  header.appendChild(myH1);

  const myPara = document.createElement("p");
  myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
  header.appendChild(myPara);
}
// Here we first create an h1 element with createElement(), set its textContent to equal the squadName property of the object, then append it to the header using appendChild(). We then do a very similar operation with a paragraph: create it, set its text content and append it to the header. The only difference is that its text is set to a template 
// literal containing both the homeTown and formed properties of the object.




// Converting between objects and text
// The above example was simple in terms of accessing the JavaScript object, because we converted the network response directly into a JavaScript object using response.json().

// But sometimes we aren't so lucky — sometimes we receive a raw JSON string, and we need to convert it to an object ourselves. And when we want to send a JavaScript object across the network, we need to convert it to JSON (a string) before sending it. Luckily, these two problems are so common in web development that a built-in JSON object is available in browsers, which contains the following two methods:

// parse(): Accepts a JSON string as a parameter, and returns the corresponding JavaScript object.
// stringify(): Accepts an object as a parameter, and returns the equivalent JSON string.
// You can see the first one in action in our heroes-finished-json-parse.html example (see the source code) — this does exactly the same thing as the example we built up earlier, except that:

// we retrieve the response as text rather than JSON, by calling the text() method of the response
// we then use parse() to convert the text to a JavaScript object.
// The key snippet of code is here:


async function populate() {
  const requestURL =
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const superHeroesText = await response.text();

  const superHeroes = JSON.parse(superHeroesText);
  populateHeader(superHeroes);
  populateHeroes(superHeroes);
}
// As you might guess, stringify() works the opposite way. Try entering the following lines into your browser's JavaScript console one by one to see it in action:


let myObj = { name: "Chris", age: 38 };
myObj;
let myString = JSON.stringify(myObj);
myString;
// Here we're creating a JavaScript object, then checking what it contains, then converting it to a JSON string using stringify() — 
// saving the return value in a new variable — then checking it again.

