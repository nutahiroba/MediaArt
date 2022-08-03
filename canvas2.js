const myRec=new p5.SpeechRec();
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
    myRec.onResult=listen();
    console.log("press");
  });

  const deleteButton=setButton('消す',{
    x:200,y:0
  });
  deleteButton.mousePressed(()=>{
    bubble=false;
  });
}

function setButton(label,pos){
  const button=createButton(label);
  button.size(80,40);
  button.position(pos.x,pos.y);
  return button;
}

function listen(){

  // myRec.onResult=()=>{
    if (myRec.resultValue){
      word="";
      word=myRec.resultString;
      console.log("yes");
      bubble=true;
    }
  // }
  myRec.start();
}
//1/60秒ずつ起動
function draw() {
  background(255);
  image(capture,0,50,800,800);
  if(bubble){
  ellipse(200,250,400,400);
  textSize(32);
  textAlign(CENTER);
  text(myRec.resultString,200,250);
  }
}