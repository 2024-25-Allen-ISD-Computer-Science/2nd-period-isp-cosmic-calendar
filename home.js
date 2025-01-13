// Get the current date
var currentDate = new Date();
var month = currentDate.toLocaleString('default', { month: 'long' });
var year = currentDate.getFullYear();

// Format the date as desired


// Display the date on the webpage
document.getElementById('month').innerText = month; 
document.getElementById('year').innerText = year;
