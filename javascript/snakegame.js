const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 400;

const boxSize = 20;
let score = 0;
let isGameOver = false;

let snake = [{ x: 200, y: 200 }];
let direction = "RIGHT";
let food = {
    x: Math.floor((Math.random() * canvas.width) / boxSize) * boxSize,
    y: Math.floor((Math.random() * canvas.height) / boxSize) * boxSize,
};

function drawSnake() {
    snake.forEach((segment, index) => {
        ctx.fillStyle = index === 0 ? "#00ff00" : "#4CAF50";
        ctx.shadowBlur = 15;
        ctx.shadowColor = "#4CAF50";
        ctx.fillRect(segment.x, segment.y, boxSize, boxSize);
    });
}

function drawFood() {
    ctx.fillStyle = "#FF5722";
    ctx.shadowBlur = 20;
    ctx.shadowColor = "#FF5722";
    ctx.fillRect(food.x, food.y, boxSize, boxSize);
}

// Move the snake
function moveSnake() {
    const head = { ...snake[0] };

    if (direction === "LEFT") head.x -= boxSize;
    if (direction === "RIGHT") head.x += boxSize;
    if (direction === "UP") head.y -= boxSize;
    if (direction === "DOWN") head.y += boxSize;

    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        score++;
        document.getElementById("score").innerText = score;
        food = {
            x: Math.floor((Math.random() * canvas.width) / boxSize) * boxSize,
            y: Math.floor((Math.random() * canvas.height) / boxSize) * boxSize,
        };
    } else {
        snake.pop();
    }
}

// Check for collisions
function checkCollision() {
    const head = snake[0];

    if (
        head.x < 0 ||
        head.x >= canvas.width ||
        head.y < 0 ||
        head.y >= canvas.height
    ) {
        return true;
    }

    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            return true;
        }
    }

    return false;
}

function updateGame() {
    if (isGameOver) return;

    if (checkCollision()) {
        isGameOver = true;
        document.getElementById("playAgain").style.display = "block";
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawFood();
    drawSnake();
    moveSnake();
}

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
    if (event.key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
    if (event.key === "ArrowUp" && direction !== "DOWN") direction = "UP";
    if (event.key === "ArrowDown" && direction !== "UP") direction = "DOWN";
});

function restartGame() {
    snake = [{ x: 200, y: 200 }];
    direction = "RIGHT";
    score = 0;
    document.getElementById("score").innerText = score;
    food = {
        x: Math.floor((Math.random() * canvas.width) / boxSize) * boxSize,
        y: Math.floor((Math.random() * canvas.height) / boxSize) * boxSize,
    };
    isGameOver = false;
    document.getElementById("playAgain").style.display = "none";
}

setInterval(updateGame, 100);
