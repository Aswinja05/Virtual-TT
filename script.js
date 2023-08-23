

var bar1=document.getElementById("bar-1");
var bar2=document.getElementById("bar-2");
var ball=document.getElementById("ball");
var movement=20;

const thisBar1="Bar-1";
const thisBar2="Bar-2";
const storeName="abc";
const storeScore=123;

let whichBar;
let moveX=1;
let moveY=10;
let ballMoving;
let border=12;
let score;
let highScore;
let gameStart=false;

localStorage.setItem(storeScore,"null");
localStorage.setItem(storeScore,"null");
(function(){
    highScore=localStorage.getItem(storeScore);
    whichBar=localStorage.getItem(storeName);
    if(whichBar==="null" || highScore==="null"){
        alert("Hello.. This is your first game");
        highScore=0;
        whichBar=thisBar1;
    }
    else{
        alert(whichBar + " has maximum score of " + highScore*100);
    }
    gameReset(whichBar);
})();




function gameReset(barName){

    bar1.style.left=((window.innerWidth-bar1.offsetWidth)/2)+"px";
    bar2.style.left=((window.innerWidth-bar2.offsetWidth)/2)+"px";
    ball.style.left=((window.innerWidth-ball.offsetWidth)/2)+"px";

    if(barName === thisBar1){
        ball.style.top=bar2.getBoundingClientRect().y-bar2.getBoundingClientRect().height+"px";
        moveY=-2;
    }

    else if(barName === thisBar2){
        ball.style.top=bar1.getBoundingClientRect().height+"px";
        moveY=2;       
    }

    score=0;
    gameStart=false;

}









var modal = document.getElementsByClassName("modal")
var cells = document.getElementsByClassName("cell")
var span = document.getElementsByClassName("close")[0]

// span.onclick = function () {
//     window.location.reload()
// }
// window.onclick = function (event) {
//     if (event.target == modal) {
//         window.location.reload()
//         // modal.style.display = "none"`
//     }
// }
// while(ball.style.top=="617px"){
//     console.log("im here")
// }

let vid = document.getElementsByClassName("animation")
vid.loop=true

// document.addEventListener('transitionend',function(event){

//     if(/*event.keyCode==68 || event.keyCode==39 ||*/ label=="left" ){
//         if(parseInt(bar2.style.left)<(window.innerWidth-bar1.offsetWidth-border)){
//             bar2.style.left=/*parseInt(bar1.style.left)+movement+'px';*/"1210px"
//             // bar1.style.left=bar2.style.left;
           
//         };

//     };
// // #leftarrow
//     if(/*event.keyCode==65 || event.keyCode==37 ||*/ label=="right" ){
        
//         if(parseInt(bar2.style.left)>border){
//             bar2.style.left=/*parseInt(bar1.style.left)-movement+'px';*/"0px"
//             // bar1.style.left=bar2.style.left;
           
//         };

//     };

// gotResults(label)
// if(reallabel=="left"){
//     if(parseInt(bar2.style.left)<(window.innerWidth-bar1.offsetWidth-border)){
//         bar2.style.left="1210px"
//     }
// }
// if(reallabel=="right"){
//     if(parseInt(bar2.style.left)>border){
//         bar2.style.left="0px"
//     }
// }


document.addEventListener('keydown',function(event){
    if(/*event.*/keyCode==13){
        
        if(!gameStart){
            gameStart=true;
            let ballRect = ball.getBoundingClientRect();
            let ballX = ballRect.x;
            let ballY=ballRect.y;
            let ballDia=ballRect.width;

            // while(ball.style.top=="617px"){
            //     console.log("im here")
            // }
            console.log(ball.style.top)


            let bar1Height=bar1.offsetHeight;
            let bar2Height=bar2.offsetHeight;
            let bar1Width=bar2.offsetWidth;
            let bar2Width=bar2.offsetWidth;

            ballMoving = setInterval(function(){
            
                let bar1X=bar1.getBoundingClientRect().x;
                let bar2X=bar2.getBoundingClientRect().x;

                let ballCentre=ballX+ballDia/2;

                ballX+=moveX;
                ballY+=moveY;
                // console.log(ballY)

                ball.style.left=ballX+"px";
                ball.style.top=ballY+"px";

                bar1.style.left=ball.style.left

                if(((ballX+ballDia)>window.innerWidth) || (ballX<0)){
                    moveX=-moveX;
                }

                if(ballY<=bar1Height){
                    moveY=-moveY;
                    score++;

                    if((ballCentre<bar1X) || (ballCentre>(bar1X+bar1Width))){
                        dataStoring(score,thisBar2);
                    }
                }
                if((ballY+ballDia)>=(window.innerHeight-bar2Height)){
                    moveY=-moveY;
                    score++;

                    if((ballCentre<bar2X) || (ballCentre>(bar2X+bar2Width))){
                        dataStoring(score,thisBar1);
                    }
                }  
            }, 0.0000000001);
        }
    }
});

function dataStoring(scoreObtained,winningBar){
    if(score>highScore){
        highScore=score;
        localStorage.setItem(storeName,winningBar);
        localStorage.setItem(storeScore,highScore);
    }
    clearInterval(ballMoving);
    gameReset(winningBar);

    alert(winningBar+" wins with score of "+(scoreObtained*100)+". Max Score is: "+(highScore*100));
}