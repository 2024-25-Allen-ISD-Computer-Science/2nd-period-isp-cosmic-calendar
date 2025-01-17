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
// Getting date indexes
var month = currentDate.toLocaleString('default', { month: 'long' });
var year = currentDate.getFullYear();
var day = currentDate.getDate();

// Display the date on the webpage
document.getElementById('month').innerText = month; 
document.getElementById('year').innerText = year;

// Display the full date in the specific box
var fullDate = month + " " + day + "th"; // Adjust the "th" as necessary
document.querySelector('.box date').innerText = fullDate + " 6:30 P.M."; // Update this line as necessary

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
// Debugging statements 
console.log("Current Date: " + currentDate); 
console.log("Month: " + month); 
console.log("Year: " + year); 
console.log("Day: " + day); 
console.log("Full Date: " + fullDate); 
console.log("Days in Month: " + daysInMonth);
        