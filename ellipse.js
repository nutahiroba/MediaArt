function setup(){
  createCanvas(400,400);
  background(255);

  ellipse(200,200,400,400);
  textSize(32);
  textAlign(CENTER);
  text("話しかける", width/2, height/2);

  const oumu=new Oumu(150,50);

  const listenButton =setButton('聞く',{
    x:100,
    y:250
  });
  
  listenButton.mousePressed(()=>{
    oumu.listen();
  });

  const speechButton=setButton('話す',{
    x:230,
    y:250
  });

  speechButton.mousePressed(()=>{
    oumu.speak();
  });
}
function setButton(label,pos){
  const button=createButton(label);
  button.size(80,40);
  button.position(pos.x,pos.y);
  return button;
}

class Oumu {
  constructor(x,y){
    this.ear= new p5.SpeechRec();
    this.voice=new p5.Speech();
    this.voice.setLang("ja");
    this.word="";
    this.x=x;
    this.y=y;
  }
  listen(){
    this.ear.onResult=()=>{
      if(this.ear.resultValue){
        print(this.ear.resultString);
        this.word=this.ear.resultString;

        background(0);
        noStroke();
        triangle(350,300,390,370,300,350);
        noStroke();
        ellipse(200,200,380,380);
        text(this.ear.resultString, width/2, height/2);
      }
    }
    this.ear.start();
  }
  speak(){
    this.voice.speak(this.word);
  }

}