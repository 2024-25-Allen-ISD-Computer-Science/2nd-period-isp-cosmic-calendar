// Get the current date
var cBody = "Earth";
var currentDate = new Date();
var selectedHeight = '250px';
document.documentElement.style.setProperty('--selected-height', selectedHeight);
//var celestialBody = Earth;
// Setting Variable
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
var cDate = {month:month, day:day + "th", hours:hours, minutes:minutes, end:4, year:year};
let infoSpeed = 300000; /* in kilometers */
let moonD = {period: 655.68, dEarth:384400}; //period in hours
let mercuryD = {period: 655.68, dEarth:384400}; //period in hours
let marsD = {period: 655.68, dEarth:120000000}; //period in hours
let jupiterD = {period: 655.68, dEarth:384400}; //period in hours
let saturnD = {period: 655.68, dEarth:384400}; //period in hours
let uranusD = {period: 655.68, dEarth:384400}; //period in hours
let neptuneD = {period: 655.68, dEarth:384400}; //period in hours
let venusD = {period: 655.68, dEarth:384400}; //period in hours

if (cBody ==  "Earth") {
    
    document.querySelector('.box date').innerText = cDate.hours + ":" + cDate.minutes + " " + cDate.month + " " + cDate.day + " " + cDate.year;
} 
if (cBody ==  "5") {
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
var daysInMonth = new Date(year, currentDate.getMonth() + 1, 0).getDate(); // Get the number of days in the current month

for (var i = 1; i <= daysInMonth; i++) {
    var dayElement = document.createElement('button'); 
    dayElement.innerText = i; 
    if (i == day) { 
        dayElement.classList.add('active'); 

    } 
    daysContainer.appendChild(dayElement); 
} 

/* const buttons = document.querySelectorAll('button'); 
buttons.forEach(button => { 
    button.addEventListener('click', () => { 
        alert(`You clicked ${button.id}`); 
}); 
}); */
document.querySelector('.convert-Buton').addEventListener('click', function() {
    fullDate = month + " " + day + "th";
    document.querySelector('.box date').innerText = cDate.hours + ":" + cDate.minutes +  " Sol " + 52 + " " + cYear;
});
document.querySelector('.next-Buton').addEventListener('click', function() {
    month = months[monthNum + 1];
    document.getElementById('month').innerText = month;
    
});


document.querySelectorAll('.png-button').forEach(button => { 
    button.addEventListener('click', function() { 
        const selectedHeight = 200; // Desired final height in pixels 
        // Calcs for each celestial body
        if (button.id == "Mars") {
            cBody = "Data to Mars has a "+ marsD.dEarth/infoSpeed + " second delay" ;
            cDate.end = 4;
            cDate.month = (monthNum + 1) * 2;
            //document.querySelector('.box date').innerText = cDate.month + " " + cDate.day + " " + cDate.hours + ":" + cDate.minutes + cDate.end;
            
        }
        if (button.id == "Venus") {
            cBody = "Venus";
            cDate.end = 2;
            day = day - 5;
            //document.querySelector('.box date').innerText = cDate.month + " " + cDate.day + " " + cDate.hours + ":" + cDate.minutes + cDate.end;
            
        }
        if (button.id == "Mercury") {
            cBody = "Mercury";
            cDate.end = 1;
            cYear = year + 200;
            day = day - 5;
            //document.querySelector('.box date').innerText = cDate.month + " " + cDate.day + " " + cDate.hours + ":" + cDate.minutes + cDate.end;
            
        }
        if (button.id == "Moon") {
            cBody = "Delay = " + moonD.dEarth/infoSpeed; // delay in seconds
            cDate.end = 3;
            day = day - 5;
            //document.querySelector('.box date').innerText = cDate.month + " " + cDate.day + " " + cDate.hours + ":" + cDate.minutes + cDate.end;
            
        }
        if (button.id == "Venus") {
            cBody = "Venus";
            cDate.end = 2;
            day = day - 5;
            //document.querySelector('.box date').innerText = cDate.month + " " + cDate.day + " " + cDate.hours + ":" + cDate.minutes + cDate.end;
            
        }
        if (button.id == "Jupiter") {
            cBody = "Jupiter";
            cDate.end = 5;
            day = day - 5;
            //document.querySelector('.box date').innerText = cDate.month + " " + cDate.day + " " + cDate.hours + ":" + cDate.minutes + cDate.end;
            
        }
        if (button.id == "Saturn") {
            cBody = "Saturn";
            cDate.end = 6;
            day = day - 5;
            //document.querySelector('.box date').innerText = cDate.month + " " + cDate.day + " " + cDate.hours + ":" + cDate.minutes + cDate.end;
            
        }
        if (button.id == "Uranus") {
            cBody = "Uranus";
            cDate.end = 8;
            day = day - 5;
            //document.querySelector('.box date').innerText = cDate.month + " " + cDate.day + " " + cDate.hours + ":" + cDate.minutes + cDate.end;
            
        }
        if (button.id == "Neptune") {
            cBody = "Neptune";
            cDate.end = 7;
            day = day - 5;
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
        