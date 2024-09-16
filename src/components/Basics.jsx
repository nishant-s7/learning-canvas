import { useEffect, useRef } from "react";

const Basics = () => {
    const canvasRef = useRef(null);

    // const drawRect = (ctx) => {
    //     ctx.fillStyle = "white";
    //     ctx.fillRect(10, 20, 100, 80);
    // };

    // const drawCircle = (ctx) => {
    //     ctx.fillStyle = "white";
    //     ctx.strokeStyle = "red";
    //     ctx.lineWidth = 5;
    //     ctx.beginPath();
    //     ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
    //     ctx.fill();
    //     // ctx.stroke();
    // };

    useEffect(() => {
        const mouse = {
            x: undefined,
            y: undefined,
        };
        let hsl = 0;
        const PARTICLES = [];

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d"); // returns a reference to built-in canvas 2d drawing api object

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", handleResize);

        class Particle {
            constructor() {
                this.x = mouse.x;
                this.y = mouse.y;
                this.size = Math.random() * 10 + 5;
                this.speedX = Math.random() * 3 - 1.5;
                this.speedY = Math.random() * 3 - 1.5;
                this.color = `hsl(${hsl}, 100%, 50%)`;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.size > 0.2) this.size -= 0.1;
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        canvas.addEventListener("click", () => {
            for (let i = 0; i < 10; i++) {
                PARTICLES.push(new Particle());
            }
        });

        canvas.addEventListener("mousemove", (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
            for (let i = 0; i < 2; i++) {
                PARTICLES.push(new Particle());
            }
        });

        const handleParticles = () => {
            for (let i = 0; i < PARTICLES.length; i++) {
                PARTICLES[i].update();
                PARTICLES[i].draw();
                for (let j = i; j < PARTICLES.length; j++) {
                    const dx = PARTICLES[i].x - PARTICLES[j].x;
                    const dy = PARTICLES[i].y - PARTICLES[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 100) {
                        ctx.strokeStyle = PARTICLES[i].color;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(PARTICLES[i].x, PARTICLES[i].y);
                        ctx.lineTo(PARTICLES[j].x, PARTICLES[j].y);
                        ctx.stroke();
                        ctx.closePath();
                    }
                }
                if (PARTICLES[i].size < 0.3) {
                    PARTICLES.splice(i, 1);
                    i--;
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            // ctx.fillRect(0, 0, canvas.width, canvas.height);
            // drawCircle(ctx);
            handleParticles();
            hsl++;
            requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute bg-black w-full h-full"
        ></canvas>
    );
};

export default Basics;
