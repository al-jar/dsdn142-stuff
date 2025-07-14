function setup() {
  createCanvas(600, 600); 
  background(210);

  let midX = 300;
  let midY = 300;

  let headSizeX ;
  let headSizeY ;


}


function draw() {

  //PENGUIN---------------------------------------------------------------
  strokeWeight(0);

  //body
  fill(30);//outer
  ellipse(300,300,150,200);

  fill(255);//inner
  ellipse(300,300,120,170);

  //arms
  fill(30)
  ellipse(230,310,30,120)//left arm
  ellipse(370,310,30,120)//right flipper

  //feets
  fill(255, 170, 0);
  ellipse(270,400,50,20)
  ellipse(330,400,50,20)
  
  //head-----------------------------------------------------------------
  // strokeWeight(0);//base / dark part
  // fill(30);
  // ellipse(300,200,100);
  
  // strokeWeight(40);//light part
  // stroke(255);
  // arc(300,200,  50,70,  0,PI);
  
  // //eyes
  // strokeWeight(0);
  // fill(0);

  // ellipse(270,200,10)//left eye
  // ellipse(330,200,10)//right eye

  // //beak
  // fill(255, 170, 0);
  // ellipse(300,210,30,20);
  drawHead(240,200);
  drawHead(360,200)

  ///-----------------------------------------------------------------------

}

function drawHead(x,y){
  strokeWeight(0);//base / dark part
  fill(30);
  ellipse(x,y,100);
  
  strokeWeight(40);//light part
  stroke(255);
  arc(x,y,  50,70,  0,PI);
  
  //eyes
  strokeWeight(0);
  fill(0);

  ellipse(x-30,y,10)//left eye
  ellipse(x+30,y,10)//right eye

  //beak
  fill(255, 170, 0);
  ellipse(x,y+3,30,20);
}
