var leCanvas = new MonCanvas(window.innerWidth, window.innerHeight);

var cerise = new Fruit("images/cerises.png", 50, 150, 50, 50);
leCanvas.renduCanvas(cerise);
console.log("L'objet canvas dans Moncanvas", leCanvas.can);

/// Gestion du clavier
function consoleMonTruc(truc){
    console.log(truc);
}
consoleMonTruc("La programmation objet en fait c'est super");
consoleMonTruc("Mais ça demande un petit effort de modélisation");