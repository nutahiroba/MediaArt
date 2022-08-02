let capture;

function setup(){
  createCanvas(640,480);
  capture=createCapture(VIDEO);
  capture.hide();
}

function draw(){
  background(220);
  let img=capture.get();
  image(img,0,0);
}