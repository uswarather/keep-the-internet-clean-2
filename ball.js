class Ball{
  constructor(x,y,r){
   var options={
      isStatic: false,
      restitution:0.3,
      friction:0.5,
      density:1.2

   }
 this.ball = Bodies.circle(x,y,r/2,options)
 World.add(world,this.ball)
 this.r = r;
 this.image=loadImage("paper.png")

  }
 display()  
  {
       push ()
    translate (this.ball.position.x,this.ball.position.y)
    rotate (this.ball.angle)
    imageMode(CENTER)
    image(this.image,0,0,70,70)
        pop ()


  }



}