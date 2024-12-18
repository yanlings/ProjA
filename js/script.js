function shrinkNo() {
    const noButton = document.getElementById("no-button");
    const yesButton = document.getElementById("yes-button");
  
    // Shrink "No" Button
    noButton.style.transform = "scale(0.5)";
    noButton.style.opacity = "0.7";
  
    // Grow "Yes" Button
    yesButton.style.transform = "scale(1.2)";
    yesButton.style.opacity = "1";
  }
  
  function showFestive() {
    // Generate Snowflakes
    const snowflakeContainer = document.getElementById("snowflakes");
    for (let i = 0; i < 50; i++) {
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";
      snowflake.innerHTML = "❄️";
      snowflake.style.left = Math.random() * 100 + "vw";
      snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
      snowflake.style.fontSize = Math.random() * 10 + 10 + "px";
      snowflakeContainer.appendChild(snowflake);
    }
  
    // Add Hats
    const hats = document.createElement("div");
    hats.className = "snowflake";
    hats.innerHTML = "🎅";
    hats.style.fontSize = "40px";
    hats.style.left = "50%";
    hats.style.animationDuration = "5s";
    snowflakeContainer.appendChild(hats);
  }
  