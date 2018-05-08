var ageStagiaire = 19; // Le stagiaire a 19 ans
// Le temps passe, c'est i qui s'incrémente
for(i=0; i < 6; i++){
    if(ageStagiaire < 25){
        ageStagiaire ++;
        alert("Le stagiaire est encore jeune");
    }else{
        alert("Aïe, voilà, il est vieux");
    }
}