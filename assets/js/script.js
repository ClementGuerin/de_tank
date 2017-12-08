function move(event) {
    var k = event.keyCode,
        chrId = document.querySelector('.block'),
        chr = {
            updown: function () {
                var y = parseInt(getComputedStyle(chrId).top);
                if (k == 38) {
                    y -= 10;
                    if ( y == -10 ){
                        y += 10;
                    }
                } else if (k == 40) {
                    y += 10;
                    if ( y == 650 ){
                        y -= 10;
                    }
                }
                return y;
            },

            leftright: function () {
                var x = parseInt(getComputedStyle(chrId).left);
                if (k == 37) {
                    x -= 10;
                    if ( x == -10 ){
                        x += 10;
                    }
                } else if (k == 39) {
                    x += 10;
                    if ( x == 1160 ){
                        x -= 10;
                    }
                }
                return x;
            }
        };

    chrId.style.top = (chr.updown()) + "px";
    chrId.style.left = (chr.leftright()) + "px";
}

document.addEventListener('keydown', move);