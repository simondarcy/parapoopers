var game;
var btn = document.getElementById('btn');

// https://www.dailydot.com/debug/chrome-autoplay-block-games/ 
function getChromeVersion () {     
    var raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
    return raw ? parseInt(raw[2], 10) : false;
}

function bootstrap(){
    btn.style.display="none";
    game = new Phaser.Game(w, h, Phaser.CANVAS, 'game');
    game.state.add('Preloader', Preloader);
    game.state.add('Splash', Splash);
    game.state.add('Instructions', Instructions);
    game.state.add('Game', Game);
    game.state.add('GameOver', GameOver);
    game.state.start('Preloader');
}
    window.onload = function(){
          
        // https://www.dailydot.com/debug/chrome-autoplay-block-games/
        if(getChromeVersion()<66){
            bootstrap();
        }
        else{
            btn.style.display = 'block';
            btn.addEventListener("click", function(){
                bootstrap();
            });
        }

}


