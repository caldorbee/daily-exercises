// Q1
// Use Map to increment all numbers in the array (arr) by 1
let arr = [1, 2, 3, 4, 5, 6];

console.assert(JSON.stringify(newArr) == JSON.stringify([2, 3, 4, 5, 6, 7]));

// Q2
// Use Filter to find all even numbers in an array
let arr2 = [1, 2, 3, 4, 5, 6];

console.assert(JSON.stringify(evenNums) == JSON.stringify([2, 4, 6]));

// Q3
// Use Filter to find strings that are longer than 3 letter in the array (animals)
let animals = ["cow", "rabbit", "dog", "cat"];
let longerThanThree;

console.assert(JSON.stringify(longerThanThree) == JSON.stringify(["rabbit"]));

// Q4
// Use Filter to remove "cherry" from the  array (fruits)
let fruits = [
  { name: "orange", color: "orange" },
  { name: "cherry", color: "red" },
  { name: "grape", color: "purple" },
  { name: "watermelon", color: "green" },
];

console.assert(
  JSON.stringify(filtered) ==
    JSON.stringify([
      { name: "orange", color: "orange" },
      { name: "grape", color: "purple" },
      { name: "watermelon", color: "green" },
    ])
);
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
