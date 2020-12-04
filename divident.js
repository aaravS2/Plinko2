class De{
    constructor(x,y){
var options={
    
    isStatic:false,

}
this.body=Bodies.rectangle(x,y,10,300,options)
this.x=x
this.y=y
this.width=10
this.height=300
World.add(world,this.body)
    }
    display(){
       /* var p=this.body.position.x
        for(var i=p;i<800;i+150){
            */
            rectMode(CENTER)
            fill("red")
rect(this.body.position.x,this.body.position.y,10,300)
        }
    }

