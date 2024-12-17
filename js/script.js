// Event Listeners for Buttons
document.getElementById("yesButton").addEventListener("click", () => {
    const responseDiv = document.getElementById("response");
    responseDiv.innerHTML = "Yay! Let’s make this Christmas unforgettable! 🎅🎄💖";
    launchSnowflakes();
});

document.getElementById("noButton").addEventListener("click", () => {
    const responseDiv = document.getElementById("response");
    const errorDiv = document.getElementById("response");
    errorDiv.innerHTML = "U ARE NOT ALLOWED TO SAY NO! 😱🎄";
    errorDiv.classList.add("error-message");
});

// Launch Snowflakes Animation
function launchSnowflakes() {
    const body = document.body;
    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement("div");
        snowflake.className = "snowflake";
        snowflake.innerHTML = "❄"; // You can also use an image for snowflakes
        snowflake.style.left = Math.random() * 100 + "vw"; // Random left position
        snowflake.style.animationDuration = Math.random() * 2 + 3 + "s"; // Random animation speed
        body.appendChild(snowflake);

        // Remove snowflakes after animation ends
        setTimeout(() => {
            snowflake.remove();
        }, 10000);
    }
}
