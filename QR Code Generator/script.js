// Select the DOM elements for the image box, QR code image, and text input field
let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

// Function to generate a QR code
function generateQR() {
    // Check if the input text is not empty
    if (qrText.value.length > 0) {
        // Set the source of the QR code image using the input text
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value);
        // Show the image box by adding the 'show-img' class
        imgBox.classList.add("show-img");
    } else {
        // Add error and border-red classes to the text input field to indicate an error
        qrText.classList.add("error", "border-red");
        // Remove the error and border-red classes after 300 milliseconds
        setTimeout(() => {
            qrText.classList.remove("error", "border-red");
        }, 300);
    }
}

// Add an event listener to the text input field for keydown events
qrText.addEventListener("keydown", function(event) {
    // Check if the pressed key is the Enter key
    if (event.key === "Enter") {
        // Prevent the default action of the Enter key (e.g., form submission or adding a newline)
        event.preventDefault();
        // Call the generateQR function to generate the QR code
        generateQR();
    }
});
