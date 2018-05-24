var loadingText;

//Google Font Config
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

        //Set background Color
        game.stage.backgroundColor = '#29C4DC';

        //Load Google WebFont
        game.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');


        //Main Game Assets
            
        //differnt clouds
        game.load.image('cloud1', 'assets/img/DD_Cloud1.png');
        game.load.image('cloud2', 'assets/img/DD_Cloud2.png');
        game.load.image('cloud3', 'assets/img/DD_Cloud3.png');
        game.load.image('cloud4', 'assets/img/DD_Cloud4.png');

        //other images
        game.load.image('brown', 'assets/img/brown-drop.png');
        game.load.image('white', 'assets/img/DD_Star.png');
        game.load.image('bottle', 'assets/img/DD_Bottle.png');
        game.load.image('instructions', 'assets/img/DD_Instructions.png');
        game.load.image('title', 'assets/img/DD_Title.png');
        game.load.image('play', 'assets/img/DD_PlayButton.png');
        game.load.image('start', 'assets/img/DD_Start.png');
        game.load.image('card', 'assets/img/card.png');

        //spritesheets
        game.load.spritesheet('soother', 'assets/img/DD_Soother.png', 70, 70, 2);
        game.load.spritesheet('poo', 'assets/img/DD_Poo_Animated.png', 142, 132, 4);
        game.load.spritesheet('baby', 'assets/img/DD_Baby.png', 264, 520, 2);

        //Share icons
        game.load.image('facebook', 'assets/img/share_facebook.png');
        game.load.image('twitter', 'assets/img/share_twitter.png');
        game.load.image('link', 'assets/img/share_link.png');
        game.load.image('whatsapp', 'assets/img/share_whatsapp.png');
    
        //audio
        game.load.audio('music', ['assets/audio/music.mp3', 'assets/audio/music.ogg']);
        game.load.audio('babySound', ['assets/audio/baby.mp3', 'assets/audio/baby.ogg']);
        game.load.audio('fart', ['assets/audio/fart.mp3', ]);
    
        //loading text
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