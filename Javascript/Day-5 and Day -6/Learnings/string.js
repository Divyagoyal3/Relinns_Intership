
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

//6. toString.prototype.trim()
// The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.


// Return value
// A new string representing str stripped of whitespace from both its beginning and end. Whitespace is defined as white space characters plus line terminators.
// If neither the beginning or end of str has any whitespace, a new string is still returned (essentially a copy of str).
const greeting = '   Hello world!   ';

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trim());
// Expected output: "Hello world!";



//6. trim() method it is used to trim the whiyespaces from the string.
const trimvar = " Heloo Guys   ";
// console.log(trimvar);
console.log(trimvar.trim());

// Return value
// A new string representing str stripped of whitespace from its beginning (left side). Whitespace is defined as white space characters plus line terminators.


//7 trimStart() method this method remove the whitepace from the beginning of the string

const greetings = '   Hello world!   ';

console.log(greetings);
// Expected output: "   Hello world!   ";

console.log(greetings.trimStart());
// Expected output: "Hello world!   ";

let st1 = "   foo  ";

console.log(st1.length); // 8

str = st1.trimStart();
console.log(str.length); // 5


console.log(str); // 'foo  '

// 8. trimEnd() method this method is used to trim the whitespaces from the end of string.
const greetingslog = '   Hello world!   ';

console.log(greetingslog);
// Expected output: "   Hello world!   ";

console.log(greetingslog.trimEnd());
// Expected output: "   Hello world!";


//9 . substring ()  substr() method 
const stringitems = 'hello';
// After swapping the (-1,0) then  no result is being shown there. beacuse the last index is not inculded it shouls -1 then
console.log(stringitems.substring(0,-1)); // no results
console.log(stringitems.substring(-1,-1)); // no results
console.log(stringitems.substring(0,4)); // hell
console.log(stringitems.substring(4,0));  //hell
console.log(stringitems.substring(4)); //o
console.log(stringitems.substring(1,4)); //ell


const text = "Mozilla";

// Takes 4 last characters of string
console.log(text.substring(text.length - 4)); // prints "illa"

// Takes 5 last characters of string
console.log(text.substring(text.length - 5)); // prints "zilla"

//substr() The difference between substring() and substr()
// There are subtle differences between the substring() and substr() methods, so you should be careful not to get them confused.

// The two parameters of substr() are start and length, while for substring(), they are start and end.
// substr()'s start index will wrap to the end of the string if it is negative, while substring() will clamp it to 0.
// Negative lengths in substr() are treated as zero, while substring() will swap the two indexes if end is less than start.

const text1 = "Mozilla";
console.log(text1.substring(2, 5)); // "zil"
console.log(text1.substr(2, 3)); // "zil"
  console.log(text1.substr(-4, 3));
  
//   10 . slice() method Differences between substring() and slice()
// The substring() and slice() methods are almost identical, but there are a couple of subtle differences between the two, especially in the way negative arguments are dealt with.

// The substring() method swaps its two arguments if indexStart is greater than indexEnd, meaning that a string is still returned. The slice() method returns an empty string if this is the case.


console.log(text.substring(5, 2)); // "zil"
console.log(text.slice(5, 2)); // ""
// If either or both of the arguments are negative or NaN, the substring() method treats them as if they were 0.

console.log(text.substring(-5, 2)); // "Mo"
console.log(text.substring(-5, -2)); // ""
// slice() also treats NaN arguments as 0, but when it is given negative values it counts backwards from the end of the string to find the indexes.

console.log(text.slice(-5, 2)); // ""
console.log(text.slice(-5, -2)); // "zil"

// 11 .The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array

const str12 = 'The quick brown fox jumps over the lazy dog.';

const words = str12.split(' ');
console.log(words[3]);
// Expected output: "fox"

const chars = str12.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = str12.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]


// split(separator)
// split(separator, limit)
// Parameters
// separator
// The pattern describing where each split should occur. Can be undefined, a string, or an object with a Symbol.split method — the typical example being a regular expression. Omitting separator or passing undefined causes split() to return an array with the calling string as a single element. All values that are not undefined or objects with a @@split method are coerced to strings.

// limit Optional
// A non-negative integer specifying a limit on the number of substrings to be included in the array. If provided, splits the string at each occurrence of the specified separator, but stops when limit entries have been placed in the array. Any leftover text is not included in the array at all.

// The array may contain fewer entries than limit if the end of the string is reached before the limit is reached.
// If limit is 0, [] is returned.
// Return value
// An Array of strings, split at each point where the separator occurs in the given string.

// 12.The startsWith() method of String values determines whether this string begins with the characters of a specified string, returning true or false as appropriate.


// startsWith(searchString)
// startsWith(searchString, position)
// Parameters
// searchString
// The characters to be searched for at the start of this string. Cannot be a regex. All values that are not regexes are coerced to strings, so omitting it or passing undefined causes startsWith() to search for the string "undefined", which is rarely what you want.

// position Optional
// The start position at which searchString is expected to be found (the index of searchString's first character). Defaults to 0.

