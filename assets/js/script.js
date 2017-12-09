var player = document.querySelector('#player');

var maxX = document.querySelectorAll('.line-1 .col').length;
var maxY = document.querySelectorAll('.line').length;

var x = 1;
var y = 5;


var controls = {
    up: 'z',
    down: 's',
    left: 'q',
    right: 'd'
}

var rotation = {
    up: '0px -50px',
    down: '-50px -50px',
    left: '-50px 0px',
    right: '0px 0px',
}

var direction = rotation.right;

function setPosition (posX, posY, direction) {
    gridX = x;
    gridY = y;
    
    var grids = document.querySelectorAll('.col');
    
    grids.forEach(function(e){
        e.style.background = '';
        e.style.backgroundPosition = '';
    });
    
    var grid = document.querySelector('.line-'+posY+' .col-'+posX);
    
    grid.style.background = 'url(./assets/img/tank_bg.png) no-repeat';
    grid.style.backgroundPosition = direction;
    
    x = posX;
    y = posY;
    
    console.log(posX+' pour '+maxX);
}

function getPosition () {
    return [x, y];
}

function move(event) {
    var k = event.key;
    
    if(k == controls.up && y > 1){
        var newY = y-1;
        setPosition(x, newY, rotation.up);
    } else if(k == controls.down && y < maxY){
        var newY = y+1;
        setPosition(x, newY, rotation.down);
    } else if(k == controls.left && x > 1){
        var newX = x-1;
        setPosition(newX, y, rotation.left);
    } else if(k == controls.right && x < maxX){
        var newX = x+1;
        setPosition(newX, y, rotation.right);
    }
}

document.addEventListener('keydown', move, false);
setPosition(x, y, direction);