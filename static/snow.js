const snowContainer = document.createElement("div");
snowContainer.style.position = "fixed";
snowContainer.style.top = 0;
snowContainer.style.left = 0;
snowContainer.style.width = "100%";
snowContainer.style.height = "100%";
snowContainer.style.pointerEvents = "none";
document.body.appendChild(snowContainer);

function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.innerHTML = "❄";
    snowflake.style.position = "absolute";
    snowflake.style.color = "white";
    snowflake.style.fontSize = Math.random() * 20 + 10 + "px";
    snowflake.style.left = Math.random() * 100 + "vw";
    snowflake.style.animation = "fall 5s linear";
    snowContainer.appendChild(snowflake);

    setTimeout(() => snowflake.remove(), 5000);
}

setInterval(createSnowflake, 100);

document.head.insertAdjacentHTML(
    "beforeend",
    `<style>
    @keyframes fall {
        to { transform: translateY(100vh); }
    }
    </style>`
);
