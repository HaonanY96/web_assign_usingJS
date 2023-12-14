/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

document.addEventListener("DOMContentLoaded", function() {

let costPerDay = 35;
let dayCounter = 0;
let duration = "full";
let totalCost = document.getElementById("calculated-cost");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function daySelect(event) {
    if (!event.target.classList.contains("clicked")) {
        event.target.classList.add("clicked");
        dayCounter++;
        recalculate(costPerDay, dayCounter);
    }
    event.target.style.backgroundColor = "#E5AF42";
}

let days = ["monday", "tuesday", "wednesday", "thursday", "friday"];
days.forEach(function(dayId) {
    let dayElement = document.getElementById(dayId);
    dayElement.addEventListener("click", daySelect);
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

let clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", clearDays);

function clearDays() {
    dayCounter = 0;
    fullRate();
    recalculate(costPerDay, dayCounter);
    let days = ["monday", "tuesday", "wednesday", "thursday", "friday"];
    days.forEach(function(dayId) {
        let dayElement = document.getElementById(dayId);
        dayElement.style.backgroundColor = "";
        dayElement.classList.remove('clicked'); 
    });
}


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

let halfButton = document.getElementById("half");
let fullButton = document.getElementById("full");

halfButton.addEventListener("click", halfRate);
fullButton.addEventListener("click", fullRate);

function halfRate() {
    duration = "half";
    costPerDay = 20;
    recalculate(costPerDay, dayCounter);
    fullButton.style.backgroundColor = "";
    fullButton.classList.remove('clicked'); 
    halfButton.style.backgroundColor = "#E5AF42";
}

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function fullRate() {
    duration = "full";
    costPerDay = 35;
    recalculate(costPerDay, dayCounter);
    halfButton.style.backgroundColor = "";
    halfButton.classList.remove('clicked'); 
    fullButton.style.backgroundColor = "#E5AF42";
}

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function recalculate(cost, counter) {
    totalCost.innerHTML = cost * counter;
}
});