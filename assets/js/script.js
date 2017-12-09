function run (difficulty) {
    var player = document.querySelector('#player');

    var maxX = document.querySelectorAll('.line-1 .col').length;
    var maxY = document.querySelectorAll('.line').length;

    var score = document.querySelectorAll('.textScore');
    
    var gameover = document.querySelector('.gameover');
    gameover.style.display = 'none';
    
    var cibles = document.querySelectorAll('.cible');
    
    if(cibles){
        cibles.forEach(function(e){
            e.classList.remove('cible');
        });
    }

    score.forEach(function(e){
        e.textContent = 0;
    });

    var x = 1;
    var y = 5;
    var cibleValue = 0;
    var playing = true;

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
        right: '0px 0px'
    }

    var direction = rotation.right;

    var bulletX = 0;
    var bulletY = 0;
    var bulletDir = direction;
    
    if(difficulty == 'easy'){
        difficulty = 2000;
    }else if(difficulty == 'hard'){
        difficulty = 1400;
    }

    function set_score (){
        score.forEach(function(e){
        e.textContent = 0;
    });
    }

    function setPosition (posX, posY, dir) {
        gridX = x;
        gridY = y;

        var grid = document.querySelector('.line-'+posY+' .col-'+posX);

        if(grid.classList.contains('cible')){
            return;
        }

        var grids = document.querySelectorAll('.col');

        grids.forEach(function(e){
            e.style.background = '';
            e.style.backgroundPosition = '';
        });

        direction = dir;

        grid.style.background = 'url(./assets/img/tank_bg.png) no-repeat';
        grid.style.backgroundPosition = direction;

        x = posX;
        y = posY;
    }

    function getPosition () {
        return [x, y];
    }

    function tirer () {
        var posX = x;
        var posY = y;

        switch(direction){
            case rotation.up:
                posY--;
                break
                case rotation.down:
                posY++;
                break
                case rotation.left:
                posX--;
                break
                case rotation.right:
                posX++;
                break
        }

        if(posX < 1 || posX > maxX || posY < 1 || posY > maxY){
            return;
        }

        bulletX = posX;
        bulletY = posY;
        bulletDir = direction;

        var grid = document.querySelector('.line-'+posY+' .col-'+posX);

        grid.style.background = 'url(./assets/img/bg_bullet.png) no-repeat';
        grid.style.backgroundPosition = bulletDir;
    }

    function move(event) {
        var k = event.key;

        if(playing == true){
            if(k == controls.up && y > 1){
                var newY = y-1;
                setPosition(x, newY, rotation.up);
            } else if (k == controls.down && y < maxY){
                var newY = y+1;
                setPosition(x, newY, rotation.down);
            } else if (k == controls.left && x > 1){
                var newX = x-1;
                setPosition(newX, y, rotation.left);
            } else if (k == controls.right && x < maxX){
                var newX = x+1;
                setPosition(newX, y, rotation.right);
            } else if (event.keyCode == 32){
                event.preventDefault();
                tirer();
            }
        }else{
            return;
        }
    }

    setInterval(function(){
        console.log('test');
        if(bulletX == 0 || bulletY == 0){
            return;
        }

        var newY = bulletY;
        var newX = bulletX;

        var bulletDestination = document.querySelector('.line-'+newY+' .col-'+newX);

        if(bulletDestination.classList.contains('cible')){
            bulletDestination.classList.remove('cible');
            cibleValue = cibleValue - 1;
            score.forEach(function(e){
                e.textContent = Number(e.textContent)+100;
            });
            bulletDestination.classList.add('cible-touchee');
            bulletX = 0;
            bulletY = 0;
            setTimeout(function(){
                bulletDestination.classList.remove('cible-touchee');
                bulletDestination.style.background = '';
                bulletDestination.style.backgroundPosition = '';
            }, 1000);
            return;
        }

        switch(bulletDir){
            case rotation.up:
                newY--;
                break;
            case rotation.down:
                newY++;
                break;
            case rotation.left:
                newX--;
                break;
            case rotation.right:
                newX++;
                break;
        }


        if(newY < 1 || newY > maxY || newX < 1 || newX > maxX){
            var grid = document.querySelector('.line-'+bulletY+' .col-'+bulletX);

            grid.style.background = '';
            grid.style.backgroundPosition = '';
            return;
        }

        var grid = document.querySelector('.line-'+bulletY+' .col-'+bulletX);

        grid.style.background = '';
        grid.style.backgroundPosition = '';

        var bulletDestination = document.querySelector('.line-'+newY+' .col-'+newX);

        if(bulletDestination.classList.contains('cible')){
            bulletDestination.classList.remove('cible');
            cibleValue = cibleValue - 1;
            score.forEach(function(e){
                e.textContent = Number(e.textContent)+100;
            });
            bulletDestination.classList.add('cible-touchee');
            bulletX = 0;
            bulletY = 0;
            setTimeout(function(){
                bulletDestination.classList.remove('cible-touchee');
            }, 1000);
            return;
        }

        bulletX = newX;
        bulletY = newY;

        var grid = document.querySelector('.line-'+bulletY+' .col-'+bulletX);

        grid.style.background = 'url(./assets/img/bg_bullet.png) no-repeat';
        grid.style.backgroundPosition = bulletDir;
    }, 32.12);

    var ntm = setInterval(function(){ 
        x2 = Math.floor(Math.random() * 10) + 1;
        if (x2 == x){
            x2 = x+1;
        }
        y2 = Math.floor(Math.random() * 20) + 1;
        if (y2 == y){
            y2 = y+1;
        }

        if(ciblex < maxX && cibley < maxY){
            console.log(ciblex+' pour '+maxX);
            emplacement = document.querySelector(".line-"+ciblex+" .col-"+cibley);
            emplacement.classList.add('cible');
        }

        var ciblex = x2,
            cibley = y2,
            emplacement = document.querySelector(".line-"+ciblex+" .col-"+cibley);
            emplacement.classList.add('cible');
            cibleValue = cibleValue + 1;
       if (cibleValue>=4){
            gameover.style.display = 'block';
            playing = false;
            clearInterval(ntm);
        }
    }, difficulty);

    document.addEventListener('keydown', move, false);
    setPosition(x, y, direction);
}

var replay = document.querySelector('.replay');
var easy = document.querySelector('.play.easy');
var hard = document.querySelector('.play.hard');
var startmenu = document.querySelector('.startmenu');

replay.addEventListener('click', function(){
    run('easy');
});

easy.addEventListener('click', function(){
    run('easy');
    startmenu.style.display = 'none';
});

hard.addEventListener('click', function(){
    run('hard');
    startmenu.style.display = 'none';
});