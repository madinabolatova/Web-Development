// TASK1
let i = 3;
while (i) {
  alert( i-- );
} // 3->2, 2->1, 1->0

// TASK2
let i = 0;
while (++i < 5) alert( i ); // from 1 to 4

let i = 0;
while (i++ < 5) alert( i ); // from 1 to 5

// TASK3
for (let i = 0; i < 5; i++) alert( i ); // from 0 to 4

for (let i = 0; i < 5; ++i) alert( i ); // from 0 to 4

// TASK4
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        alert( i );
    }
}

// TASK5
let i = 0;
while (i < 3) {
    alert( `number ${i}!` );
    i++;
}

// TASK6
let num;

do {
    num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

// TASK7
let n = 10;
nextPrime:
for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
    }
    alert( i );
}