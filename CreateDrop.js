class createDrop{
    constructor(x,y){
        var options_drop = {
            isStatic:false,
            restitution:0.5,
            friction:0.1,
        }
     this.x = x;
     this.y = y;

     this.body = Bodies.circle(this.x,this.y,2,options_drop);
     World.add(world,this.body);

     if(this.body.position.y > height){
     Matter.Body.setPosition(this.body,{x: random(0,400),y:(0,400)})
    
    }
}
}                            
