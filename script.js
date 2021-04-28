// CONSTANTS
        const CANVAS_BORDER_COLOR = 'black';
        const CANVAS_BACKGROUND_COLOR = 'white';
        const SNAKE_COLOR = 'lightGreen';
        const SNAKE_BORDER_COLOR = 'darkGreen';
        let snake = [
            { x: 150, y: 150 },
            { x: 140, y: 150 },
            { x: 130, y: 150 },
            { x: 120, y: 150 },
            { x: 110, y: 150 }
        ]
        // Horizontal velocity
        let dx = 10;
        // Vertical velocity
        let dy = 0;
        // Get the canvas element
        var gameCanvas = document.getElementById("gameCanvas");
        // Return a two dimensional drawing context
        var ctx = gameCanvas.getContext("2d");
        // Select a color to fill the canvas
        ctx.fillStyle = CANVAS_BACKGROUND_COLOR;
        // Select a color for the border of the canvas
        ctx.strokeStyle = CANVAS_BORDER_COLOR;
        // Draw a "filled" rectangle to cover the entire canvas
        ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
        // Draw a "border" around the entire canvas
        ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);
        // Move one step to the right
        advanceSnake()
        // Change vertical velocity to 0
        dx = 0;
        // Change horizontal velocity to 10
        dy = -10;
        // Move one step up
        advanceSnake();
        // Draw snake on the canvas
        drawSnake();
        // Advances the snake by changing the x - coordinates of its parts
        // according to the horizontal velocity and the y - coordinates of its parts
        // according to the vertical velocity
        function advanceSnake() {
            const head = { x: snake[0].x + dx, y: snake[0].y + dy };
            snake.unshift(head);
            snake.pop();
        }
        // Draw the snake on the canvas
        function drawSnake() {
            // Loop through the snake parts drawing each part on the canvas
            snake.forEach(drawSnakePart);
        }
        // Draws a part of the snake on the canvas
        // @param { object } snakePart - The coordinates where the part should be drawn
        function drawSnakePart(snakePart) {
            // Set the color of the snake part
            ctx.fillStyle = SNAKE_COLOR;
            // Set the border color of the snake part
            ctx.strokeStyle = SNAKE_BORDER_COLOR;
            // Draw a "filled" rectangle to represent the snake part of the coordinates the part is located
            ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
            // Draw a border around the snake part
            ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
        }
        // Change direction of the snake
        function changeDirection(event) {

            const LEFT_KEY = 37;
            const RIGHT_KEY = 39;
            const UP_KEY = 38;
            const DOWN_KEY = 40;

            const keyPressed = event.keyCode;
            const goingUp = dy === -10;
            const goingDown = dy === 10;
            const goingRight = dx === 10;
            const goingLeft = dx === -10;
            if (keyPressed === LEFT_KEY && !goingRight) {
                dx = -10;
                dy = 0;
            } if (keyPressed === UP_KEY && !goingDown) {
                dx = 0;
                dy = -10;
            } if (keyPressed === RIGHT_KEY && !goingLeft) {
                dx = 10;
                dy = 0;
            } if (keyPressed === DOWN_KEY && !goingDown) {
                dx = 0;
                dy = 10;
            }
        }