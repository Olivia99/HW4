var w=5;
var h=5;
var x=width/8
var y=height/2
var time=0;
   	stroke(0);
	noFill();
	rectMode(CENTER);

while(time<5){

	while(w<=50){
	rect(x,y,w,h)
  w=w+10
	h=h+10
	}
  x=x+60
  w=5
  h=5
  time=time+1

}
