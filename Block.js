class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        
 this.Visiblity=255;
  
  }

display()
{
  console.log(this.body.speed)
if((this.body.speed)<3)
{
  var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      }

else
{
World.remove(world,this.body)  

push();
this.Visiblity=this.Visiblity-5;
tint(300,this.Visiblity)

//do nothing
image(this.image,this.body.position.x,this.body.position.y,50,50)
pop();
}}
};