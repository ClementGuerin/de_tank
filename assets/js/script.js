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
}

document.addEventListener('keydown', move, false);