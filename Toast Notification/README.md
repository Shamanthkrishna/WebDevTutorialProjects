# Toast Notification System

## Overview

This project implements a toast notification system using HTML, CSS, and JavaScript. It provides visual feedback for different types of messages (success, error, invalid) through animated toast messages that appear in the bottom-right corner of the screen.

## Files

- `index.html`: The main HTML file that sets up the structure of the page and includes the JavaScript for functionality.
- `style.css`: The CSS file that styles the toast notifications and buttons.
- `script.js`: The JavaScript file that manages the display and behavior of toast notifications.

## Features

- **Toast Notifications**: Display messages with different types of feedback.
  - Success
  - Error
  - Invalid

- **Animations**: Toast messages slide in from the right and have a progress bar at the bottom that gradually disappears.

## How to Use

1. **Include FontAwesome**: The project uses FontAwesome for icons. Ensure you have the link in your HTML file:
   ```html
   <script src="https://kit.fontawesome.com/a33c36b6ec.js" crossorigin="anonymous"></script>
   ```

2. **Add Toast Messages**: Use the `showToast` function to display different types of messages. For example:
   ```javascript
   showToast(successMsg); // For success messages
   showToast(errorMsg);   // For error messages
   showToast(invalidMsg); // For invalid messages
   ```

3. **Style Customization**: Modify the `style.css` file to change the appearance and animation of the toast notifications as needed.

## Example

Here's a simple example of how to trigger a toast notification:

```html
<button onclick="showToast(successMsg)">Success</button>
<button onclick="showToast(errorMsg)">Errors</button>
<button onclick="showToast(invalidMsg)">Invalid</button>
```

```javascript
let successMsg = '<i class="fa-solid fa-circle-check"></i>Successfully Submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i>Please Fix the Error';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i>Invalid Input, Check Again';

function showToast(msg) {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);
    
    if (msg.includes('error')) {
        toast.classList.add('error');
    }
    if (msg.includes('Invalid')) {
        toast.classList.add('invalid');
    }

    setTimeout(() => {
        toast.remove();
    }, 6000);
}
```
