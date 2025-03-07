// Get the current date
var cBody = "Earth";
var currentDate = new Date();
var selectedHeight = '250px';
document.documentElement.style.setProperty('--selected-height', selectedHeight);
var month = currentDate.toLocaleString('default', { month: 'long' });
var year = currentDate.getFullYear();
var day = currentDate.getDate();
var hours = currentDate.getHours();
if (hours > 12) hours -= 12;
var minutes = currentDate.getMinutes();
var seconds = currentDate.getSeconds();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",]
var monthNum = months.indexOf(month)
var cYear = year;
var selectedYear = year
const imageMap = {
    mercury: 'img/Mercury.png',
    venus: 'img/Venus.png',
    earth: 'img/Earth.png',
    mars: 'img/Mars.png',
    jupiter: 'img/Jupiter.png',
    saturn: 'img/Saturn.png',
    uranus: 'img/Uranus.PNG',
    neptune: 'img/Neptune.png',
    pluto: 'img/pluto.png',
    europa: 'img/Europa.jpg'
};

document.querySelectorAll('.dropdown-content button').forEach(button => {
    button.addEventListener('click', function () {
        const planetId = button.id;
        document.getElementById('planet-image').src = imageMap[planetId];
    });
});



// Format the time to always have two digits 
if (minutes < 10) minutes = '0' + minutes;
if (seconds < 10) seconds = '0' + seconds;

// Display the date on the webpage
//distances in kilometers
document.getElementById('month').innerText = month;
document.getElementById('year').innerText = year;
document.getElementById('time').innerText = time;

// Display the full date in the specific box
var fullDate = month + " " + day + "th"; // Adjust the "th" as necessary
var time = " " + hours + ":" + minutes;
var cDate = { month: month, day: day + "th", hours: hours, minutes: minutes, end: 4, year: year };
let infoSpeed = 300000; /* in kilometers */
let moonD = { period: 655.68, dEarth: 384400 }; //period in hours
let mercuryD = { period: 655.68, dEarth: 77000000 }; //period in hours
let marsD = { period: 655.68, dEarth: 120000000, day:24.65 }; //period in hours

let jupiterD = { period: 655.68, dEarth: 714000000 }; //period in hours
let saturnD = { period: 655.68, dEarth: 1300000000 }; //period in hours
let uranusD = { period: 655.68, dEarth: 2944200000 }; //period in hours
let neptuneD = { period: 655.68, dEarth: 4604500000 }; //period in hours
let venusD = { period: 655.68, dEarth: 38000000 }; //period in hours
var selectedDay = day;
var selectedYear = year;
function daysInMonth(year, month) {
    // The month parameter should be 0-based (0 for January, 11 for December)
    return new Date(year, month + 1, 0).getDate();
}
function fillDays() { //Fill the days of the calendar based off of the month and year
    while (daysContainer.firstChild) {
        daysContainer.removeChild(daysContainer.firstChild);
    }
    for (var i = 1; i <= daysInMonth(year, monthNum); i++) {
        var dayElement = document.createElement('button');
        dayElement.classList.add('day-button');
        dayElement.innerText = i;
        if (i == selectedDay) {
            dayElement.classList.add('active');

        }
        daysContainer.appendChild(dayElement);
        document.querySelectorAll('.day-button').forEach(button => {
            button.addEventListener('click', function () {
                selectedDay = button.innerText;
                updateSelectedDate();
                fillDays();
            });
        });
        updateSelectedDate();
    }
}
function updateSelectedDate() {
    document.getElementById('selectedDate').innerText = hours + ":" + minutes + " " + month + " " + selectedDay + " " + selectedYear;
}
updateSelectedDate();
if (cBody == "Earth") {

    document.querySelector('.box date').innerText = cDate.hours + ":" + cDate.minutes + " " + cDate.month + " " + cDate.day + " " + cDate.year;
}
if (cBody == "5") {
    cDate.end = 5;
    document.querySelector('.box date').innerText = cDate.month + " " + cDate.day + " " + cDate.hours + ":" + cDate.minutes + cDate.end;
}
document.querySelector('.box test').innerText = cBody;


// Time class for showing and selecting time

document.querySelector('.box .row .time .dropdown span').innerText = time;
var hoursContainer = document.getElementsByClassName('hours')[0];
var disp = hours;
for (var i = 0; i <= 11; i++) {
    var hoursElement = document.createElement('hours');
    disp += 1;

    if (disp == 13) {
        disp = 1;

    }
    hoursContainer.appendChild(hoursElement);
    hoursElement.innerText = disp;

}


// Generate the list of days for the current month
var daysContainer = document.getElementsByClassName('days')[0];




/* const buttons = document.querySelectorAll('button'); 
buttons.forEach(button => { 
    button.addEventListener('click', () => { 
        alert(`You clicked ${button.id}`); 
}); 
}); */
fillDays();
document.querySelector('.convert-Buton').addEventListener('click', function () {
    fullDate = month + " " + day + "th";
    document.querySelector('.box date').innerText = cDate.hours + ":" + cDate.minutes + " Sol " + cDate.day + " " + Math.floor(cYear);
});
document.querySelector('.next').addEventListener('click', function () {
    monthNum += 1;
    if (monthNum > 11) {
        monthNum = monthNum - 12;
        selectedYear = selectedYear + 1;
        document.getElementById('year').innerText = selectedYear;
    }
    month = months[monthNum];
    document.getElementById('month').innerText = month;

    fillDays();
});
document.querySelector('.nextYear').addEventListener('click', function () {
    selectedYear += 1;
    document.getElementById('year').innerText = selectedYear;
    fillDays();
});
document.querySelector('.prev').addEventListener('click', function () {
    monthNum -= 1;
    if (monthNum < 0) {
        monthNum = monthNum + 12;
        year = year - 1;
        document.getElementById('year').innerText = selectedYear;
    }
    month = months[monthNum];
    document.getElementById('month').innerText = month;

    fillDays();

});
document.querySelector('.prevYear').addEventListener('click', function () {
    selectedYear -= 1;
    document.getElementById('year').innerText = selectedYear;
    fillDays();
});
document.querySelectorAll('.day-button').forEach(button => {
    button.addEventListener('click', function () {
        selectedDay = button.innerText;
        cDate.day = selectedDay;
        updateSelectedDate();
        fillDays();
    });
});
document.querySelectorAll('.dropdown-content button').forEach(button => {
    button.addEventListener('click', function () {
        var link = button.id;
        document.getElementById('planet-image').src = link;
    });
});

