import { useEffect } from "react";
import { useRef } from "react";

const Advanced = () => {
    const canvasRef = useRef();

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        ctx.lineWidth = 2;

        ctx.strokeStyle = "red";
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, 0);
        ctx.lineTo(canvas.width / 2, canvas.height);
        ctx.stroke();
        ctx.closePath();

        ctx.strokeStyle = "green";
        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2);
        ctx.lineTo(canvas.width, canvas.height / 2);
        ctx.stroke();
        ctx.closePath();

        const text = "Hello!";
        const textX = canvas.width / 2;
        const textY = canvas.height / 2;
        ctx.font = "80px Helvetica";
        ctx.fillStyle = "white";
        ctx.strokeStyle = "orangered";
        ctx.letterSpacing = "1px";

        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        ctx.fillText(text, textX, textY);
        ctx.strokeText(text, textX, textY);
    }, []);

    return (
        <>
            <canvas
                ref={canvasRef}
                className="absolute w-full h-full bg-black"
            ></canvas>
            <input
                type="text"
                placeholder="Type something..."
                className="absolute w-[calc(100%-2rem)] p-4 m-4 z-10"
            />
        </>
    );
};

export default Advanced;
