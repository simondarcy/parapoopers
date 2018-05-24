var Splash = {
    init: function () {},
    preload: function () {},
    create: function () {
    
        Clouds.makeClouds();
    
        music = game.add.audio('music');
        music.loop = true;
        music.play();

        var title = game.add.sprite(game.world.centerX, settings.splashNameTop, 'title');
        title.anchor.set(0.5, 0);
        title.scale.set(0.5);

        var dad = game.add.sprite(game.world.centerX, game.world.centerY, 'start');
        dad.anchor.set(0.5);
        dad.scale.set(0.35);

        var startButton = game.add.sprite(game.world.centerX, (dad.y+dad.height)-90, 'play');
        startButton.anchor.set(0.5, 1);
        startButton.scale.set(0.4);
        startButton.inputEnabled = true;

        startButton.events.onInputDown.add(function(){

            if (typeof(Storage) === "undefined") {
                game.state.start('Instructions');
            }

            //If first time playing, show game instructions
            if(localStorage.getItem("paraPooperInstructions") == null ){
                localStorage.setItem("paraPooperInstructions",true);
                game.state.start('Instructions');
            }
            //Otherwise go straight into the game
            else{
                //game.state.start('Game');
                game.state.start('Instructions');
            }

        }, this);

        linkTextStyle = {
            font: '16px Fredoka One',
            fill: '#ffffff',
            align: 'center',
            boundsAlignH: "center",
            boundsAlignV: "middle"
        };

        linkText = game.add.text(game.world.centerX, game.height, '@DigitalDadDiary', linkTextStyle);
        linkText.anchor.set(0.5, 1);
        linkText.inputEnabled = true;
        linkText.events.onInputDown.add(function(){
            url = "https://www.facebook.com/digitaldaddiary";
            window.open(url, "_blank")
        }, this);

    },
    update: function () {}
};
