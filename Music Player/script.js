// Get the progress slider, audio element, and control icon elements from the DOM
let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

// Set the max value of the progress slider to the duration of the song once metadata is loaded
song.onloadedmetadata = function() {
    progress.max = song.duration; // Set the max value of the progress bar to the total duration of the song
    progress.value = song.currentTime; // Set the current value of the progress bar to the current time of the song
}

// Function to toggle between play and pause states
function playPause(){
    if (ctrlIcon.classList.contains("fa-pause")) { // Check if the song is currently playing
        song.pause(); // Pause the song
        ctrlIcon.classList.remove("fa-pause"); // Remove the pause icon
        ctrlIcon.classList.add("fa-play"); // Add the play icon
    } else {
        song.play(); // Play the song
        ctrlIcon.classList.add("fa-pause"); // Add the pause icon
        ctrlIcon.classList.remove("fa-play"); // Remove the play icon
    }
}

// Update the progress slider as the song plays
if (song.play()) { // Check if the song is playing
    setInterval(()=>{
        progress.value = song.currentTime; // Update the progress bar value with the current time of the song
    },500); // Update every 500 milliseconds
}

// Seek the song to the selected time when the progress bar changes
progress.onchange = function() {
    song.play(); // Play the song (useful if paused and user seeks)
    song.currentTime = progress.value; // Set the song's current time to the value of the progress bar
    ctrlIcon.classList.add("fa-pause"); // Update the control icon to indicate pause
    ctrlIcon.classList.remove("fa-play"); // Remove the play icon
}
