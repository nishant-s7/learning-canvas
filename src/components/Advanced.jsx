import { useEffect, useState } from "react";
import { useRef } from "react";

const Advanced = () => {
    const canvasRef = useRef();
    const [inputText, setInputText] = useState("");

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

        const gradient = ctx.createLinearGradient(
            0,
            0,
            canvas.width,
            canvas.height
        );
        gradient.addColorStop(0.3, "red");
        gradient.addColorStop(0.5, "fuchsia");
        gradient.addColorStop(0.7, "hotpink");

        ctx.font = "80px Helvetica";
        ctx.fillStyle = gradient;
        ctx.strokeStyle = "orangered";
        ctx.letterSpacing = "1px";

        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        const maxTextWidth = canvas.width * 0.5;
        const lineHeight = 80;

        const wrapText = (text) => {
            let lines = [];
            let lineCounter = 0;
            const words = text.split(" ");

            let line = "";
            for (let i = 0; i < words.length; i++) {
                let testLine = line + words[i] + " ";
                if (ctx.measureText(testLine).width > maxTextWidth) {
                    lineCounter++;
                    line = words[i] + " ";
                } else {
                    line = testLine;
                }
                lines[lineCounter] = line;
            }

            let textHeight = lineCounter * lineHeight;
            let textY = canvas.height / 2 - textHeight / 2;
            lines.forEach((l, i) => {
                ctx.fillText(l, canvas.width / 2, textY + i * lineHeight);
            });
            console.log(lines);
        };

        wrapText(inputText);
    }, [inputText]);

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
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />
        </>
    );
};

export default Advanced;
