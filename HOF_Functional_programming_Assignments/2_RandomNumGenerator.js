// 2. Random Number Generator with Delay and Progress Indication:
// The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a
// variable so can be modified. The program displays a message every second indicating the time remaining
// until the random number is generated and then outputs the generated number.

let delay = 3000; // delay time in milliseconds
console.log(`Generating random number after ${delay/1000} seconds`)

let timeLeft = delay / 1000;
let countDown = setInterval(() => {
    timeLeft--;
    console.log(`${timeLeft} seconds remaining...`);
    if (timeLeft <= 0) {
        clearInterval(countDown);
        let randomNum = Math.floor(Math.random() * 100); // generate a random number
        console.log(`Random number generated: ${randomNum}`);
    }
}, 1000)