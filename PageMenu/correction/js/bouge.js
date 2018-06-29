window.onload = function() {
    // Identification des éléments du menu
    var menuCol = document.querySelector(".liste");
    var menuLigne = document.querySelector(".module");
    var menuMax = document.querySelector(".maximise");
    // Récupérer le main pour changer sa classe
    var main = document.querySelector("main");
        // Vidéo à 100%
    menuMax.onclick = function() {
            main.classList.toggle("videoMax");
        }
        // Vue en colonne
    menuCol.onclick = function() {
            console.log(main.className);
            if (main.className != "vueColonne") {
                main.classList.add("vueColonne");
            }
        }
        // Vue en ligne
    menuLigne.onclick = function() {
        if (main.className == "vueColonne") {
            main.classList.remove("vueColonne");
        }
    }
}