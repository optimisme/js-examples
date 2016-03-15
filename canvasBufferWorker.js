var x0 = 0,
    x1 = 0,
    height = 0,
    width = 0,
    buffer = null,
    buff32 = null,
    isLittleEndian = true,
    cR = 0,
    cG = 0,
    cB = 0,
    cA = 0;

function setColor (mov, x, y) {

    val = (mov + (x * y)) & 0xff;   

    cR = x & 0xff;  // red
    cG = val;       // green
    cB = y & 0xff;  // blue
    cA = 255;       // alpha 
}

self.addEventListener('message', function (e) {
    var obj = e.data,
        bX = 0;

    if (obj.type === 0) {

        // Redraw data
         if (isLittleEndian) {
            for (x = x0; x < x1; x = x + 1) {
                for (y = 0; y < height; y = y + 1) {
                    setColor(obj.mov, x, y);
                    buff32[y * width + bX] = (cA << 24) | (cB << 16) | (cG << 8) | cR;
                }
                bX = bX + 1;
            }
        } else {
            for (x = x0; x < x1; x = x + 1) {
                for (y = 0; y < height; y = y + 1) {
                    setColor(obj.mov, x, y);
                    buff32[y * width + bX] = (cR << 24) | (cG << 16) | (cB << 8) | cA;
                }
                bX = bX + 1;
            }
        }

        self.postMessage(buffer, [buffer]);
        buffer = new ArrayBuffer(height * width * 4);
        buff32 = new Uint32Array(buffer);

    } else if (obj.type === 1) {

        // Set worker
        x0 = obj.init.x0;
        x1 = obj.init.x1;
        height = obj.init.height;
        width = x1 - x0;

        buffer = new ArrayBuffer(height * width * 4);
        buff32 = new Uint32Array(buffer);

        if (buffer[4] === 0x0a && buffer[5] === 0x0b && buffer[6] === 0x0c && buffer[7] === 0x0d) {
            isLittleEndian = false;
        }

        self.postMessage({ type: 1 });
    }
}, false);
