const ear=new p5.SpeechRec();
var bubble=false;


function setup() {
  createCanvas(800, 800);
  capture=createCapture(VIDEO);
  capture.size(800,800);
  capture.hide();



  //ここから💭
  const listenButton=setButton('入力',{
    x:100,y:0
  });
  listenButton.mousePressed(()=>{
    listen();
    console.log("press");
  });
}

function setButton(label,pos){
  const button=createButton(label);
  button.size(80,40);
  button.position(pos.x,pos.y);
  return button;
}

function listen(){

  ear.onResult=()=>{
    if (ear.resultValue){
      word="";
      word=ear.resultString;
      console.log("yes");
      bubble=true;
    }
  }
  ear.start();
}
//1/60秒ずつ起動
function draw() {
  background(255);
  image(capture,0,50,800,800);
  if(bubble){
  ellipse(200,250,400,400);
  textSize(32);
  textAlign(CENTER);
  text(ear.resultString,200,250);
  }
}