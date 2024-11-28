// Array of Zara Larsson songs (no randomization)
const songs = [
    "Lush Life 🎶💃",
    "Never Forget You 💖🎤",
    "Ain't My Fault 😈🔥",
    "Symphony (with Clean Bandit) 🎻🎶",
    "Ruin My Life 💔🎧",
    "So Good 😍🎶",
    "None Of These Guys 💁‍♀️💅",
    "You Love Who You Love ❤️🎶",
    "Love Me Land 💖🌍",
    "WOW 🌟🔥",
    "Words (with Alesso) 🗣️🎧",
    "Poster Girl 👸🎵",
    "Sankta Lucia 🌟🎄",
    "I Would Like 💃🎶",
    "All the Time ⏰💃",
    "Memory Lane 🛤️💭",
    "Need Someone 💔👫",
    "FFF 🦄🔥",
    "What Happens Here 💬🎵",
    "TG4M 🎧🎶",
    "On My Love ❤️🎶",
    "Weak Heart 💔🎶",
    "End of Time ⏳🎤",
    "Can't Tame Her 🔥👑"
];
// Get today's date and check if it's December
const today = new Date();
const currentMonth = today.getMonth(); // December is month 11 (0-indexed)
const currentDay = today.getDate();   // Current day of the month

// Ensure the current date is within December (1st to 24th)
if (currentMonth !== 11 || currentDay < 1 || currentDay > 24) {
    alert("The calendar is only available from December 1st to 24th.");
}

// Restrict interaction based on date
function initializeCalendar() {
    for (let i = 1; i <= 24; i++) {
        const dayBox = document.getElementById(`day-${i}`);

        // Make day 1 always clickable
        if (i === 1 || (currentMonth === 11 && i <= currentDay)) {
            dayBox.classList.add("active");
            dayBox.onclick = () => revealSong(i); // Allow revealing songs
        } else {
            dayBox.classList.add("inactive"); // Future days are inactive
            dayBox.onclick = null; // Prevent clicking on future days
        }
    }
}

// Reveal the song for the day
function revealSong(day) {
    const songDisplay = document.getElementById("song-display");
    const song = songs[day - 1];
    songDisplay.textContent = `Day ${day}: ${song}`;

    // Mark the day as revealed
    const dayBox = document.getElementById(`day-${day}`);
    dayBox.classList.add("played");
    dayBox.style.pointerEvents = "none"; // Disable further clicks
    dayBox.style.backgroundColor = "#4CAF50"; // Change color for revealed
}

// Add snowflakes to the background
function createSnowflakes() {
    const snowflakeContainer = document.body;
    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement("div");
        snowflake.className = "snowflake";
        snowflake.textContent = "❄";
        snowflake.style.left = Math.random() * 100 + "vw"; // Random horizontal position
        snowflake.style.animationDelay = Math.random() * 10 + "s"; // Random delay
        snowflake.style.opacity = Math.random(); // Random opacity
        snowflakeContainer.appendChild(snowflake);
    }
}

createSnowflakes();

// Initialize the calendar
initializeCalendar();
