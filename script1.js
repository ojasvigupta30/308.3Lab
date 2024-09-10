//PART 1 : FIZZ BUZZ

// Accomplish the following:
// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.

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






//PART 2 - PRIME TIME

// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.
// Continuing with the example above, if n is equal to 4, your loop should log 5. Similarly, if n is 5, it should log 7, and if n is 9, it should log 11. Test your loop with higher numbers and reference an online prime number table to determine the accuracy of your code.
// Be careful! If you set n to a number too large, your loop could take a long time to process.

// Declare an arbitrary number, n
let n = 6;
let b = 0;

// Loop to find the next prime number starting from n
while (true) {
    n++; // Increment n
    let isPrime = true;

    // Check if n is prime
    for (let i = 1; i <= n; i++) {
        let a = n % i;
        if (a === 0) {
            b++;
        }
        else {
            continue;
        }

    }

    if (b > 2) {
        isPrime = false;
        break;
    }



    if (isPrime) {
        console.log(n); // Log the prime number and exit the loop
        break;
    }
}