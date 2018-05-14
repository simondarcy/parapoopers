var mobileSettings = {
    splashNameTop:50,
    splashTitleOffset:100,
    isMobile:true,
    actionText:'Tap to play',
    instructionsFont:'16px Fredoka One',
    scoreFont:{font:'22px Fredoka One', y:32, xOffset:70, counterOffset:40},
    instructionsOffset:20,
    instructionsText:'Use your finger to direct baby',
    playerScale:0.3,
    playerStartY:140,
    cloudScale:0.4,
    pooScale:0.25,
    bottleScale:0.4,
    lives:{
        startX:30,
        gap:38,
        y:25,
        scale:0.4
    }
};

var desktopSettings = {
    splashNameTop:40,
    splashTitleOffset:100,
    isMobile:false,
    actionText:'Click to play',
    instructionsFont:'16px Fredoka One',
    scoreFont:{font:'32px Fredoka One', y:30, xOffset:120, counterOffset:70},
    instructionsOffset:40,
    instructionsText:'Move your mouse to fly',
    playerScale:0.35,
    playerStartY:130,
    cloudScale:0.3,
    pooScale:0.3,
    bottleScale:0.5,
    lives:{
        startX:30,
        y:25,
        gap:45,
        scale:0.5
    }
};

var shareURL = "http://www.simondarcyonline.com/sexton/";

//Mobile First
var settings = mobileSettings;

//Get the width/height of screen
var w = Math.max (document.documentElement.clientWidth, window.innerWidth || 0);
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

//At what point do we want to switch to the desktop settings?
if(w>650){
    //w = 400;
    //h = 500;
    //Switch to desktop settings
    settings = desktopSettings;
}



