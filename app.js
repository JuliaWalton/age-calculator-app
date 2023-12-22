// select our form 
// const form = document.getElementById('form');
const btn = document.querySelector('button');

// select our inputs 
const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');

// select our outputs
const dayResult = document.getElementById('day-result');
const monthResult = document.getElementById('month-result');
const yearResult = document.getElementById('year-result');

// get our current date
// NOTE: +1 is added to our month variable bcs the month argument begins counting at 0
const currentDate = new Date();
let currentDay = currentDate.getDate();
let currentMonth = currentDate.getMonth() + 1;
let currentYear = currentDate.getFullYear();

console.log(currentDay);

// create array for amount of days in every month
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
daysInMonth[0];
// add listener for submit event
btn.addEventListener('click', (e) => {
    e.preventDefault();
    handleSubmit();
});

function validate() {
    const inputs = document.querySelectorAll('input');
    let validation = true;
    inputs.forEach((input)=> {
        const parent = input.parentElement;
        // input.style.borderColor = 'black';
        // parent.querySelector('small').innerText = "";
        if (!input.value) {
            input.style.borderColor = 'red';
            parent.querySelector('small').innerText = "This field is required";
            validation = false;
        } else if (monthInput.value > 12) {
            monthInput.style.borderColor = 'red';
            monthInput.parentElement.querySelector('small').innerText = 'Must be a valid month';
            validation=false;
        } else if (dayInput.value > 31) {
            dayInput.style.borderColor = 'red';
            dayInput.parentElement.querySelector('small').innerText = 'Must be a valid day';
            validation=false;
        }    else if (yearInput.value > currentYear) {
            yearInput.style.borderColor = 'red';
            yearInput.parentElement.querySelector('small').innerText = 'Must be a valid year';
            validation=false;
        } else {
            input.style.borderColor = 'black';
            parent.querySelector('small').innerText = "";
            validation = true;
        }
    })
    return validation;
    
}

function handleSubmit() {
    if (validate()) {
        if (dayInput.value > currentDay) {
            currentDay = currentDay + daysInMonth[currentMonth - 1];
            currentMonth--;
        }
        if (monthInput.value > currentMonth) {
            currentMonth = currentMonth + 12;
            currentYear--;
        }
        const day = currentDay - dayInput.value;
        const month = currentMonth - monthInput.value;
        const year = currentYear - yearInput.value;

        dayResult.innerHTML = day;
        monthResult.innerHTML = month;
        yearResult.innerHTML = year;
    }
}


