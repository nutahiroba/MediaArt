var pg;
let capture;
function setup(){
  createCanvas(1000,700);
  capture=createCapture(VIDEO);
  capture.hide();
  pg=createGraphics(400,400);
}
function draw(){
  background(220);
  let img=capture.get();
  image(img,0,0,width,height);

  pg.background(0);
  pg.ellipse(200,200,380,380);
  image(pg,200,200);
}