
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
  var ear=new p5.SpeechRec();

  ear.onResult=()=>{
    if (ear.resultValue){
      word="";
      word=ear.resultString;
      console.log("yes");
      ellipse(250,200,500,300);
      text(ear.resultString,width/2,height/2);
    }
  }
  ear.start();
}
//1/60秒ずつ起動
function draw() {
  background(255);
  image(capture,0,50,800,800);
  ellipse(200,200,400,400);
  textSize(32);
  textAlign(CENTER);
}