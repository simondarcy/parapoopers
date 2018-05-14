var GameOver = {
    init: function () {},
    preload: function () {},
    create: function () {




        textStyle = {
            font: '25px Fredoka One',
            fill: '#ffffff',
            align: 'center',
            boundsAlignH: "center",
            boundsAlignV: "middle"
        };

        titleText = game.add.text(game.width/2, 100, "Game Over", textStyle);
        titleText.anchor.set(0.5, 1);


        textStyle = {
            font: '32px Fredoka One',
            fill: '#ffffff',
            align: 'center',
            boundsAlignH: "center",
            boundsAlignV: "middle"
        };

        scoreText = game.add.text(game.world.centerX, game.world.centerY-50, "Your Score:", textStyle);
        scoreText.anchor.set(0.5);

        textStyle.fill = '#ffec00';
        scoreTextNum = game.add.text(game.world.centerX, scoreText.y+50, score, textStyle);
        scoreTextNum.anchor.set(0.5);

        

        //Add tap to replay
        instructionHeadingTextStyle = { font: '20px Fredoka One' , fill: '#FFFF00', align:'center', boundsAlignH: "center", boundsAlignV: "middle" };
        instructionHeading = game.add.text(game.width/2, (game.height)-100, "Tap here to poo again", instructionHeadingTextStyle);
        instructionHeading.anchor.set(0.5);
        instructionHeading.alpha = 0;
        instructionHeadingTween = game.add.tween(instructionHeading).to( { alpha: 1 }, 800, Phaser.Easing.Linear.None, true, 0, 800, true);

        instructionHeading.inputEnabled = true;
        instructionHeading.events.onInputDown.add(function(){
            game.state.start('Game');
        }, this);


        var name = game.add.inputField(game.world.centerX-75, game.world.centerY+100, {
            font: '18px Arial',
            fill: '#212121',
            fontWeight: 'bold',
            width: 150,
            padding: 8,
            borderWidth: 1,
            borderColor: '#000',
            borderRadius: 6,
            placeHolder: 'Your Name...',
        });





        
    
    },
    update: function () {}
};
