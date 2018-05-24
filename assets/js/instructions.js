var Instructions = {
    init: function () {},
    preload: function () {},
    create: function () {

        Clouds.makeClouds();

        textStyle = {
            font: '30px Fredoka One',
            fill: '#ffff00',
            align: 'center',
            boundsAlignH: "center",
            boundsAlignV: "middle"
        };

        titleText = game.add.text(game.width/2, settings.splashNameTop, "How to play", textStyle);
        titleText.anchor.set(0.5);
    
        //Add tap to play
        if(!settings.isMobile){
        instructionHeadingTextStyle = { font: '20px Fredoka One' , fill: '#FFFF00', align:'center', boundsAlignH: "center", boundsAlignV: "middle" };
        instructionHeading = game.add.text(game.width/2, game.height-settings.ctaOffset, settings.actionText, instructionHeadingTextStyle);
        instructionHeading.anchor.set(0.5);
        instructionHeading.alpha = 0;
        instructionHeadingTween = game.add.tween(instructionHeading).to( { alpha: 1 }, 800, Phaser.Easing.Linear.None, true, 0, 800, true);
        instructionHeading.inputEnabled = true;
        }

        textStyle = {
            font: settings.instructionsFont,
            fill: '#ffffff',
            align: 'center',
            boundsAlignH: "center",
            boundsAlignV: "middle"
        };
        if(!settings.isMobile){
        titleText = game.add.text(game.width/2, game.height-(game.height/4)-settings.instructionsOffset, settings.instructionsText, textStyle);
        titleText.anchor.set(0.5, 0);
        }

        //Instructions
        if(settings.isMobile){

            var player = game.add.sprite(game.world.centerX, game.world.centerY-100, 'baby');
            player.anchor.set(0.5);
            player.scale.set(0.4);
            var BabyAnim = player.animations.add('fly');
            player.animations.play('fly', 8, true);

            var instructions = game.add.sprite(game.world.centerX, game.height, 'instructions');
            instructions.anchor.set(0.5, 1);
            instructions.scale.set(1);
        }
        else{
        var poo = game.add.sprite(game.world.centerX-100, game.world.centerY-100, 'poo');
        poo.anchor.set(0.5);
        poo.scale.set(0.8);

        pooText = game.add.text(game.world.centerX-100, poo.y+70, "Avoid Me!", textStyle);
        pooText.anchor.set(0.5, 0);

        var bottle = game.add.sprite(game.world.centerX+100, game.world.centerY-100, 'bottle');
        bottle.anchor.set(0.5);
        bottle.scale.set(0.8);
    
        bottleText = game.add.text(game.world.centerX+100, bottle.y+70, "Collect Me!", textStyle);
        bottleText.anchor.set(0.5, 0);
        }
        
        game.input.onTap.add(function(){
            game.state.start('Game');
        }, this);
    },
    update: function () {
    },
    render:function() {
    }
}

