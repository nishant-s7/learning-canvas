# Notes

## Theory

-   Canvas was initially introduced by Apple back in 2004 to power their dashboard to widgets.
-   Canvas is a perfect tool to display graphs, animations, games and image compositions.
-   HTML canvas was not originally made to display text, and you can tell because compared to CSS, its text related toolkit is limited.

## Methods

> For making canvas custom hook: https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258

-   `ctx` => Holds all canvas settings and drawing methods
-   `ctx.getContext('2d')` => returns a reference to built-in canvas 2d drawing api object
-   `ctx.fillRect()` => creates a rectangle
-   `ctx.arc()` => can create circle, curved line or semicircle
-   _For shapes like rectangle, you can call them directly, but for lines (like arc), we need to call_ `ctx.beginPath()`
-   `ctx.clearRect()` => clears the canvas
-   `requestAnimationFrame()` => makes loops for animations
-   `ctx.fillStyle()` => specify fill color
-   `ctx.strokeStyle()` => specify stroke color
-   `ctx.moveTo()` => specify coordinates of start point of a line
-   `ctx.lineTo()` => specify coordinates of end point of a line
-   `ctx.lineWidth` => specify line width
-   `ctx.fillText()` => write filled text on canvas
-   `ctx.strokeText()` => write stroked text on canvas
-   `ctx.textAlign`=> specify alignment of text with respect to vertical axis
-   `ctx.textBaseline`=> specify alignment of text with respect to horizontal axis
- `ctx.measureText` => provides useful properties like width used by the text in pixels
- `ctx.createLinearGradient`

## Points

-   To draw text on canvas that breaks to another line. We have to write that logic ourselves. Canvas `fillText` method will not do that automatically.
-   Canvas element has 2 independent sizes that need to be synchronised, otherwise we get distorted shapes. When we set canvas size in className, it is just element size. The **right** way is to use `canvas.width` to set canvas size properly.
-   For canvas methods like fillRect and things, the x and y coordinate determine the top left corner of the object, but for text, it determines the axis