// Return value
// true if the given characters are found at the beginning of the string, including when searchString is an empty string; otherwise, false.


const str1 = "To be, or not to be, that is the question.";

console.log(str1.startsWith("To be")); // true
console.log(str1.startsWith("not to be")); // false
console.log(str1.startsWith("not to be", 10)); // true


// 13. The repeat() method of String values constructs and returns a new string which contains the specified number of copies of this string, concatenated together.


// Return value
// A new string containing the specified number of copies of the given string.

// Exceptions
// RangeError
// Thrown if count is negative or if count overflows maximum string length.

// Examples
// Using repeat()

// "abc".repeat(-1); // RangeError
"abc".repeat(0); // ''
"abc".repeat(1); // 'abc'
"abc".repeat(2); // 'abcabc'
"abc".repeat(3.5); // 'abcabcabc' (count will be converted to integer)
// "abc".repeat(1 / 0); // RangeError

({ toString: () => "abc", repeat: String.prototype.repeat }).repeat(2);
// 'abcabc' (repeat() is a generic method)

//14.The replace() method of String values returns a new string with one, some, or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.

const paragraph22 = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph22.replace("Ruth's", 'my'));
// Expected output: "I think my dog is cuter than your dog!"

const regex22 = /Dog/i;
console.log(paragraph.replace(regex22, 'ferret'));
// Expected output: "I think Ruth's ferret is cuter than your dog!"

  // 15.// String.prototype.replaceAll()
// The replaceAll() method of String values returns a new string with all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. The original string is left unchanged.

// Try it
const paragraph23 = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph23.replaceAll('dog', 'monkey'));
// Expected output: "I think Ruth's monkey is cuter than your monkey!"

// Global flag required when calling replaceAll with regex
const regex2 = /Dog/gi;
console.log(paragraph.replaceAll(regex2, 'ferret'));
// Expected output: "I think Ruth's ferret is cuter than your ferret!"

// String.prototype.replaceAll()
// The replaceAll() method of String values returns a new string with all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. The original string is left unchanged.

// Try it
const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replaceAll('dog', 'monkey'));
// Expected output: "I think Ruth's monkey is cuter than your monkey!"

// Global flag required when calling replaceAll with regex
const regex = /Dog/gi;
console.log(paragraph.replaceAll(regex, 'ferret'));
// Expected output: "I think Ruth's ferret is cuter than your ferret!"

// 16The search() method of String values executes a search for a match between a regular expression and this string, returning the index of the first match in the string.

const paragraph2 = "I think Ruth's dog is cuter than your dog!";

// Anything not a word character, whitespace or apostrophe
// const regex = /[^\w\s']/g;

console.log(paragraph2.search(regex));
// Expected output: 41

// console.log(paragraph2[paragraph2.search(regex)]);
// Expected output: "!"
const str = "hey JudE";
const re = /[A-Z]/;
const reDot = /[.]/;
console.log(str.search(re)); // returns 4, which is the index of the first capital letter "J"
console.log(str.search(reDot)); // returns -1 cannot find '.' dot punctuation

// 17. includes() The includes() method of String values performs a case-sensitive search to determine whether a given string may be found within this string, returning true or false as appropriate.


const sentence3 = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(
  `The word "${word}" ${
    sentence3.includes(word) ? 'is' : 'is not'
  } in the sentence`,
);
// Expected output: "The word "fox" is in the sentence"


// case-sensitivity
"Blue Whale".includes("blue"); // returns false


const str3 = "To be, or not to be, that is the question.";

console.log(str3.includes("To be")); // true
console.log(str3.includes("question")); // true
console.log(str3.includes("nonexistent")); // false
console.log(str3.includes("To be", 1)); // false
console.log(str3.includes("TO BE")); // false
console.log(str3.includes("")); // true



//17.indexOf()
// String.prototype.indexOf()
// The indexOf() method of String values searches this string and returns the index of the first occurrence of the specified substring. It takes an optional starting position and returns the first occurrence of the specified substring at an index greater than or equal to the specified number.

// Try it
const paragraph4 = "I think Ruth's dog is cuter than your dog!";

const searchTerm = 'dog';
const indexOfFirst = paragraph4.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" is ${indexOfFirst}`);
// Expected output: "The index of the first "dog" is 15"

console.log(
  `The index of the second "${searchTerm}" is ${paragraph4.indexOf(
    searchTerm,
    indexOfFirst + 1,
  )}`,
);
// Expected output: "The index of the second "dog" is 38"

// indexOf(searchString)
// indexOf(searchString, position)
// searchString
// Substring to search for. All values are coerced to strings, so omitting it or passing undefined causes indexOf() to search for the string "undefined", which is rarely what you want.

// position Optional
// The method returns the index of the first occurrence of the specified substring at a position greater than or equal to position, which defaults to 0. If position is greater than the length of the calling string, the method doesn't search the calling string at all. If position is less than zero, the method behaves as it would if position were 0.

