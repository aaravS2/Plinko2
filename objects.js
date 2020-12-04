class Ob {
    constructor(x,y){
        var options={
            isStatic:false,
            density:4.0
        }
        this.body.Bodies.circle(x,y,6,options)
        this.radius=6
        this.x=x
        this.y=y
        World.add(world,this.body)
    }
    display(){
        ellipseMode(RADIUS)
        fill(233,178,23)
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
    }
}