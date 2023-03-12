// 1. Reverse String.
// The problem is to create a program that uses the setTimeout() function to reverse a given string after a delay
// of 2 seconds. The program should use a variable “input” storing a string as input and then implement a delay of
// 2 seconds before reversing the string. The reversed string should then be printed as output.

let input = "hello world"; // the input string

console.log(`Input: ${input}`)

setTimeout(() => {
    let reversed = input.split("").reverse().join("");
    console.log(`Reversed string: ${reversed}`)
}, 2000) // delay of 2 seconds

// We split the input string into an array of characters using the split() method, reverse the array using the reverse() method, and then join the array back into a string using the join() method. This is a common way to reverse a string in JavaScript.