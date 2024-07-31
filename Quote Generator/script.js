// Array of categories for the quote API
var categories = ['happiness', 'life', 'knowledge', 'success', 'love']; 

// Randomly select a category from the array
var randomIndex = Math.floor(Math.random() * categories.length);
var category = categories[randomIndex];

// Get references to the HTML elements where the quote and author will be displayed
const quote = document.getElementById("quote");
const author = document.getElementById("author");

// Construct the API URL with the randomly selected category
var api_url = 'https://api.api-ninjas.com/v1/quotes?category=' + category;

// Async function to fetch and display a quote
async function getQuote(url) {
    try {
        // Fetch the quote data from the API
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-Api-Key': 'Your_API_Key_Goes_Here', // Replace with your actual API key
                'Content-Type': 'application/json'
            }
        });

        // Check if the response is OK (status in the range 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON data from the response
        const data = await response.json();
        console.log(data); // Log the data for debugging

        // Display the quote and author in the corresponding HTML elements
        quote.innerHTML = data[0].quote;
        author.innerHTML = data[0].author;
    } catch (error) {
        // Handle any errors that occur during the fetch operation
        console.error('Error:', error);
    }
}

// Function to open a Twitter share window with the quote and author
function tweet() {
    // Construct the tweet URL with the quote and author
    window.open(
        "https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote.innerHTML + " --- by " + author.innerHTML), 
        "Tweet Window", 
        "width=600, height=300"
    );
}

// Call the getQuote function to fetch and display a quote
getQuote(api_url);
