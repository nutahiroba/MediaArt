var theta;
var colorH = 0;
var startColor = 0;
var rotate_arg;
var mic;

function setup() {
  createCanvas(windowWidth, windowHeight);

  background(0);
  colorMode(HSB,100);
  colorH = random(100);
  startColor = colorH;
  strokeWeight(1);
  rotate_arg = random(3);

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(0,5);
  frameRate(30);
  stroke(colorH,80,255,10);

  //macから音声を取得
  var sound_volume = mic.getLevel();
  var change_sound_volume = map(sound_volume,0,1,0,1000);
  theta = radians(change_sound_volume);

  translate(width/2,height/2);

  branch(change_sound_volume);

  // 色相の調整
  colorH = colorH + 4;

  if(abs(colorH - startColor) > 25){
    colorH = startColor;
  }

}


function branch(h) {

  //ボリュームによってhの値を変化させる
  h *= 0.4;

  if (h > 2) {
    push();    
    rotate(theta);
    strokeWeight(h);
    line(0, 0, 0, -h);
    translate(0, -h);
    branch(h);
    pop();

    push();
    rotate(-theta);
    strokeWeight(h);
    line(0, 0, 0, -h);
    translate(0, -h);
    branch(h);
    pop();

    push();
    rotate(theta+radians(180));
    strokeWeight(h);
    line(0, 0, 0, -h);
    translate(0, -h);
    branch(h);
    pop();

    push();
    rotate(-theta-radians(180));
    strokeWeight(h);
    line(0, 0, 0, -h);
    translate(0, -h);
    branch(h);
    pop();

  }
}