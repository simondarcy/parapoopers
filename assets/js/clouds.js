//Create Background Clouds
var cloudGroup;
var cloud;
var Clouds = {

    doCloud:function(x, y){
        if(typeof x === 'undefined'){
            cloud = game.add.sprite(game.rnd.between(-20, game.width+20), game.rnd.between(game.height, game.height+100), "cloud"+game.rnd.between(1, 4));
        }
        else{
            cloud = game.add.sprite(x, y, "cloud"+game.rnd.between(1, 4));
        }
        cloud.anchor.set(0.5);
        cloud.scale.setTo(settings.cloudScale);
        game.physics.enable(cloud, Phaser.Physics.ARCADE);
        cloud.body.velocity.y = -100;
        cloudGroup.add(cloud);
    },
    makeClouds:function(){
        //create a few random clouds 
        cloudGroup = game.add.group();
        for(var i=0;i<settings.clouds.startNum;i++){
            this.doCloud(game.rnd.between(-20, game.width+20), game.rnd.between(-20, game.height+20));
        }

        timer = game.time.create(false);
        //  Set a TimerEvent to occur after X seconds
        timer.loop(settings.clouds.rate, function(){ 
            Clouds.doCloud();
        }, this);
        timer.start();
    },

}