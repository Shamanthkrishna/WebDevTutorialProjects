// Select the input element with the id "password"
const passwordBox = document.getElementById("password");

// Set the desired length of the password
const length = 12;

// Define the character sets for uppercase, lowercase, numbers, and symbols
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_=+~|][}{></-";

// Combine all character sets into a single string
const allChars = upperCase + lowerCase + numbers + symbols;

// Function to create a password
function createPassword() {
    // Initialize an empty password string
    let password = "";
    
    // Ensure the password contains at least one character from each character set
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    // Fill the remaining characters of the password with random characters from all character sets
    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Set the generated password as the value of the password input box
    passwordBox.value = password;
}

// Function to copy the password to the clipboard
function copyPassword() {
    // Select the password text in the input box
    passwordBox.select();
    
    // Copy the selected text to the clipboard
    document.execCommand("copy");
}
