/*// Get the current date
var currentDate = new Date();
// Getting date indexes
var month = currentDate.toLocaleString('default', { month: 'long' });
var year = currentDate.getFullYear();
var day = currentDate.getDate();

// Format the date as desired


// Display the date on the webpage
document.getElementById('month').innerText = month; 
document.getElementById('year').innerText = year;
// highlight the day
var days = document.getElementsByClassName('days')[0].getElementsByTagName('li');
for (var i = 0; i < days.length; i++) {
    if (days[i].innerText == day) {
        days[i].classList.add('active');
    
    }
}
*/
// Get the current date
var currentDate = new Date();
var selectedHeight = '250px';
document.documentElement.style.setProperty('--selected-height', selectedHeight);
//var celestialBody = Earth;
// Setting Variable
var month = currentDate.toLocaleString('default', { month: 'long' });
var year = currentDate.getFullYear();
var day = currentDate.getDate();
var hours = currentDate.getHours(); 
if (hours >= 12) hours -= 12;
var minutes = currentDate.getMinutes(); 
var seconds = currentDate.getSeconds();

// Format the time to always have two digits 
if (minutes < 10) minutes = '0' + minutes; 
if (seconds < 10) seconds = '0' + seconds;

// Display the date on the webpage
document.getElementById('month').innerText = month; 
document.getElementById('year').innerText = year;
document.getElementById('time').innerText = time;

// Display the full date in the specific box
var fullDate = month + " " + day + "th"; // Adjust the "th" as necessary
var time = " " + hours + ":" + minutes;
document.querySelector('.box date').innerText = fullDate + time; // Update this line as necessary

// Generate the list of days for the current month
var daysContainer = document.getElementsByClassName('days')[0];
var daysInMonth = new Date(year, currentDate.getMonth() + 1, 0).getDate(); // Get the number of days in the current month

for (var i = 1; i <= daysInMonth; i++) {
    var dayElement = document.createElement('li'); 
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
document.querySelectorAll('.png-button').forEach(button => { 
    button.addEventListener('click', function() { 
        const selectedHeight = 200; // Desired final height in pixels 
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
        