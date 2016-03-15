# html-examples
Examples showing how to do 'non trivial' things with HTML5, Javascript, CSS, ...

### Run

Download this project with:

git clone https://github.com/optimisme/html-examples.git

cd html-examples

...

### canvasBuffer.html

Example showing how to draw one canvas pixel by pixel using a fast ArrayBuffer.

![canvasBuffer0](https://raw.github.com/optimisme/html-examples/master/captures/canvasBuffer0.png)

### canvasBufferWorker.html

Example showing how to draw one canvas pixel by pixel using a fast ArrayBuffer from several workers (not OffscrenCanvas).

![canvasBuffer0](https://raw.github.com/optimisme/html-examples/master/captures/canvasBuffer0.png)

### canvasTriangleGradient.html

Example showing how to draw one 3 gradient triangle using the 'canvas' object and javascript. It is done creating a triangle texture with 3 colors, and projecting this texture to its final position. The resolution of the texture can be configured to improve performance/quality, it also allows the use of RGBA colors.

![canvasTriangleGradient0](https://raw.github.com/optimisme/html-examples/master/captures/canvasTriangleGradient0.png)

### natualSort.html

Example showing how to sort strings with a natural algorithm that looks for numbers inside strings

![naturalSort0](https://raw.github.com/optimisme/html-examples/master/captures/naturalSort0.png)

### scrollAnimation.html

This example shows how to animate one or various HTML div objects, depending on the scroll position.

### simplifyToNumber.html

Inspired by [simplify.js](http://mourner.github.io/simplify-js/) this example shows how to 'Simplify' a polyline defining the final number of points instead of the tolerance. The algorithm is a modification of [Douglas-Peucker](http://en.wikipedia.org/wiki/Ramer%E2%80%93Douglas%E2%80%93Peucker_algorithm) algorithm.

![canvasTriangleGradient0](https://raw.github.com/optimisme/html-examples/master/captures/simplifyToNumber0.png)

