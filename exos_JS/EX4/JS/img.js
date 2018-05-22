var article = document.querySelector("article");
// clic sur l'article contenant les div
article.onclick = function(){
    // Boucle dans les enfants de l'article. for .. of permet de récupérer les enfants directement
    for(let el of this.children){
        el.classList.toggle("invisible");
    }
}