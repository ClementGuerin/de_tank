/* BASE */

var map_height = 460;
var map_width = 1170;
document.body.addEventListener("keydown", checkKey);

/* Tank 1 */

var tank1 = document.querySelector('.tank1');
var tank1_direction = 'right';
var tank1_top = 0;
var tank1_left = 0;

var tank1_key_up = '90'; // Z
var tank1_key_down = '83'; // S
var tank1_key_left = '81'; // Q
var tank1_key_right = '68'; // D


function checkKey(){
    var keyPressed = event.keyCode;
    
    if(keyPressed == tank1_key_up || keyPressed == tank1_key_down || keyPressed == tank1_key_left || keyPressed == tank1_key_right){
        tank1_checkDirection();
        tank1_changeDirection();
    }
    
    function tank1_checkDirection(){

        if(keyPressed == tank1_key_up){
            tank1_direction = 'up';
        }
        else if (keyPressed == tank1_key_down){
            tank1_direction = 'down';
        }
        else if (keyPressed == tank1_key_left){
            tank1_direction = 'left';
        }
        else if (keyPressed == tank1_key_right){
            tank1_direction = 'right';
        }
    }

    function tank1_changeDirection(){
        if(tank1_direction == 'left'){
            tank1.classList.remove('directionUp');
            tank1.classList.remove('directionDown');
            tank1.classList.remove('directionRight');
            tank1.classList.add('directionLeft');
        }
        else if (tank1_direction == 'right'){
            tank1.classList.remove('directionUp');
            tank1.classList.remove('directionDown');
            tank1.classList.remove('directionLeft');
            tank1.classList.add('directionRight');
        }
        else if (tank1_direction == 'up'){
            tank1.classList.remove('directionDown');
            tank1.classList.remove('directionRight');
            tank1.classList.remove('directionLeft');
            tank1.classList.add('directionUp');
        }
        else if (tank1_direction == 'down'){
            tank1.classList.remove('directionUp');
            tank1.classList.remove('directionRight');
            tank1.classList.remove('directionLeft');
            tank1.classList.add('directionDown');
        }
    }
}
