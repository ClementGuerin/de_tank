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

setInterval(function(){ 
    x2 = Math.floor(Math.random() * 11);
    if (x2 == x){
        x2 = x+1;
    }
    y2 = Math.floor(Math.random() * 20);
    if (y2 == y){
        y2 = y+1;
    }
    var ciblex = x2,
        cibley = y2,
        emplacement = document.querySelector(".line-"+ciblex+" .col-"+cibley);
    emplacement.classList.add('cible');
    

}, 3000);


document.addEventListener('keydown', move, false);