# Notes App

## Overview
This is a simple web-based note-taking application that allows users to create, edit, and delete notes. The notes are stored in the browser's `localStorage`, enabling them to persist even after the page is reloaded.

## Features
- **Create Notes:** Click the "Create" button to add a new note.
- **Edit Notes:** Click on a note to edit its content.
- **Delete Notes:** Click the delete icon next to a note to remove it.
- **Persistent Storage:** Notes are saved in the browser's `localStorage`.

## Usage
1. **Add a Note:** Click the "Create" button to add a new note. A new editable note will appear in the notes container.
2. **Edit a Note:** Click on an existing note to edit its content. Changes are saved automatically.
3. **Delete a Note:** Click the trash can icon next to a note to delete it.

## Technical Details
- **HTML5:** The app uses `contenteditable` elements for easy inline editing.
- **JavaScript:** Handles the creation, editing, and deletion of notes, as well as interaction with `localStorage` for data persistence.

## Future Enhancements
- Adding categories or tags for better organization.
- Implementing a search feature to quickly find notes.
- Syncing notes across devices using a backend server.
