export class MousePosition {
    mouseX: number;
    mouseY: number;
    radius: number;


    constructor(radius: number) {
        this.mouseX = 0;
        this.mouseY = 0;
        this.radius = radius;
    }

    increaseRadius(amount: number){
        this.radius += amount;
    }

    decreaseRadius(amount: number){
        this.radius -= amount;
    }


}