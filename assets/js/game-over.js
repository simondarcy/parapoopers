var GameOver = {
    init: function () {},
    preload: function () {},
    create: function () {

        Clouds.makeClouds();

        textStyle = {
            font: '38px Fredoka One',
            fill: '#ffff00',
            align: 'center',
            boundsAlignH: "center",
            boundsAlignV: "middle"
        };

        titleText = game.add.text(game.width/2, settings.splashNameTop, "GAME OVER!", textStyle);
        titleText.anchor.set(0.5);

        var dad = game.add.sprite(game.world.centerX, titleText.y+30, 'start');
        dad.anchor.set(0.5, 0);
        dad.scale.set(settings.endScreenDadScale);

        //Add card
        var card = game.add.sprite(game.world.centerX, (dad.y+dad.height)-3, 'card');
        card.anchor.set(0.5, 0);
        card.scale.set(settings.endScreenCardScale);
        card.inputEnabled = true;
        card.events.onInputUp.add(function(){
            console.log("clicked");
            url = "https://www.facebook.com/digitaldaddiary";
            window.open(url, "_blank")
        }, this);

        card.events.onInputOver.add(function(){
            card.tint  = 0xFFFF00;
        }, this);
        card.events.onInputOut.add(function(){
            card.tint  = 0xFFFFFF;
        }, this);

        //Score text
        textStyle = {
            font: settings.cardFont,
            fill: '#3e47c6',
            align:'center',
            wordWrap: true, 
            wordWrapWidth: settings.cardWWW
        };
        scoreText = game.add.text(game.world.centerX, card.y+settings.cardPadding, "Your Score:\n"+score, textStyle);
        scoreText.anchor.set(0.5, 0);
        scoreText.lineSpacing = settings.scoreLineHeight;

        //Add Play Button
        var startButton = game.add.sprite(game.world.centerX, game.height-10, 'play');
        startButton.anchor.set(0.5, 1);
        startButton.scale.set(settings.endBtnScale);
        
        startButton.inputEnabled = true;
        startButton.events.onInputDown.add(function(){
            game.state.start('Game');
        }, this);

        //Share Buttongs
        var shareIcons = game.add.group();

        shareIconsX = game.width/2;

        var facebook = game.add.button(shareIconsX - settings.shareSpacing, startButton.y - settings.shareOffset, 'facebook');
        facebook.anchor.setTo(0.5);
        facebook.scale.set(settings.shareScale);

        var twitter = game.add.button(shareIconsX, startButton.y - settings.shareOffset, 'twitter');
        twitter.anchor.setTo(0.5);
        twitter.scale.set(settings.shareScale);
        var link;
        if(settings.isMobile) {
            link = game.add.button(shareIconsX + settings.shareSpacing, startButton.y - settings.shareOffset, 'whatsapp');

        }
        else{
            link = game.add.button(shareIconsX + settings.shareSpacing, startButton.y - settings.shareOffset, 'link');
        }
        link.anchor.setTo(0.5);
        link.scale.set(settings.shareScale);

        facebook.onInputUp.add(function(){
            fbShareURL = shareURL+"sharer/?me="+score;
            url = "//www.facebook.com/sharer/sharer.php?u="+fbShareURL;
            window.open(url, "_blank")
        }, this);
        twitter.onInputUp.add(function(){
            shareText = "I just scored " + score + " points playing @digitaldaddiary ParaPoopers! Play Now! #Parenting";
            url = "//twitter.com/share?url="+shareURL+"&text="+shareText+"&via=digitaldaddiary&hashtags=Parenting";
            window.open(url, "_blank")
        }, this);

        link.onInputUp.add(function(){
            shareText = "I just scored " + score + " points playing ParaPoopers! Have a go yourself here: "+shareURL;

            //If mobile open in whatsapp
            if(settings.isMobile){
                url = "whatsapp://send?text=" + shareText;
                window.open(url, "_blank")
            }
            else{
                //If desktop, copy link to clipboard
                var $temp = document.createElement("input");
                document.body.appendChild($temp);
                $temp.value = shareText;
                $temp.focus();
                $temp.select();
                document.execCommand("copy");
                document.body.removeChild($temp);
                alert("Game link copied to clipboard. Thanks for sharing!");
            }

        }, this);

        shareIcons.add(facebook);
        shareIcons.add(twitter);
        shareIcons.add(facebook);

        //make sure logo is above
        game.world.bringToTop(shareIcons);

        linkTextStyle = {
            font: '16px Fredoka One',
            fill: '#3e47c6',
            align: 'center',
            boundsAlignH: "center",
            boundsAlignV: "middle"
        };
        linkText = game.add.text(game.world.centerX, (card.y+card.height), '@DigitalDadDiary', linkTextStyle);
        linkText.anchor.set(0.5, 1);
    },
    update: function () {}
};
