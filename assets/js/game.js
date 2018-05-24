var cloudGap = 50;
var bottleGap = 150;
var pooGap = 100;
var playerCollisionGroup;
var cloudCollisionGroup;
var player;
var clouds;
var score = 0;
var lives = 3;

var Game = {
    init: function () {
        score = 0;
        pooGap = 100;
        lives = 3;
    },
    preload: function () {
    },
    create: function () {

        Clouds.makeClouds();

        this.addPlayer();

        this.createLives();

        this.cloudGroup = game.add.group();
        this.pooGroup = game.add.group();
        this.bottleGroup = game.add.group();
    
        this.addBottle();
        this.addPoo();

        //add score
        textStyle = {
            font: settings.scoreFont.font,
            fill: '#ffffff',
            align: 'center',
            boundsAlignH: "center",
            boundsAlignV: "middle"
        };
        scoreText = game.add.text(game.width -settings.scoreFont.xOffset, settings.scoreFont.y, "Score: ", textStyle);
        scoreText.anchor.setTo(0.5);
        textStyle.fill = '#ffec00';
        scoreCount = game.add.text(scoreText.x+settings.scoreFont.counterOffset, settings.scoreFont.y, score, textStyle);
        scoreCount.anchor.setTo(0.5);

        babySound = game.add.audio('babySound');
        endSound = game.add.audio('fart');


        timer = game.time.create(false);

        //  Set a TimerEvent to occur after 2 seconds
        timer.loop(settings.pooTimer, function(){ 
            if(pooGap>=20){
                pooGap -= 5;
            }
            //console.log(pooGap);
        }, this);

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        timer.start();
        
    },
    
    update: function () {


        
            var dist=game.physics.arcade.distanceToXY(player, this.input.activePointer.x , settings.playerStartY);
            
            
            if ( (Math.round(dist)<20)) 
            {
            player.body.velocity.x=0;
            player.body.velocity.y=0;
            }
            else{
                if(this.input.activePointer.x>player.x){
                    //player.angle=45;
                    //player.body.angle=45;
                }
                else if(this.input.activePointer.x<player.x){
                    //player.angle=-45;
                    //player.body.angle=-45;
                }
                game.physics.arcade.moveToXY(player, this.input.activePointer.x , settings.playerStartY, 150);
            }

    

        game.physics.arcade.collide(player, this.bottleGroup, function(player, bottle){   
            bottle.destroy();
            babySound.play();
            score++;
            scoreCount.setText(score);  
            
            //create emmiter
        
            var whiteEmitter = game.add.emitter(0, 0, 100);
            whiteEmitter.makeParticles('white');
            whiteEmitter.gravity = 200;
            whiteEmitter.x = bottle.x;
            whiteEmitter.y = bottle.y;
            if(settings.isMobile){
                whiteEmitter.maxParticleScale = 0.3;
            }
            whiteEmitter.start(true, 4000, null, 10);

            //  And 2 seconds later we'll destroy the emitter
            game.time.events.add(2000, function(){
                whiteEmitter.destroy();
            }, this);
            
        });

        game.physics.arcade.collide(player, this.pooGroup, function(player, poo){   
            
            poo.destroy();

            endSound.play();
            
            //create emmiter
            var emitter = game.add.emitter(0, 0, 100);
            emitter.makeParticles('brown');
            emitter.gravity = 200;
            emitter.x = poo.x;
            emitter.y = poo.y;
            emitter.start(true, 4000, null, 10);
            
            lives--;
            livesGroup.children[lives].frame=1;
            if(lives==0){
                game.state.start('GameOver');
            }
            //  And 1 seconds later we'll destroy the emitter
            game.time.events.add(1000, function(){
                emitter.destroy();
            }, this);

        });        
    },

    createLives:function(){
        //create 3 balls at top of screen to represent remaining lives
        livesGroup = this.add.group(this.game.world, 'balls', false, true, Phaser.Physics.ARCADE);

        //this.balls.anchor.set(0.5);
        for(var i=0; i<lives; i++) {
            livesGroup.create(settings.lives.startX + (settings.lives.gap *i), settings.lives.y, 'soother');
        }

        livesGroup.setAll('body.allowGravity', false);
        livesGroup.children.forEach(function(b){
            b.anchor.setTo(0.5);
            b.scale.set(settings.lives.scale);
        });
    },
    
    addCloud:function(){
        var cloud = new Cloud(game);
        game.add.existing(cloud);
        this.cloudGroup.add(cloud);    
    },
    addBottle:function(){
        var bottle = new Bottle(game);
        game.add.existing(bottle);
        this.bottleGroup.add(bottle);    
    },
    addPoo:function(){
        var poo = new Poo(game);
        game.add.existing(poo);
        this.pooGroup.add(poo);    
    },
    addPlayer: function() {
        player = game.add.sprite(game.world.width * 0.5, settings.playerStartY, 'baby');
        player.anchor.set(0.5);
        player.scale.set(settings.playerScale, settings.playerScale);
        //make player dragable
        player.inputEnabled = true;
        //player.input.enableDrag();
        //player.input.allowVerticalDrag = false;
        //add physics to player
        game.physics.enable(player, Phaser.Physics.ARCADE);

        player.body.setSize(230, 100, 0, 410);
        //Make player only move horizontal
        //player.body.immovable = true;

        var BabyAnim = player.animations.add('fly');
        player.animations.play('fly', 8, true);
        // tweenA = game.add.tween(player).to( { angle: 25 }, 1000, "Quart.easeOut");
        // tweenB = game.add.tween(player).to( { angle: -25 }, 1000, "Quart.easeOut");

        // tweenA.chain(tweenB);
        // tweenA.start();
        // tweenB.onComplete.add(function(){
        //     tweenA.start();
        // }, this);
        
        


    },
    
    render:function() {
        //game.debug.body(player);
        //game.debug.text( "0.1.9", 10, game.height-10 );
    },
    //Create Houses

};

