class Barquitos{
    constructor(x,y,width,height,barquitopos){
        var options ={
            restitution : 0.8,
            friction: 1.0,
            density: 1.0
        };

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height= height;
        this.image
        this.barquitopos = barquitopos;
        
    }
}