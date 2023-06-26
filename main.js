rightWristX = 0;
leftWristX = 0;
difference = 0;
function setup(){
video = createCapture(VIDEO);
video.size(550,500);
canvas = createCanvas(500,450);
canvas.position(560,170);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function draw(){
    background('#33FFDA');
    document.getElementById("font_size").innerHTML = "font size of the text will be =" + difference + "px";

    textSize(difference);
    fill(100);
    text('Shriya',50,50);
}
function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor( leftWristX - rightWristX );
    console.log("leftWristX = " + leftWristX + "rightWristX = "  + rightWristX  + "difference = "+ difference);
}
}