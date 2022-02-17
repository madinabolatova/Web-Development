// TASK 1
let d1 = new Date(2012, 1, 20, 3, 12);
alert( d1 );

let d2 = new Date("February 20, 2012 03:12:00");
alert( d2 );

// TASK 2
function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    return days[date.getDay()];
}  
let date = new Date(2014, 0, 3); // 3 Jan 2014
alert( getWeekDay(date) ); // FR

// TASK 3
function getLocalDay(date) {
    let day = date.getDay();
    if (day == 0) {
        day = 7;
    }
    return day;
}

// TASK 4
function getDateAgo(date, days) {
    let dateCopy = new Date(date);
    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
}
let date = new Date(2015, 0, 2);
alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) );

// TASK 5
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}  
alert( getLastDayOfMonth(2012, 0) ); // 31
alert( getLastDayOfMonth(2012, 1) ); // 29
alert( getLastDayOfMonth(2013, 1) ); // 28

// TASK 6
function getSecondsToday() {
    let d = new Date();
    return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}  
alert( getSecondsToday() );

// TASK 7
function getSecondsToTomorrow() {
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
    let totalSecondsInADay = 86400;
    return totalSecondsInADay - totalSecondsToday;
}

// TASK 8
function formatDate(date) {
    let diff = new Date() - date;
    if (diff < 1000) {
        return 'right now';
    }
    let sec = Math.floor(diff / 1000);
    if (sec < 60) {
        return sec + ' sec. ago';
    }
    let min = Math.floor(diff / 60000);
    if (min < 60) {
        return min + ' min. ago';
    }
    let d = date;
    d = [
        '0' + d.getDate(),
        '0' + (d.getMonth() + 1),
        '' + d.getFullYear(),
        '0' + d.getHours(),
        '0' + d.getMinutes()
    ].map(component => component.slice(-2));
    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}  
alert( formatDate(new Date(new Date - 1)) ); // "right now"
alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"
alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"
alert( formatDate(new Date(new Date - 86400 * 1000)) );