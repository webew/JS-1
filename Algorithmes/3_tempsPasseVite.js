var ageStagiaire = 19; // Le stagiaire a 19 ans
var boit = false;
var fume = false;
var t = 1;

// Le temps passe, c'est i qui s'incrémente
for(i=0; i < 6; i++){
    // Que se passe-t-il si il boit ou il fume ou les deux ?
    if(boit == true || fume == true){
        t = 2;
    }else if(boit == true && fume == true){
        t = 4;
    }else{
        t = 1;
    }
    // On regarde l'âge du stagiaire
    if(ageStagiaire < 25){
        ageStagiraire += t;
        alert("Le stagiaire est encore jeune");
    }else{
        alert("Et voilà, déjà vieux !");
    }
}