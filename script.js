const no = document.getElementById("no");
const yes = document.getElementById("yes");

// Move NO when cursor gets close
document.addEventListener("mousemove", (e) => {
    const rect = no.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    const distance = Math.sqrt(dx*dx + dy*dy);

    if (distance < 80) { // mouse too close
        const moveX = Math.random() * 200 - 100; // random horizontal shift
        const moveY = Math.random() * 50 - 25;   // random vertical shift
        no.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
});

// Confetti rain on YES
yes.addEventListener("click", () => {
    const end = Date.now() + 5000; // 5 seconds

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
