var mobileSettings = {
    splashNameTop:50,
    splashTitleOffset:100,
    splashBabyOffset:300,
    isMobile:true,
    actionText:'Tap to play',
    instructionsFont:'16px Fredoka One',
    scoreFont:{font:'22px Fredoka One', y:32, xOffset:70, counterOffset:45},
    instructionsOffset:20,
    instructionsText:'Use your finger to direct baby',
    playerScale:0.3,
    playerStartY:140,
    cloudScale:0.4,
    pooScale:0.25,
    bottleScale:0.4,
    shareX:100,
    shareY:140,
    pooTimer:6000,
    lives:{
        startX:30,
        gap:38,
        y:25,
        scale:0.4
    },
    clouds:{
        startNum:5,
        rate:1000
    },
    ctaOffset:70,
    shareSpacing:70,
    shareScale:0.75,
    shareOffset:100,
    endScreenDadScale:0.25,
    endScreenCardScale:0.4,
    endBtnScale:0.25,
    cardPadding:15,
    scoreLineHeight:-5,
    cardWWW:280,
    cardFont:'25px Fredoka One'
};

var desktopSettings = {
    splashNameTop:40,
    splashTitleOffset:90,
    splashBabyOffset:300,
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
    shareX:100,
    shareY:100,
    pooTimer:5000,
    lives:{
        startX:30,
        y:25,
        gap:45,
        scale:0.5
    },
    clouds:{
        startNum:10,
        rate:1000
    },
    ctaOffset:70,
    shareSpacing:70,
    shareScale:0.75,
    shareOffset:95,
    endScreenDadScale:0.3,
    endScreenCardScale:0.5,
    endBtnScale:0.25,
    cardPadding:20,
    scoreLineHeight:0,
    cardWWW:320,
    cardFont:'28px Fredoka One'
};

var shareURL = "https://www.parapoopers.com/";

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



var messages = {
    'good':["Your a real ParaPooper", 
            "Well done. You 'bottled' it"
            ],
    'bad':["Cover your nose! We're going in!",
            "You'll need some wet wipes.",
            "Hmm, fan of the 'brown stuff' i see.",
            "OOF! Smells like yesterdays dinner!"]
}


