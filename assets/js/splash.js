var Splash = {
    init: function () {},
    preload: function () {},
    create: function () {


        var player = game.add.sprite(game.world.centerX, game.height-200, 'baby');
        player.anchor.set(0.5);
        player.scale.set(0.5);
        var BabyAnim = player.animations.add('fly');
        player.animations.play('fly', 8, true);

        textStyle = {
            font: '22px Fredoka One',
            fill: '#ffffff',
            align: 'center',
            boundsAlignH: "center",
            boundsAlignV: "middle"
        };

        nameText = game.add.text(game.width/2, settings.splashNameTop, "Digital Dad's", textStyle);
        nameText.anchor.set(0.5);

        textStyle = {
            font: '30px Fredoka One',
            fill: '#ffffff',
            align: 'center',
            boundsAlignH: "center",
            boundsAlignV: "middle"
        };

        titleText = game.add.text(game.width/2, nameText.y+settings.splashTitleOffset, "ParaPoopers", textStyle);
        titleText.anchor.set(0.5, 1);

        music = game.add.audio('music');
        music.loop = true;
        music.play();


        //Add tap to replay
        instructionHeadingTextStyle = { font: '20px Fredoka One' , fill: '#FFFF00', align:'center', boundsAlignH: "center", boundsAlignV: "middle" };
        instructionHeading = game.add.text(game.width/2, titleText.y+60, settings.actionText, instructionHeadingTextStyle);
        instructionHeading.anchor.set(0.5);
        instructionHeading.alpha = 0;
        instructionHeadingTween = game.add.tween(instructionHeading).to( { alpha: 1 }, 800, Phaser.Easing.Linear.None, true, 0, 800, true);

        instructionHeading.inputEnabled = true;



        game.input.onTap.add(function(){


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



    },
    update: function () {}
};
