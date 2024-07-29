// Get references to DOM elements
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const clearAllBtn = document.getElementById("clear-all-btn");

// Function to add a task to the list
function addTask() {
    if (inputBox.value === '') {
        alert("You must type something"); // Alert if the input is empty
    } else {
        let li = document.createElement("li"); // Create a new list item
        li.innerHTML = inputBox.value; // Set the text of the list item to the input value
        listContainer.appendChild(li); // Append the list item to the container

        let span = document.createElement("span"); // Create a span element for the delete button
        span.innerHTML = "\u00d7"; // Set the text of the span to '×' (multiplication sign)
        li.appendChild(span); // Append the span to the list item
    }
    inputBox.value = ""; // Clear the input box
    saveData(); // Save the current state to local storage
}

// Event listener for marking tasks as completed or deleting them
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); // Toggle the checked class for the list item
        saveData(); // Save the current state to local storage
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); // Remove the list item if the delete button is clicked
        saveData(); // Save the current state to local storage
    }
}, false);

// Event listener for adding a task when the Enter key is pressed
inputBox.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        addTask(); // Call addTask function if Enter key is pressed
    }
});

// Event listener for clearing all tasks
clearAllBtn.addEventListener("click", function() {
    console.log("Clear All button clicked");
    listContainer.innerHTML = ""; // Clear all tasks in the container
    saveData(); // Save the current state to local storage
    console.log("List container cleared and data saved");
});

// Function to save the current state of the list to local storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Function to load the saved tasks from local storage when the page loads
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

// Call showTask to display any saved tasks when the script loads
showTask();
