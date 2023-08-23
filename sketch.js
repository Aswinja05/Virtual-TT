let video;

let label = "waiting...";

let classifier;

// let modelURL = 'https://teachablemachine.withgoogle.com/models/GaAhbKCdv/';
let modelURL = 'https://teachablemachine.withgoogle.com/models/mtAlW_P52/';
// let modelURL = 'https://teachablemachine.withgoogle.com/models/-cq5JP89a/';
// let modelURL = 'myKNN.json';

let left;
let right;


function preload() {

  // classifier = ml5.imageClassifier(modelURL);
  classifier = ml5.imageClassifier(modelURL + 'model.json');
  
  // console.log("loaded")
}


function setup() {
  createCanvas(640, 480);
  // createCanvas(500, 100);
  // createCanvas(0, 0);

  video = createCapture(VIDEO)
  // ml5.flipImage(video)
  video.hide();
  flipvideo=ml5.flipImage(video)
  // capt  ure.size(600,400)
//   pixelDensity(1)
//Start classifying
  classifyVideo();
}


function classifyVideo() {
  classifier.classify(video, gotResults);
  flipvideo=ml5.flipImage(video)
}

let reallabel
function draw() {
  // background("white");

  // Draw the video
  // image(flipvideo, 500, 500);


  textSize(32);
  textAlign(CENTER, CENTER);
  fill(0);
  reallabel=label
  // text(label, width / 2, height - 16);
  // console.log(label)
  






if(reallabel=="right"){
  if(parseInt(bar2.style.left)<(window.innerWidth-bar1.offsetWidth-border)){
    bar2.style.left="1210px"
      
  }
}
if(reallabel=="left"){
  if(parseInt(bar2.style.left)>border){
    bar2.style.left="0px"
  }
}
// if(reallabel=="left"){
//   if(parseInt(bar2.style.left)<(window.innerWidth-bar1.offsetWidth-border)){
//       bar2.style.left="1210px"
      
//   }
// }
// if(reallabel=="right"){
//   if(parseInt(bar2.style.left)>border){
//       bar2.style.left="0px"
//   }
// }

for (var i = 0; i < modal.length; i++) {
  var modal1 = modal[i]
  if(reallabel=='waiting...'){
      modal1.style.display = "block"
  }
  else{
      modal1.style.display = "none"
  }
}

// if(reallabel=="stop"){
//   if(parseInt(bar2.style.left)>border){
//       bar2.style.left=bar2.style.left
//   }
// }

let s1=new Audio("s1.mp3")
let s2=new Audio("s2.mp3")

if(bar1.style.left==ball.style.left){
  // s2.loop=false
  // s2.play()
}
if((bar2.style.left)+65==ball.style.left){
  s1.play()
}








 
  textSize(256);
//   text(emoji, width / 2, height / 2);
}

// STEP 3: Get the classification!
function gotResults(error, results) {
  // Something went wrong!
  if (error) {
    console.error(error);
    // console.log("s its error")
    return;
  }
  // Store the label and classify again!
  label = results[0].label;
  // return label
  // classifyVideo();
  setTimeout(classifyVideo, 500)
}










































  // // Classifier Variable
  // let classifier;
  // // Model URL
  // let imageModelURL = 'https://teachablemachine.withgoogle.com/models/CloHug0ji/';
  
  // // Video
  // let video;
  // let flippedVideo;
  // // To store the classification
  // let label = "";

  // // Load the model first
  // function preload() {
  //   classifier = ml5.imageClassifier(imageModelURL + 'model.json');
  // }

  // function setup() {
  //   createCanvas(320, 260);
  //   // Create the video
  //   video = createCapture(VIDEO);
  //   video.size(320, 240);
  //   video.hide();

  //   flippedVideo = ml5.flipImage(video);
  //   // Start classifying
  //   classifyVideo();
  // }

  // function draw() {
  //   background(0);
  //   // Draw the video
  //   image(flippedVideo, 0, 0);

  //   // Draw the label
  //   fill(255);
  //   textSize(16);
  //   textAlign(CENTER);
  //   text(label, width / 2, height - 4);
  // }

  // // Get a prediction for the current video frame
  // function classifyVideo() {
  //   flippedVideo = ml5.flipImage(video)
  //   classifier.classify(flippedVideo, gotResult);
  //   flippedVideo.remove();

  // }

  // // When we get a result
  // function gotResult(error, results) {
  //   // If there is an error
  //   if (error) {
  //     console.error(error);
  //     return;
  //   }
  //   // The results are in an array ordered by confidence.
  //   // console.log(results[0]);
  //   label = results[0].label;
  //   // Classifiy again!
  //   classifyVideo();
  // }

