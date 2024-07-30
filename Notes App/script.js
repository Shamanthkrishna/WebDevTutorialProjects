// Select the container that will hold the notes and the button for creating new notes
const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

// Select all elements with the class "input-box"
let notes = document.querySelectorAll("input-box");

// Function to display notes stored in localStorage
function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}

// Call the function to show notes when the page loads
showNotes();

// Function to update the localStorage with the current notes
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// Event listener for the create button to add a new note
createBtn.addEventListener("click", () => {
    // Create a new paragraph element for the note and an image element for the delete button
    let inputBox = document.createElement("p");
    let img = document.createElement("img");

    // Set the class name and make the paragraph editable
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");

    // Set the source of the delete image
    img.src = "images/delete.png";

    // Append the new note and delete button to the notes container
    notesContainer.appendChild(inputBox).appendChild(img);
});

// Event listener for clicks inside the notes container
notesContainer.addEventListener("click", function (e) {
    // Check if the clicked element is an image (delete button)
    if (e.target.tagName === "IMG") {
        // Remove the parent element (the note) of the clicked delete button
        e.target.parentElement.remove();
        // Update localStorage after removing the note
        updateStorage();
    }
    // Check if the clicked element is a paragraph (note)
    else if (e.target.tagName === "P") {
        // Update the notes NodeList to include all current notes
        notes = document.querySelectorAll(".input-box");

        // Add an event listener for keyup events on each note
        notes.forEach(nt => {
            nt.onkeyup = function () {
                // Update localStorage whenever the content of a note changes
                updateStorage();
            };
        });
    }
});

// Event listener for keydown events on the whole document
document.addEventListener("keydown", event => {
    // Check if the pressed key is "Enter"
    if (event.key === "Enter") {
        // Insert a line break instead of the default behavior
        document.execCommand("insertLinebreak");
        // Prevent the default action (submitting the form or other)
        event.preventDefault();
    }
});
