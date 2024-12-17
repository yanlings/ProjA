// Event Listeners for Buttons
document.getElementById("yesButton").addEventListener("click", () => {
    const responseDiv = document.getElementById("response");
    responseDiv.innerHTML = "Yay! Let’s make this Christmas unforgettable! 🎅🎄💖";
    launchSnowflakes();  // Trigger Snowflakes
});

document.getElementById("noButton").addEventListener("click", () => {
    const responseDiv = document.getElementById("response");
    responseDiv.innerHTML = "Oh no! You can't say no to Christmas! 😱🎄";
    responseDiv.style.color = "#e74c3c"; // Change color to red for fun!
});

// Launch Snowflakes Animation
function launchSnowflakes() {
    const body = document.body;
    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement("div");
        snowflake.className = "snowflake";
        snowflake.innerHTML = "❄"; // Snowflake emoji
        snowflake.style.left = Math.random() * 100 + "vw"; // Random position
        snowflake.style.animationDuration = Math.random() * 2 + 3 + "s"; // Random speed
        body.appendChild(snowflake);

        // Remove snowflakes after animation ends
        setTimeout(() => {
            snowflake.remove();
        }, 5000);
    }
}