//Bottle
Bottle = function (game) {
    Phaser.Sprite.call(this, game, game.rnd.between(0, game.width+10), game.rnd.between(game.height, game.height+100), "bottle");
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.anchor.set(0.5);
    this.scale.setTo(settings.bottleScale);
    this.body.velocity.y = -100;
    this.body.immovable = true;    
    this.angle = game.rnd.between(-45,45);
    this.placeBottle = true;
    game.world.bringToTop(player);


};
Bottle.prototype = Object.create(Phaser.Sprite.prototype);
Bottle.prototype.constructor = Bottle;
Bottle.prototype.update = function(){

    if(this.placeBottle && this.y < (game.height-bottleGap) ){
        this.placeBottle = false;
        Game.addBottle(this.parent);
   }   

    //detroy once left screen
    if(this.y < -20){
        this.destroy();
    }

    bottle = this;
    if (game.physics.arcade.collide(bottle, Game.pooGroup, collisionHandler, processHandler, this))
    {
      //console.log('boom');
    }


};

collisionHandler = function(bottle, poo){
    //bottle.x = (poo.x - 100);
}

processHandler = function(){
    return true;
}

//Poo
Poo = function (game) {
    Phaser.Sprite.call(this, game, game.rnd.between(0, game.width+10), game.rnd.between(game.height, game.height+100), "poo");
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.anchor.set(0.5);
    this.scale.setTo(settings.pooScale);
    this.body.velocity.y = -130;
    this.body.immovable = true;    
    this.placePoo = true;
    this.Anim = this.animations.add('move');
    this.animations.play('move', 8, true);
    game.world.bringToTop(player);
};
Poo.prototype = Object.create(Phaser.Sprite.prototype);
Poo.prototype.constructor = Poo;
Poo.prototype.update = function(){

    if(this.placePoo && this.y < (game.height-pooGap) ){
        this.placePoo = false;
        Game.addPoo(this.parent);
   }   

    //detroy once left screen
    if(this.y < -20){
        this.destroy();
    }

};







