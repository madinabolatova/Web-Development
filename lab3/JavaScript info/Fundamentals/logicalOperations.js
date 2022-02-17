// Task1
alert( null || 2 || undefined ); // 2

// TASK2
alert( alert(1) || 2 || alert(3) ); // first 1, then 2

// TASK3
alert( 1 && null && 2 ); // null

// TASK4
alert( alert(1) && alert(2) ); // 1, then undefined

// TASK5
alert( null || 2 && 3 || 4 ); // 3

// TASK6
//if (age >= 14 && age <= 90)

//TASK7
//if (!(age >= 14 && age <= 90))
//if (age < 14 || age > 90)

//TASK8
if (-1 || 0) alert( 'first' ); // runs, true

if (-1 && 0) alert( 'second' ); // doesn't run, false

if (null || -1 && 1) alert( 'third' ); // runs, true

// TASK9
let userName = prompt("Who's there?", '');
if (userName === 'Admin') {
    let pass = prompt('Password?', '');
    if (pass === 'TheMaster') {
        alert( 'Welcome!' );
    } else if (pass === '' || pass === null) {
        alert( 'Canceled' );
    } else {
        alert( 'Wrong password' );
    }
} else if (userName === '' || userName === null) {
    alert( 'Canceled' );
} else {
    alert( "I don't know you" );
}