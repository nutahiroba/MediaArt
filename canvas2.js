
function setup() {
  createCanvas(800, 800);
  capture=createCapture(VIDEO);
  capture.size(800,800);
  capture.hide();
}

function draw() {
  background(0);
  image(capture,0,0,800,800);
  ellipse(250,150,500,300);

}