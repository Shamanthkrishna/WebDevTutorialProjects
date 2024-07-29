# Password Generator

This is a simple JavaScript-based password generator that creates a secure, random password containing uppercase letters, lowercase letters, numbers, and symbols.

## Features

- Generates a 12-character password by default.
- Ensures the password includes at least one uppercase letter, one lowercase letter, one number, and one symbol.
- Allows the generated password to be copied to the clipboard with a button click.

## Usage

1. **Include the Script**

   Add the script to your HTML file:

   ```html
   <script src="path/to/password-generator.js"></script>
   ```

2. **HTML Structure**

   Ensure your HTML contains an input box for the password and buttons to generate and copy the password:

   ```html
   <input type="text" id="password" readonly>
   <button onclick="createPassword()">Generate Password</button>
   <button onclick="copyPassword()">Copy Password</button>
   ```

3. **Generate Password**

   Click the "Generate Password" button to create a new random password. The password will be displayed in the input box.

4. **Copy Password**

   Click the "Copy Password" button to copy the generated password to the clipboard.

## Code Explanation

- **createPassword**: Generates a random password ensuring it includes characters from all defined sets (uppercase, lowercase, numbers, symbols).
- **copyPassword**: Copies the generated password to the clipboard.
