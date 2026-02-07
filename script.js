const no = document.getElementById("no");
const yes = document.getElementById("yes");
const card = document.querySelector(".card");

// Move NO when cursor is anywhere near it (full button)
document.addEventListener("mousemove", (e) => {
    const rect = no.getBoundingClientRect();
    
    // Check if mouse is near the entire button (padding included)
    if (
        e.clientX > rect.left - 20 &&
        e.clientX < rect.right + 20 &&
        e.clientY > rect.top - 20 &&
        e.clientY < rect.bottom + 20
    ) {
        const cardRect = card.getBoundingClientRect();
        const maxX = cardRect.width - rect.width;
        const maxY = cardRect.height - rect.height;

        // Random position inside card
        const moveX = Math.random() * maxX;
        const moveY = Math.random() * maxY;

        no.style.position = "absolute";
        no.style.left = moveX + "px";
        no.style.top = moveY + "px";
    }
});

// Confetti on YES
yes.addEventListener("click", () => {
    const end = Date.now() + 5000;

    (function frame() {
        confetti({
            particleCount: 6,
            spread: 360,
            startVelocity: 0,
            ticks: 300,
            origin: { x: Math.random(), y: 0 }
        });
        if (Date.now() < end) requestAnimationFrame(frame);
    })();
});
