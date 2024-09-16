# Notes

## Basics - [Tutorial](https://youtu.be/Yvz_axxWG4Y?si=A--s_MYEHcXV0hcF)

> For making canvas custom hook: https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258

-   `ctx` => Holds all canvas settings and drawing methods
-   `ctx.getContext('2d')` => returns a reference to built-in canvas 2d drawing api object
-   `ctx.fillRect()` => creates a rectangle
-   `ctx.arc()` => can create circle, curved line or semicircle
-   _For shapes like rectangle, you can call them directly, but for lines (like arc), we need to call_ `ctx.beginPath()`
-   `ctx.clearRect()` => clears the canvas
-   `requestAnimationFrame()` => makes loops for animations
-   `ctx.fillStyle` => specify fill color
-   `ctx.strokeStyle` => specify stroke color
-   `ctx.moveTo` => specify coordinates of start point of a line
-   `ctx.lineTo` => specify coordinates of end point of a line
-   `ctx.lineWidth` => specify line width

## Advanced

-   Canvas was initially introduced by Apple back in 2004 to power their dashboard to widgets.
-   Canvas is a perfect tool to display graphs, animations, games and image compositions.
-   HTML canvas was not originally made to display text, and you can tell because compared to CSS, its text related toolkit is limited.
-   To draw text on canvas that breaks to another line. We have to write that logic ourselves. Canvas `fillText` method will not do that automatically.

-   HTML Canvas offers 2 methods for texts:
    -   ctx.fillText(text, x, y, maxWidth)
    -   ctx.strokeText(text, x, y, maxWidth)
