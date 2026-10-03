const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Canvas dimensions (example)
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw player robot (replace with actual AI logic)
    const playerX = canvas.width / 2 - 50; // Adjust size as needed
    const playerY = canvas.height - 70;     // Adjust size as needed

    ctx.fillStyle = 'red';
    ctx.fillRect(playerX, playerY, 50, 50); // Size of the player robot

    requestAnimationFrame(draw);
}

draw();
