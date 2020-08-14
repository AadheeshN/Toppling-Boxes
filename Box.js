class Box {

    constructor(x, y, width, height) {
        var options = {
            restitution: 0.9
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //this.body = Bodies.rectangle(200, 100, 50, 50);
        World.add(world, this.body);
    }

    display(){
        var angle = this.body.angle;

        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255);
        rect(0, 0, this.width, this.height);
        pop();
    }

}