// 'hello world hello'.indexOf('o', -5) returns 4 — because it causes the method to behave as if the second argument were 0, and the first occurrence of o at a position greater or equal to 0 is at position 4.
// 'hello world hello'.indexOf('world', 12) returns -1 — because, while it's true the substring world occurs at index 6, that position is not greater than or equal to 12.
// 'hello world hello'.indexOf('o', 99) returns -1 — because 99 is greater than the length of hello world hello, which causes the method to not search the string at all.


const str5 = "To be, or not to be, that is the question.";
let count = 0;
let position = str5.indexOf("e");

while (position !== -1) {
  count++;
  position = str5.indexOf("e", position + 1);
}

console.log(count); // 4



// The index of the first occurrence of searchString found, or -1 if not found.

// Return value when using an empty search string
// Searching for an empty search string produces strange results. With no second argument, or with a second argument whose value is less than the calling string's length, the return value is the same as the value of the second argument:

"hello world".indexOf(""); // returns 0
"hello world".indexOf("", 0); // returns 0
"hello world".indexOf("", 3); // returns 3
"hello world".indexOf("", 8); // returns 8

"hello world".indexOf("", 11); // returns 11
"hello world".indexOf("", 13); // returns 11
"hello world".indexOf("", 22); // returns 11
// In the former instance, the method behaves as if it found an empty string just after the position specified in the second argument. In the latter instance, the method behaves as if it found an empty string at the end of the calling string.




// Strings are zero-indexed: The index of a string's first character is 0, and the index of a string's last character is the length of the string minus 1.

"Blue Whale".indexOf("Blue"); // returns  0
"Blue Whale".indexOf("Blute"); // returns -1
 const items ="Blue Whale".indexOf("Whale", 0); // returns  5
 console.log(items);
"Blue Whale".indexOf("Whale", 5); // returns  5
"Blue Whale".indexOf("Whale", 7); // returns -1
"Blue Whale".indexOf(""); // returns  0
"Blue Whale".indexOf("", 9); // returns  9
"Blue Whale".indexOf("", 10); // returns 10
"Blue Whale".indexOf("", 11); // returns 10
// The indexOf() method is case sensitive. For example, the following 
"Blue Whale".indexOf("blue"); // returns -1

const myString = "brie, pepper jack, cheddar";
const myCapString = "Brie, Pepper Jack, Cheddar";



console.log(myString.indexOf("cheddar")); // 19
console.log(myCapString.indexOf("cheddar")); // -1


// 18. The charAt() method of String values returns a new string consisting of the single UTF-16 code unit at the given index.

// charAt() always indexes the string as a sequence of UTF-16 code units, so it may return lone surrogates. To get the full Unicode code point at the given index, use String.prototype.codePointAt() and String.fromCodePoint().

// Try it


const anyString = "Brave new world";
console.log(`The character at index 0   is '${anyString.charAt()}'`);
// No index was provided, used 0 as default

console.log(`The character at index 0   is '${anyString.charAt(0)}'`);
console.log(`The character at index 1   is '${anyString.charAt(1)}'`);
console.log(`The character at index 2   is '${anyString.charAt(2)}'`);
console.log(`The character at index 3   is '${anyString.charAt(3)}'`);
console.log(`The character at index 4   is '${anyString.charAt(4)}'`);
console.log(`The character at index 999 is '${anyString.charAt(999)}'`);


// The character at index 0   is 'B'

// The character at index 0   is 'B'
// The character at index 1   is 'r'
// The character at index 2   is 'a'
// The character at index 3   is 'v'
// The character at index 4   is 'e'
// The character at index 999 is ''



const str8 = "𠮷𠮾";
console.log(String.fromCodePoint(str.codePointAt(0))); // "𠮷"
console.log([...str8][0]); // "𠮷"


// 19. The charCodeAt() method of String values returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.

const sentence65 = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(
  `Character code ${sentence65.charCodeAt(index)} is equal to ${sentence65.charAt(
    index,
  )}`,
);
// Expected output: "Character code 113 is equal to q"


// An integer between 0 and 65535 representing the UTF-16 code unit value of the character at the specified index. If index is out of range of 0 – str.length - 1, charCodeAt() returns NaN.


// 20.The codePointAt() method of String values returns a non-negative integer that is the Unicode code point value of the character starting at the given index. Note that the index is still based on UTF-16 code units, not Unicode code points.
const icons = '☃★♲';

console.log(icons.codePointAt(1));
// Expected output: "9733"


// 21. concat() method
// The concat() method of String values concatenates the string arguments to this string and returns a new string.

const str11 = 'Hello';
const str21 = 'World';

console.log(str11.concat(' ', str21));
// Expected output: "Hello World"

console.log(str21.concat(', ', str11));
// Expected output: "World, Hello"


// 22.The endsWith() method of String values determines whether a string ends with the characters of this string, returning true or false as appropriate.

const str10 = 'Cats are the best!';

console.log(str10.endsWith('best!'));
// Expected output: true

console.log(str10.endsWith('best', 17));
// Expected output: true

const str20 = 'Is this a question?';

console.log(str20.endsWith('question'));
// Expected output: false