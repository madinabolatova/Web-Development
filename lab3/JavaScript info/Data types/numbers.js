// TASK 1
let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");
alert( a + b );

// TASK 2
alert( 1.35.toFixed(1) ); // 1.4
alert( 6.35.toFixed(1) ); // 6.3

// TASK 3
function readNumber() {
    let num;
    do {
        num = prompt("Enter a number please?", 0);
    } while ( !isFinite(num) );
    if (num === null || num === '') return null;
    return +num;
}  
alert(`Read: ${readNumber()}`);

// TASK 4
let i = 0;
while (i < 11) {
    i += 0.2;
    if (i > 9.8 && i < 10.2) alert( i );
}

// TASK 5
function random(min, max) {
    return min + Math.random() * (max - min);
}  
alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );

// TASK 6
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}  
alert( randomInteger(1, 3) );