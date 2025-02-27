import React, { useRef, useEffect } from 'react';

import spriteSheet from '../../public/img/Sprite_Sheet_1.png';

export default function Sprite() {
    let canvasRef = useRef(null);

    useEffect(() => {
        let canvas: any = canvasRef.current; // Get Canvas Element
        let ctx = canvas.getContext("2d"); // 2D Context

        let img = new Image();
        img.src = spriteSheet;

        const scale = 0.4; // Scales Image Down x0.4

        const width = 320;
        const height = 320;

        let canvasX = canvas.width / 2 - 30; // Starts sprite at center of canvas
        let canvasY = canvas.height - (height*scale); // Bottom of canvas

        const scaledWidth = scale * width / 2;
        const scaledHeight = scale * height;

        let cycleLoop = [0, 1, 0, 2]; // Initialize Animation Cycle

        let currentLoopIndex = 0; // X-Index for Sprite Sheet
        let currentAnimation = 0; // Y-Index for Sprite Sheet
        let walkSpeed = 1; // Movement Speed

        let animate = false;
        let iteration = 0;


        // Function to Help Draw Frames
        function drawFrame(frameX: number, frameY: number, canvasX: number, canvasY: number) {
            ctx.drawImage(
                img,

                frameX * width,
                frameY * height,
                width,
                height,

                canvasX,
                canvasY,
                scaledWidth,
                scaledHeight
            );
        }


        // currentAnimation: 0
        // Walk in Right Direction Animation
        function walkLeft(s: number, d: number) {
            cycleLoop = [0, 1, 0, 2]; // Specific Loop Cycle
            currentAnimation = 0;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawFrame(cycleLoop[currentLoopIndex], currentAnimation, canvasX, canvasY);

            currentLoopIndex++;
            if (currentLoopIndex >= cycleLoop.length) {
                currentLoopIndex = 0;
            }

            if (canvasX < 20 || canvasX < (s - d)) { // If Sprite Touches Far Left
                currentLoopIndex = 0;
                animate = false;
                init();
                return;
            }
            canvasX -= walkSpeed; // Moves sprite to the left, subtracting 1 each frame
            setTimeout(walkLeft, 100);
        }


        // currentAnimation: 1
        // Walk in Right Direction Animation
        function walkRight(s: number, d: number) {
            cycleLoop = [0, 1, 0, 2]; // Specific Loop Cycle
            currentAnimation = 1;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawFrame(cycleLoop[currentLoopIndex], currentAnimation, canvasX, canvasY);

            currentLoopIndex++;
            if (currentLoopIndex >= cycleLoop.length) {
                currentLoopIndex = 0;
            }

            let currentLocation = canvasX + width * scale * 0.5; // Grabs current location of sprite
            if (currentLocation > canvas.width || currentLocation > (s + d)) { // If sprite touches destination, stop animation
                currentLoopIndex = 0;
                animate = false;
                init();
                return;
            }
            canvasX += walkSpeed; // Moves sprite to the right, adding 1 each frame
            setTimeout(walkRight, 100);
        }


        // Animation: 3
        // Sleep Animation
        function sleep() {
            cycleLoop = [0, 1, 2, 1]; // Specific Loop Cycle
            currentAnimation = 3;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawFrame(cycleLoop[currentLoopIndex], currentAnimation, canvasX, canvasY);

            currentLoopIndex++;
            if (currentLoopIndex >= cycleLoop.length) {
                currentLoopIndex = 0;
            }
            iteration++;
            if (iteration > 17) { // Full animation length
                currentLoopIndex = 0;
                iteration = 0;
                animate = false;
                init();
                return;
            }
            setTimeout(sleep, 400);
        }


        // Animation: 4
        // Heart Love Animation
        function love() {
            cycleLoop = [0, 1, 2, 1]; // Specific Loop Cycle
            currentAnimation = 4;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawFrame(cycleLoop[currentLoopIndex], currentAnimation, canvasX, canvasY);

            currentLoopIndex++;
            if (currentLoopIndex >= cycleLoop.length) {
                currentLoopIndex = 0;
            }
            iteration++;
            if (iteration > 10) {
                currentLoopIndex = 0;
                iteration = 0;
                animate = false;
                setTimeout(init, 1400);
                return;
            }
            setTimeout(love, 300);
        }


        // Animation: 5
        // Waving Animation lasting 1800ms
        function wave() {
            cycleLoop = [2, 1, 0, 1]; // Specific Loop Cycle
            currentAnimation = 5;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawFrame(cycleLoop[currentLoopIndex], currentAnimation, canvasX, canvasY);

            currentLoopIndex++;
            if (currentLoopIndex >= cycleLoop.length) {
                currentLoopIndex = 0;
            }
            iteration++;
            if (iteration > 21) {
                currentLoopIndex = 0;
                iteration = 0;
                animate = false;
                init();
                return;
            }
            setTimeout(wave, 150);
        }


        // Animation: 2
        // Stand Still Idle Animation
        function idle() {
            currentAnimation = 2;
            animate = true;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawFrame(0, currentAnimation, canvasX, canvasY);

            let roll = randomInt(0, 2); // Chance for "blink" animation to occur
            if (roll == 1) {
                setTimeout(blink, 800);
            }
            setTimeout(init, 1600);
            return;
        }

        function blink() {
            currentAnimation = [2, 3]; // Specific Loop Cycle

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawFrame(0, currentAnimation[currentLoopIndex], canvasX, canvasY);

            currentLoopIndex++;
            if (currentLoopIndex >= currentAnimation.length) {
                currentLoopIndex = 0;
            }
            iteration++;
            if (iteration >= 5) {
                currentLoopIndex = 0;
                iteration = 0;
                return;
            }
            setTimeout(blink, 100);
        }


        // Special function to get random number
        function randomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }


        // Initialization Function
        // This is the MAIN function that calls all other animation
        // functions, and which one to choose
        function init() {
            if (animate == false) {
                idle();
            } else {
                let roll_1 = randomInt(1, 4); // Main chance roll
                let roll_2 = randomInt(1, 2); // Secondary chance roll
                if (roll_1 == 1) {
                    if (roll_2 == 1) {
                        sleep();
                    } else {
                        animate = false;
                        setTimeout(init, 200);
                    }
                } else if (roll_1 == 2) {
                    love();
                } else if (roll_1 == 3) {
                    wave();
                } else if (roll_1 == 4) {
                    if (roll_2 == 1) {
                        let startingLocation = canvasX; // Grabs current location of sprite
                        let destination = randomInt(30, canvas.width / 5);
                        walkLeft(startingLocation, destination);
                    } else {
                        let startingLocation = canvasX + width * scale * 0.5; // Grabs current location of sprite (right edge)
                        let destination = randomInt(30, canvas.width / 5);
                        walkRight(startingLocation, destination);
                    }
                }
            }
        }

        wave();
    }, []);

    return (
        <canvas ref={canvasRef} className="about__canvas"></canvas>
    );
}