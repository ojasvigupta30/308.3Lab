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







//PART 3 - FELLING LOOPY

// Your task is to write a script that accomplishes the following:
// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.
// You do not need to format the data, the following works well.
// console.log(cell1, cell2, cell3, cell4);
// You can make the following assumptions:
// There will only be 4 cells per row.
// There will be no escaped characters other than “\n”.
// Use the example string provided above to test your program. Once you are confident it is working correctly, try the following string to see if your program works properly with other data.
// Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232


let csvStr = `Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232`;

let cell = ``, cell1 = ``, cell2 = ``, cell3 = ``, cell4 = ``, char, id, i; //declare cells as empty string, char for each charater of the string

id = 0; //declare id as a counter for cells in a row


for (i = 0; i <= csvStr.length; i++) { //run the for loop over the length of the str


    char = csvStr[i]; //declare char as the iterating characters of the string
    cell += char; //concat each charater in the cell with the previous one

    if (char === `,`) { 
        if (id === 0) { //1st run - id would be 0 for cell1
            cell1 = cell;
        }
        else if (id === 1) { //2nd run - id would be 1 for cell2
            cell2 = cell;
        }
        else if (id === 2) { //3rd run - id would be 2 for cell3
            cell3 = cell;
        }
        id++; //iterate id after cells are stored to move to next cell
        cell = ``; //empty the cell after every pass
    }

    else if (char === `\n`) { 
        cell4 = cell; //last cell of the row - cell4
        console.log(cell1, cell2, cell3, cell4); //print row
        cell = cell1 = cell2 = cell3 = cell4 = ``; //empty the cells for next row
        id = 0; //restart the id
    }


    if (i===csvStr.length-1) { //Had to -1 from length as considering the csvStr.length[i] = undefined
        cell4 = cell;
        console.log(cell1, cell2, cell3, cell4);


    }



}




