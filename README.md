# Age calculator app - Frontend Mentor

![Design preview for the Age calculator app coding challenge](./design/desktop-preview.jpg)

## Welcome! 👋

Thanks for checking out my solution for this challenge!

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

### Overview

## The challenge

Your challenge is to build out this age calculator app and get it looking as close to the design as possible.

Your users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The date is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

## Links

Live Site URL: [https://juliawalton.github.io/age-calculator-app/](https://juliawalton.github.io/age-calculator-app/)

### My process

## Built with

- Semantic HTML5 markup
- CSS3
- Flexbox
- CSS Grid
- JavaScript

## What I learned

This project was great to practice with the Date constructor in JS and practice date validation.

```js
// get our current date
// NOTE: +1 is added to our month variable bcs the month argument begins counting at 0
const currentDate = new Date();
let currentDay = currentDate.getDate();
let currentMonth = currentDate.getMonth() + 1;
let currentYear = currentDate.getFullYear();

// create array for amount of days in every month
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
daysInMonth[0];
```

```js
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
```

## Author

- Website - [Julia's Portfolio](https://juliawalton.github.io/portfolio/)
- LinkedIn - [Julia Walton](https://www.linkedin.com/in/juliawalton/)
