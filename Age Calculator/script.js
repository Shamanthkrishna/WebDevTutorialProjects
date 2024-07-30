// Get the input element for selecting the date and set the maximum selectable date to today
let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];

// Get the element where the result will be displayed
let result = document.getElementById("result");

// Function to calculate the age based on the selected date
function calculateAge() {
    // Get the selected date as a Date object
    let birthDate = new Date(userInput.value);

    // Extract day, month, and year from the birth date
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1; // Months are 0-indexed, so add 1
    let y1 = birthDate.getFullYear();

    // Get the current date as a Date object
    let today = new Date();

    // Extract day, month, and year from the current date
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    // Initialize variables for the calculated age
    let d3, m3, y3;

    // Calculate the difference in years
    y3 = y2 - y1;

    // Calculate the difference in months
    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--; // If the current month is less than the birth month, subtract one year
        m3 = 12 + m2 - m1; // Add 12 to the current month and subtract the birth month
    }

    // Calculate the difference in days
    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--; // If the current day is less than the birth day, subtract one month
        d3 = getDaysInMonth(y1, m1) + d2 - d1; // Add the number of days in the birth month and subtract the birth day
    }

    // If months go negative, adjust the year and set months to 11 (the maximum value before adjusting the year)
    if (m3 < 0) {
        m3 = 11;
        y3--;
    }

    // Display the calculated age in the result element
    result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months, and <span>${d3}</span> days old.`;

    // Function to get the number of days in a given month and year
    function getDaysInMonth(year, month) {
        return new Date(year, month, 0).getDate(); // The 0th day of the next month gives the last day of the current month
    }
}
