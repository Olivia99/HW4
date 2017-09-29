function setup() { 
  createCanvas(400, 400);
	 frameRate(15);
} 

function draw() {
  background(244, 248, 252);
var x2=0;
var y2=height;
stroke(0);
while (x2<width){
 line(mouseX,mouseY,x2,y2)
  x2=x2+10
}
  print(pmouseX + " -> " + mouseX);
}
