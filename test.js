//1.Question
var str1="   devara"
var str2="part1    "
var concat=str1.concat(" ",str2)
var trimstr=concat.trim();
var resultstr=trimstr.toUpperCase();
console.log(resultstr);

// 2.Question
var a="hi immm fine";
var middlestr=a.slice(3,7)
var charindexLast=middlestr.lastIndexOf("m");
var lowerCasestr=middlestr.toLowerCase()
console.log(charindexLast);
console.log(lowerCasestr);

// 3. Question
let singleChar = 'a';
let str = "learningJavaScript";

// Step 2: Concatenate the string to the single character
let combinedString = singleChar.concat(str);

// Step 3: Convert the concatenated string to uppercase
let upperCaseString = combinedString.toUpperCase();

// Step 4: Extract the second last character of the uppercase string
let secondLastChar = upperCaseString.charAt(upperCaseString.length - 2);

// Output results
console.log("single character:",singleChar);
console.log("string:",str);
console.log("single char and string:",combinedString);
console.log("Concatenated String in Uppercase:", upperCaseString); 
console.log("Second Last Character:", secondLastChar); 

// 4.Question
// Step 1: Define two strings
let stra = "JavaScript";
let strb = "Programming";

// Step 2: Extract the first 3 characters of the first string
let firstThreeChars = stra.slice(0, 3); // "Jav"

// Step 3: Extract the last 3 characters of the second string
let lastThreeChars = strb.slice(-3); // "ing"

// Step 4: Concatenate the two results
let combinedStrings = firstThreeChars.concat(lastThreeChars); // "Javing"

// Step 5: Convert the combined string to uppercase
let results = combinedStrings.toUpperCase(); // "JAVING"

// Output the final result
console.log("first 3 characters of 1st string:",stra);
console.log("last 3 characters of 2st string:",strb);
console.log("combined both extracted string:",combinedStrings)
console.log("Final Result:", results);  // Output: "JAVING"

// 5. Question
// Given string with extra spaces
let originalString = "   hello world   ";

// Step 1: Trim the string
let trimmedString = originalString.trim(); 

// Step 2: Make the first and last characters uppercase
let firstChar = trimmedString.charAt(0).toUpperCase();
let lastChar = trimmedString.charAt(trimmedString.length - 1).toUpperCase();
// Use concat to create the modified string
let middleString = trimmedString.slice(1, -1); // "ello worl"
let modifiedString = firstChar.concat(middleString, lastChar); 

// Step 3: Extract a specific part of the string 
let extractedPart = modifiedString.substring(0, 5); 

// Step 4: Concatenate it with another string
let anotherString = " - This is my world.";
let finalResult = extractedPart.concat(anotherString); 

// Output the final result
console.log("original string:",originalString);
console.log("trimmed string:",trimmedString);
console.log("capital first char:",firstChar);
console.log("capital last char:",lastChar);
console.log("Modified string",modifiedString)
console.log("Final Result:", finalResult); // Output: "Hello - This is a test."

// 6.Question
// Given sentence
let sentence = "hello there, how are you";

// Find the index of the word "are"
let indexOfAre = sentence.indexOf("are");

// Output the result
console.log("sentence:",sentence);
console.log("Index of 'are':", indexOfAre); 

