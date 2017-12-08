var player = document.querySelector('#player');

var x = 0;
var y = 0;

var controls = {
    up: 'z',
    down: 's',
    left: 'q',
    right: 'd'
}

function setPosition () {
    //
}

function getPosition () {
    return [x, y];
}

function move(event) {
    var k = event.key;
    
    if(k == controls.up){
        y++;
        setPosition();
    } else if(k == controls.down){
        y--;
        setPosition();
    } else if(k == controls.left){
        x--;
        setPosition();
    } else if(k == controls.right){
        x++;
        setPosition();
    }
//        chr = {
//            updown: function () {
//                var y = parseInt(getComputedStyle(player).top);
//                if (k == 'ArrowUp' || k == 'z') {
//                    y -= 10;
//                    if ( y == -10 ){
//                        y += 10;
//                    }
//                } else if (k == 'ArrowDown' || k == 's') {
//                    y += 10;
//                    if ( y == 460 ){
//                        y -= 10;
//                    }
//                }
//                return y;
//            },
//
//            leftright: function () {
//                var x = parseInt(getComputedStyle(player).left);
//                if (k == 'ArrowLeft' || k == 'q') {
//                    x -= 10;
//                    if ( x == -10 ){
//                        x += 10;
//                    }
//                } else if (k == 'ArrowRight' || k == 'd') {
//                    x += 10;
//                    if ( x == 1160 ){
//                        x -= 10;
//                    }
//                }
//                return x;
//            }
//        };
//
//    player.style.top = (chr.updown()) + "px";
//    player.style.left = (chr.leftright()) + "px";
}

document.addEventListener('keydown', move, false);