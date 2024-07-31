# Quote of the Day

This web application displays a random quote from various categories and allows users to tweet the quote. It features a clean and centered design with interactive buttons to fetch new quotes and share them on Twitter.

## Features

- Fetch and display a random quote from a selected category.
- Display the quote and author dynamically.
- Button to fetch a new quote.
- Button to tweet the current quote and author.

## Technologies Used

- **HTML**: Structure and layout.
- **CSS**: Styling and design.
- **JavaScript**: Fetching quotes and interacting with the DOM.
- **API**: [API-Ninjas Quotes API](https://api.api-ninjas.com/v1/quotes) for retrieving quotes.

## Setup

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Open the Project**:
   Open `index.html` in a web browser.

3. **API Key**:
   Replace `'YOUR_API_KEY'` in `script.js` with your actual API key from [API-Ninjas](https://api-ninjas.com/).

## Files

- **`index.html`**: Main HTML file for the structure.
- **`style.css`**: Styles for the quote box and buttons.
- **`script.js`**: JavaScript for fetching quotes and handling user interactions.

## Usage

1. **View a Quote**:
   The page loads with a random quote from the predefined categories.

2. **Get a New Quote**:
   Click the "New Quote" button to fetch and display a new random quote.

3. **Tweet the Quote**:
   Click the "Tweet" button to open a new Twitter window with the quote and author.
