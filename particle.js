class Atom{
    constructor(x,y,end){
   var options={
        isStatic:true
    }
    this.body = Bodies.circle(x, y,8, options);
    this.end=end
    this.radius=8;
    this.x=x
    this.y=y
    World.add(world, this.body);
}

display(){
var po=this.body.position.x
   

    for (var i = po; i<this.end; i+12) {
        push() 
    fill(random(123,189),random(149,87),random(234,167));
    ellipseMode(RADIUS);
    ellipse(0, this.body.position.y, this.radius, this.end);
    }
    pop()
    }
};
