const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Canvas dimensions (example)
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Player AI Robot
    const playerX = canvas.width / 2 - 50; // Adjust size as needed
    const playerY = canvas.height - 70;     // Adjust size as needed

    ctx.fillStyle = 'red';
    ctx.fillRect(playerX, playerY, 50, 50); // Size of the player robot

    // Randomized enemies (you can add more types later)
    const randomEnemyPosition = Math.random() * canvas.width;
    const enemySize = 30; // Adjust size as needed
    const enemyColor = 'blue'; // Add more colors if needed
    ctx.fillStyle = enemyColor;
    ctx.fillRect(randomEnemyPosition, canvas.height - 100, enemySize, enemySize);

    requestAnimationFrame(draw);
}

draw();
