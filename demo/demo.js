/*
    npm run beefy demo/demo-no-options.js"
 */
var maximizeCanvas = require("../.");
var canvas = document.createElement('canvas');
var canvasBinding = maximizeCanvas(
    canvas,
    {
        dimensions: {
            width: {min: 712, max: 1024}, // canvas.width will be adjusted between 712 and 1024
            height: 640 // canvas.height is fixed to 640 pixels
        },
        onCanvasResized: function(width, height) {
            // Draw canvas content on each resize for a demo
            var context = canvas.getContext("2d");

            // Clear canvas and put coordinates into it's center
            context.clearRect(0, 0, width, height);
            context.transform(1, 0, 0, 1, width / 2, height / 2);

            // Simulate fixed resolution 1024x640 game background (which can be clipped on the sides if needed,
            // but it does not make sense to extend canvas beyond it)
            context.fillStyle = "red";
            context.fillRect(-512, -320, 1024, 640);

            // Simulate fixed resolution 712x640 main game area (which must always be visible)
            context.fillStyle = "blue";
            context.fillRect(-356, -320, 712, 640);
        }
    }
);

// If you need to stop canvas from resizing - just detach it
// canvasBinding.detach();