document.querySelectorAll('.png-button').forEach(button => {
    button.addEventListener('click', function () {
        const selectedHeight = 200; // Desired final height in pixels 
        // Calcs for each celestial body
        var daysPassed = ((selectedYear - 1955)* 365) + 101 - (monthNum * 30) - selectedDay;
        if (button.id == "Mars") {
            cYear = daysPassed/687 + 1955;
            cBody = "Data to Mars has a " + marsD.dEarth / infoSpeed + " second delay";
            cDate.day = Math.floor((cYear - Math.floor(cYear)) * 669.6)
            
            cDate.end = 4; 
            
        }
        if (button.id == "Mercury") {
            cBody = "Data to Mercury has a " + mercuryD.dEarth / infoSpeed + " second delay";
            cYear = daysPassed/88 + 1955;
            cDate.day = Math.floor((cYear - Math.floor(cYear)) * 88)
            cDate.end = 1;
            
            //document.querySelector('.box date').innerText = cDate.month + " " + cDate.day + " " + cDate.hours + ":" + cDate.minutes + cDate.end;

        }
        if (button.id == "Moon") {
            cBody = "Delay = " + moonD.dEarth / infoSpeed; // delay in seconds
            
            cDate.end = 3;
            day = day - 5;
            //document.querySelector('.box date').innerText = cDate.month + " " + cDate.day + " " + cDate.hours + ":" + cDate.minutes + cDate.end;

        }
        if (button.id == "Venus") {
            cBody = "Data to Venus has a " + venusD.dEarth / infoSpeed + " second delay";
            cYear = daysPassed/225 + 1955;
            cDate.day = Math.floor((cYear - Math.floor(cYear)) * 88)
            cDate.end = 2;
            
            //document.querySelector('.box date').innerText = cDate.month + " " + cDate.day + " " + cDate.hours + ":" + cDate.minutes + cDate.end;

        }
        if (button.id == "Jupiter") {
            cBody = "Data to Jupiter has a " + jupiterD.dEarth / infoSpeed + " second delay";
            cYear = daysPassed/4333 + 1955;
            cDate.day = Math.floor((cYear - Math.floor(cYear)) * 10,539.80535279805)
            cDate.end = 5;
            
            //document.querySelector('.box date').innerText = cDate.month + " " + cDate.day + " " + cDate.hours + ":" + cDate.minutes + cDate.end;

        }
        if (button.id == "Saturn") {
            cBody = "Data to Saturn has a " + saturnD.dEarth / infoSpeed + " second delay";
            cYear = daysPassed/10756 + 1955;
            cDate.day = Math.floor((cYear - Math.floor(cYear)) * 24,592,386.85714286)
            cDate.end = 6;
            
            //document.querySelector('.box date').innerText = cDate.month + " " + cDate.day + " " + cDate.hours + ":" + cDate.minutes + cDate.end;

        }
        if (button.id == "Uranus") {
            cBody = "Data to Uranus has a " + uranusD.dEarth / infoSpeed + " second delay";
            cYear = daysPassed/30687 + 1955;
            cDate.day = Math.floor((cYear - Math.floor(cYear)) * 83,596.59375)
            cDate.end = 8;
            
            //document.querySelector('.box date').innerText = cDate.month + " " + cDate.day + " " + cDate.hours + ":" + cDate.minutes + cDate.end;

        }
        if (button.id == "Neptune") {
            cBody = "Data to Neptune has a " + neptuneD.dEarth / infoSpeed + " second delay";
            cYear = daysPassed/60190 + 1955;
            cDate.day = Math.floor((cYear - Math.floor(cYear)) * 71,860.88992974239)
            cDate.end = 7;
            
            //document.querySelector('.box date').innerText = cDate.month + " " + cDate.day + " " + cDate.hours + ":" + cDate.minutes + cDate.end;

        }
        console.log(cBody);  // This will log the ID of the clicked button

        document.querySelector('.box test').innerText = cBody;
        let currentHeight = parseInt(button.style.height) || 100;
        // reset other buttons
        document.querySelectorAll('.png-button').forEach(otherButton => {
            if (otherButton !== button) {
                otherButton.style.height = '100px';
            }
        });
        function animate() {
            if (currentHeight < selectedHeight) {
                currentHeight += 1; button.style.height = currentHeight + 'px';
                requestAnimationFrame(animate);
            }
        }
        animate();
    });
});
setInterval(updateDateTime, 1000);
// Debugging statements 
console.log("Current Date: " + currentDate);
console.log("Month: " + month);
console.log("Year: " + year);
console.log("Day: " + day);
console.log("Full Date: " + fullDate);
console.log("Days in Month: " + daysInMonth);
