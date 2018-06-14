class Fruit{
    constructor(src, x, y, h, l){
        this.x = x;
        this.y = y;
        this.h = h;
        this.l = l;
        this.nom = "fruit";

        this.img = new Image();
        this.img.width = this.l;
        this.img.height = this.h;
        /*this.img.onload = ()=>{
            console.log("Contexte du onload", this);
        }*/
        this.img.src = src;
    }
}