//PART 1 : FIZZ BUZZ

// Accomplish the following:
// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.

let num = 1;

for (let i = 1; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        console.log(`Fizz Buzz`);
        continue;
    }

    else if (i % 5 == 0) {
        console.log(`Buzz`);
        continue;
    }

    else if (i % 3 == 0) {
        console.log(`Fizz`);
        continue;
    }

    else {
        console.log(i);
        continue;
    }
}