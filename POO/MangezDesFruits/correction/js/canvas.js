class MonCanvas{
    constructor(argL,argH){
        this.l = argL;
        this.h = argH;
        this.creeBalise();
    }
    // Créer une balise canvas
    creeBalise(){
        this.can = document.createElement("canvas");
        this.can.width = this.l;
        this.can.height = this.h;
        this.ctx = this.can.getContext("2d");
        document.body.appendChild(this.can);
    }
    // Methode pour le rendu des objets
    renduCanvas(obj){
        this.ctx.drawImage(obj.img,obj.x, obj.y);
        
    }
}