var loadingText;


WebFontConfig = {
    active: function() {
        game.time.events.add(Phaser.Timer.SECOND, function() {

            loadingText.font = 'Fredoka One';

        }, this);
    },
    google: {
        families: ['Fredoka One']
    }
};


var Preloader = {

    preload : function() {

        game.scale.refresh();

        game.load.onLoadStart.add(this.loadStart, this);
        game.load.onFileComplete.add(this.fileComplete, this);
        game.load.onLoadComplete.add(this.loadComplete, this);


        game.stage.backgroundColor = '#29C4DC';

        // Load all the needed resources for the menu.

        //Global Assets

        game.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');


        //Main Game Assets
        
    
        game.load.image('dd', 'assets/img/gary-1.png');
        
        game.load.image('cloud1', 'assets/img/DD_Cloud1.png');
        game.load.image('cloud2', 'assets/img/DD_Cloud2.png');
        game.load.image('cloud3', 'assets/img/DD_Cloud3.png');
        game.load.image('cloud4', 'assets/img/DD_Cloud4.png');

        game.load.image('poo', 'assets/img/DD_Poo.png');
        game.load.image('brown', 'assets/img/brown-drop.png');
        game.load.image('white', 'assets/img/DD_Star.png');
        game.load.image('bottle', 'assets/img/DD_Bottle.png');
        game.load.image('instructions', 'assets/img/DD_Instructions.png');

        game.load.spritesheet('soother', 'assets/img/DD_Soother.png', 70, 70, 2);
        game.load.spritesheet('poo', 'assets/img/DD_Poo_Animated.png', 142, 132, 4);
        game.load.spritesheet('baby', 'assets/img/DD_Baby.png', 264, 520, 2);

        game.add.plugin(PhaserInput.Plugin);
    
        //audio
        game.load.audio('music', ['assets/audio/music.mp3']);
        game.load.audio('babySound', ['assets/audio/baby.mp3']);
        game.load.audio('fart', ['assets/audio/fart.mp3']);
    
        textStyle = {
            font: '32px Fredoka One',
            fill: '#ffff00',
            align: 'center',
            boundsAlignH: "center",
            boundsAlignV: "middle"
        };

        loadingText = game.add.text(w/2, game.height/2, 'Loading', textStyle);
        loadingText.anchor.set(0.5);
        game.load.start();

    },
    loadStart : function(){
        loadingText.setText("Loading ...");
    },
    loadComplete : function(){
        game.state.start('Splash');
    },
    fileComplete : function(progress, cacheKey, success, totalLoaded, totalFiles){
        loadingText.setText("Loading: " + progress + "%");
    },
    create: function () {

    }
};