var hr, angleh
var min, anglemin
var sec, anglesec

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES)
}

function draw() {
  background(0);
  fill("white")
  
  text(mouseX+","+mouseY,mouseX,mouseY)
  text("12",400,66)
  text("3",535,200)
  text("6",400,338)
  text("9",260,200)
  translate(400,200)
  rotate(-90)

  hr=hour();
  min=minute();
  sec=second();

  anglesec = map(sec, 0, 60,0,360)

  push()
  rotate(anglesec)
  stroke(255,0,0)
  strokeWeight(7);
  line(0,0,75,0);
  pop()

  anglemin = map(min, 0, 60,0,360)

  push()
  rotate(anglemin)
  stroke(0,0,255)
  strokeWeight(7);
  line(0,0,140,0);
  pop()

  anglehr = map(hr%12, 0, 12,0,360)

  push()
  rotate(anglehr)
  stroke(0,255,0)
  strokeWeight(7);
  line(0,0,110,0);
  pop()

  noFill();
  strokeWeight(7)
  stroke(255,0,0)
arc(0,0,310,310,0,anglesec)


noFill();
  strokeWeight(7)
  stroke(0,0,255)
arc(0,0,330,330,0,anglemin)



noFill();
  strokeWeight(7)
  stroke(0,255,0)
arc(0,0,350,350,0,anglehr)


  drawSprites();
}
