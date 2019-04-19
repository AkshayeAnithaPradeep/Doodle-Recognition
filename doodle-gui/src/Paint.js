import React, { Component } from 'react';
import './App.css';

class Paint extends Component {

    componentDidMount() {
        // set canvas id to variable
        let canvas= document.getElementById("draw");
        let ctx = canvas.getContext("2d");

        // get canvas 2D context and set it to the correct size
        resize();

        // resize canvas when window is resized
        window.addEventListener("resize", resize);
        document.addEventListener("mousemove", draw);
        document.addEventListener("mousedown", setPosition);
        document.addEventListener("mouseenter", setPosition);

        // Set up touch events for mobile, etc
        canvas.addEventListener("touchstart", function (e) {
            let mousePos = getTouchPos(canvas, e);
            let touch = e.touches[0];
            let mouseEvent = new MouseEvent("mousedown", {
                clientX: touch.clientX,
                clientY: touch.clientY
            });
            canvas.dispatchEvent(mouseEvent);
        }, false);
        canvas.addEventListener("touchend", function (e) {
            let mouseEvent = new MouseEvent("mouseup", {});
            canvas.dispatchEvent(mouseEvent);
        }, false);
        canvas.addEventListener("touchmove", function (e) {
            let touch = e.touches[0];
            let mouseEvent = new MouseEvent("mousemove", {
                clientX: touch.clientX,
                clientY: touch.clientY
            });
            canvas.dispatchEvent(mouseEvent);
        }, false);

// Get the position of a touch relative to the canvas
        function getTouchPos(canvasDom, touchEvent) {
            let rect = canvasDom.getBoundingClientRect();
            return {
                x: touchEvent.touches[0].clientX - rect.left,
                y: touchEvent.touches[0].clientY - rect.top
            };
        }

        function resize() {
            ctx.canvas.width = window.innerWidth;
            ctx.canvas.height = window.innerHeight-70;
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, window.innerWidth, window.innerHeight-70);
        }
        // last known position
        var pos = { x: 0, y: 0 };

        // new position from mouse events
        function setPosition(e) {
            pos.x = e.clientX;
            pos.y = e.clientY;
        }
        function draw(e) {
            if (e.buttons !== 1) return; // if mouse is pressed.....

            let color = '#000';

            ctx.beginPath(); // begin the drawing path

            ctx.lineWidth = 10; // width of line
            ctx.lineCap = "round"; // rounded end cap
            ctx.strokeStyle = color; // hex color of line

            ctx.moveTo(pos.x, pos.y); // from position
            setPosition(e);
            ctx.lineTo(pos.x, pos.y); // to position

            ctx.stroke(); // draw it!
        }
    }

    render() {
        return (
            <canvas id="draw" style={{top: 70, backgroundColor: '#fff'}}/>
        );
    }
}

export default Paint;