
let mic;

// https://p5js.org/examples/sound-mic-input.html

function setup() {
  createCanvas(600, 600);

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  // background(220);

  let volume = mic.getLevel(); // 0〜1
  let d = volume * 1000;

  ellipse(100,100, d, d);
}