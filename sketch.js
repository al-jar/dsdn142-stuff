function setup() {
  createCanvas(200, 200); 
  background(210);

  angleMode(DEGREES);
}

//COORDINATEs
let middle = 100;
let midX = 100;
let midY = 100;


function draw() {
  penguin();
  // practice(100,100,150);

}

function flowerRotate() {
let from = color(181, 124, 242);
  let to = color(242, 124, 157);
  strokeWeight(0);

  let one = lerpColor(from, to, 0);
  let two = lerpColor(from, to ,0.33);
  let three = lerpColor(from, to, 0.66);
  let four = lerpColor(from, to, 1);

  fill(one)
  ellipse(midX,midY,110,20)
  fill(two)
  ellipse(midX,midY,20,110)

//runs in separate loop
//does not effect surrounding code
//helpful for adjustments to specific elements
  push();
    translate(100,100);//moves the origin point
    rotate(45);//draw on angle
    fill(three);
    ellipse(0,0,110,20);//draws at the new origin
    fill(four);
    ellipse(0,0,20,110);
  pop();

  fill(245, 255, 110);
  ellipse(midX,midY,30);
}

function penguin(){
   //colors
  let green = color(5, 163, 94);
  let blue = color(54, 73, 138);
  let pink = color(137, 86, 156);
  let orange = color(230, 166, 39);
  let purple = color(171, 135, 245);

  //parameters
  let penguinCol = blue;
  let extraCol = orange;
  
  //body
  strokeWeight(0);
  fill(penguinCol);
  ellipse(middle,middle,70,90);//outer

  fill(255);
  ellipse(middle,middle,50,70);//inner

  //head
  fill(penguinCol);//blue ish
  ellipse(middle,middle-50,50);//outer

  strokeWeight(20);
  stroke(255);
  arc(middle,middle-50,  30,50,0,180);//inner

  //eyes
  strokeWeight(0);
  fill(0);
  ellipse(middle-15,middle-50,6);//left eye
  ellipse(middle+15,middle-50,6);//right eye

  //beak
  fill(extraCol);
  ellipse(middle,middle-42,15,10);
  //feet
  ellipse(middle-15,middle+43,20,12);//left foot
  ellipse(middle+15,middle+43,20,12);//right foot

  //flippers
  fill(penguinCol);
  strokeWeight(0.5);
  ellipse(middle- 32,middle,10,50);//left flipper
  ellipse(middle+32, middle, 10 ,50);//right flipper

}