// Multiple Method Questions
// Question-7
const smartphone = {
    brand: "Oneplus",
    model: "noredce5g",
    price: 25000
  };
  Object.seal(smartphone);
  smartphone.price = 30099;
  const isSealed = Object.isSealed(smartphone);
  console.log(smartphone);
  console.log(isSealed);
  
  // Question-8
  const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publishedYear: 1960
  };
  Object.freeze(book);
  book.publishedYear = 1961;
  const isFrozen = Object.isFrozen(book);
  console.log(book);
  console.log(isFrozen);
  
  // Question-9
  const person = {
    firstName: "vandana",
    lastName: "Battula",
    age: 22
  };
  const keys = Object.keys(person);
  console.log("Keys:", keys);
  const values = Object.values(person);
  console.log("Values:", values);
  
  // Question-10
  const course = {
    title: "Introduction to JavaScript",
    instructor: "Jane Smith",
    duration: "4 weeks"
  };
  const entries = Object.entries(course);
  console.log("Key-Value Pairs:", entries);
  delete course.duration;
  console.log("Updated Course Object:", course);
  
  // Question-11
  const employee = {
    name: "Alice Johnson",
    position: "Software Developer",
    salary: 80000
  };
  Object.seal(employee);
  employee.position = "Senior Software Developer";
  employee.department = "Engineering";
  const key = Object.keys(employee);
  console.log("Properties after sealing:", key);
  console.log("Updated Employee Object:", employee);
  
  // Question -12
  function extractMiddleToUppercase(str) {
    const len = str.length;
    if (len === 0) {
      return "String is empty!";
    }
    const middleIndex = Math.floor(len / 2);
    if (len % 2 === 0) {
      const middlePart = str.slice(middleIndex - 1, middleIndex + 1);
      return middlePart.toUpperCase();
    } else {
      const middlePart = str.charAt(middleIndex);
      return middlePart.toUpperCase();
    }
  }
  console.log(extractMiddleToUppercase("Goodmorning"));
  console.log(extractMiddleToUppercase("Goodafternoon"));
  console.log(extractMiddleToUppercase("Goodevening"));
  
  // // Question-13
  var a = "vandana";
  var b = a.toUpperCase(a);
  console.log(b);
  var c = b.length;
  console.log(c);
  
  // Question-14
  var a = "Battula"
  var b = a.charCodeAt(4);
  console.log(b);
  
  // Question-15
  var a = "   vandana   Reddy   Battula     ";
  console.log(a.trim());
  var b = ["chandana", "meghana", "prasanna", "aha", "srujana"]
  var c = b.slice(1, 3);
  
  // Question-16
  var a = "Hai  ";
  var b = "Hello How Are You";
  var c = a.concat(b);
  console.log(c);
  console.log(b.toLocaleLowerCase())
  
  // Question-17
  var a = "   hello world";
  var b = a.trimStart();
  var c = b.slice(8);
  console.log(c);
  
  // Question-18
  var a = "vandana";
  var index = 4;
  var c = a.charAt(index).toUpperCase;
  console.log(c);
  
  // Question-19
  var a = 10;
  var b = 20;
  var c = 30;
  
  var result = a * b + c;
  
  var isGreaterthan100 = result > 100;
  var isLessthan100 = result < 100;
  var isEqualto100 = result === 100;
  
  console.log("Result:", result);
  console.log("is Greater than 100?", isGreaterthan100);
  console.log("is less than 100?", isLessthan100);
  console.log("Is equal to 100?", isEqualto100);
  
  // Question-20
  var a = 10;
  var b = 20;
  var result = (a > 5) && (b < 15)
  console.log(result);
  
  // Question-21
  var a = 25;
  var b = 35;
  
  var message = (a > b)
    ? "a is larger than b"
    : (a < b)
      ? "b is larger than a"
      : "Both numbers are equal";
  
  console.log(message);
  
  // Question-22
  var a = 15;
  var b = 10;
  
  var subtractionResult = a - b;
  console.log("Subtraction Result:", subtractionResult);
  
  var divisionResult = a / b;
  console.log("Division Result:", divisionResult);
  
  console.log("Is Subtraction Result Even?", [subtractionResult].map(num => num % 2 === 0).toString());
  console.log("Is Division Result Even?", [divisionResult].map(num => num % 2 === 0).toString());
  
  // Question-23
  var age = 18;
  
  var isEqual = (age == 18);
  console.log("Is age equal to 18 using == ?", isEqual);
  
  var isStrictEqual = (age === 18);
  console.log("Is age strictly equal to 18 using === ?", isStrictEqual);
  
  var isGreaterOrEqual = (age >= 18);
  console.log("Is age greater than or equal to 18?", isGreaterOrEqual);












