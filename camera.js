let capture;

function setup(){
  createCanvas(1000,700);
  capture=createCapture(VIDEO);
  capture.size(1000,700);
  capture.hide();
}

function draw(){
  background(0);
  image(capture,0,0,1000,700);
}