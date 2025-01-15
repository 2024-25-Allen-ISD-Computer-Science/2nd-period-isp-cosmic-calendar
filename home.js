// Get the current date
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
