
// 1. Ways to work with strings
let names = "Divya";
console.log(names);
let friendsname = "xyz";
console.log(friendsname);
console.log(names[0]);

//2. template literals
// these are basically used to embed expresions and makes strings more readable.
let prints = `this is  ${names}`;
console.log(prints);

//3. Escape sequences \t \r
let charc = 'this is \'n ';
console.log(charc);
let printchar2 = 'this is \n divya';
console.log(printchar2);


//4 compare string
const a = "a";
const b = "b";
if (a < b) {
  // true
  console.log(`${a} is less than ${b}`);
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} are equal.`);
}


// Note that all comparison operators, including === and ==, compare strings case-sensitively. A common way to compare strings case-insensitively
//  is to convert both to the same case (upper or lower) before comparing them.
function areEqualCaseInsensitive(str1, str2) {
    return str1.toUpperCase() === str2.toUpperCase();
  }
  
  const areEqualInUpperCase = (str1, str2) =>
  str1.toUpperCase() === str2.toUpperCase();
const areEqualInLowerCase = (str1, str2) =>
  str1.toLowerCase() === str2.toLowerCase();

areEqualInUpperCase("ß", "ss"); // true; should be false
areEqualInLowerCase("ı", "I"); // false; should be true



  // create a new string 
const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;

const string4 = new String("A String object");
console.log(string4);

 let item = "cat".charAt(1); // gives value "a"
 console.log(item);
"cat"[2]; // gives value "t"

// A locale-aware and robust solution for testing case-insensitive equality is to use the Intl.Collator API or the string's localeCompare() method — they share the same interface — with the sensitivity option set to "accent" or "base".

const areEqual = (str1, str2, locale = "en-US") =>
  str1.localeCompare(str2, locale, { sensitivity: "accent" }) === 0;

areEqual("ß", "ss", "de"); // false
areEqual("ı", "I", "tr"); // true

//String primitives and String objects
// Note that JavaScript distinguishes between String objects and primitive string values. (The same is true of Boolean and Numbers.)

// String literals (denoted by double or single quotes) and strings returned from String calls in a non-constructor context (that is, called without using the new keyword) are primitive strings. In contexts where a method is to be invoked on a primitive string or a property lookup occurs, JavaScript will automatically wrap the string primitive and call the method or perform the property lookup on the wrapper object instead.


const strPrim = "foo"; // A literal is a string primitive
const strPrim2 = String(1); // Coerced into the string primitive "1"
const strPrim3 = String(true); // Coerced into the string primitive "true"
const strObj = new String(strPrim); // String with new returns a string wrapper object.

console.log(typeof strPrim); // "string"
console.log(typeof strPrim2); // "string"
console.log(typeof strPrim3); // "string"
console.log(typeof strObj); // "object" 

// Warning: You should rarely find yourself using String as a constructor.

// String primitives and String objects also give different results when using eval(). Primitives passed to eval are treated as source code; String objects are treated as all other objects are, by returning the object. For example:
const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"
// For these reasons, the code may break when it encounters String objects when it expects a primitive string instead, although generally, authors need not worry about the distinction.

// A String object can always be converted to its primitive counterpart with the valueOf() method.

console.log(eval(s2.valueOf())); // returns the number 4


// String coercion
// Many built-in operations that expect strings first coerce their arguments to strings (which is largely why String objects behave similarly to string primitives). The operation can be summarized as follows:

// Strings are returned as-is.
// undefined turns into "undefined".
// null turns into "null".
// true turns into "true"; false turns into "false".
// Numbers are converted with the same algorithm as toString(10).
// BigInts are converted with the same algorithm as toString(10).
// Symbols throw a TypeError.
// Objects are first converted to a primitive by calling its [@@toPrimitive]() (with "string" as hint), toString(), and valueOf() methods, in that order. The resulting primitive is then converted to a string.









//1.tolocaleLowercase()
const dotted = 'İstanbul';

console.log(`EN-US: ${dotted.toLocaleLowerCase('en-US')}`);
// Expected output: "i̇stanbul"

console.log(`TR: ${dotted.toLocaleLowerCase('tr')}`);
// Expected output: "istanbul"


"ALPHABET".toLocaleLowerCase(); // 'alphabet'

"\u0130".toLocaleLowerCase("tr") === "i"; // true
"\u0130".toLocaleLowerCase("en-US") === "i"; // false

const locales = ["tr", "TR", "tr-TR", "tr-u-co-search", "tr-x-turkish"];
"\u0130".toLocaleLowerCase(locales) === "i"; // true



// 2. tolocaleUppercase()String.prototype.toLocaleUpperCase()
// The toLocaleUpperCase() method of String values returns this string converted to upper case, according to an
// y locale-specific case mappings.

const city = 'istanbul';

console.log(city.toLocaleUpperCase('en-US'));
// Expected output: "ISTANBUL"

console.log(city.toLocaleUpperCase('TR'));
// Expected output: "İSTANBUL"


//3. tolowercase() method
const sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.toLowerCase());
// Expected output: "the quick brown fox jumps over the lazy dog."

// Return value
// A new string representing the calling string converted to lower case.
console.log("ALPHABET".toLowerCase()); // 'alphabet'

//4. tostirng()String.prototype.toString()
// The toString() method of String values returns this string value.
// Return value
// A string representing the specified string value.
const stringObj = new String('foo');

console.log(stringObj);
// Expected output: String { "foo" }

console.log(stringObj.toString());
// Expected output: "foo"

String.prototype.toString = () => "Overridden";
console.log(`${"foo"}`); // "foo"
console.log(`${new String("foo")}`); // "Overridden"


// Examples
// Using toString()
// The following example displays the string value of a String object:

const x = new String("Hello world");

console.log(x.toString()); // "Hello world"


// 5. toUpperCase()
const sentence1 = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence1.toUpperCase());
// Expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
