# Voiture autonome

## IA aux commandes !

On souhaite effectuer des tests de réactivité d'une voiture autonome.

### Caractéristiques de la voiture

    - Fonctions :
        - Accélérer
        - Maintenir vitesse constante
        - Ralentir (sans accélérer ni freiner)
        - Freiner

    - Distances de freinage :
        - A 10km/h : 5m
        - A 50km/h : 30m
        - a 100km/h : 60m

### Conditions de test

    - Au départ, votre voiture est arrêtée.
    - Vous souhaitez faire des essais de réactivité de votre voiture.
    - Les essais se déroulent sur un circuit ovale.
    - Votre voiture suit une ligne tracée au milieu de la piste (pas besoin de la diriger).
    - Votre voiture est capable de mesurer la distance qui la sépare d'un obstacle.

### Fonctionnement attendu

    Dans un premier temps, les tests seront effectués avec des données statiques (déterminées au début du programme).

    - Test 1 : 
        - Départ arrêté.
        - Rouler à 50 km/h pendant 10 secondes.
        - S'arrêter.
    - Test 2 :
        - Pour les 3 vitesses prévues, si un obstacle barre la route, la voiture doit pouvoir s'arrêter ou l'éviter (si elle ne peut pas s'arrêter).
    - Test 3 :
        - Combiner les 2 tests précédents :
            - La voiture effectuera un tour de piste si elle n'est pas obligée à s'arrêter avant.
            - Elle s'arrêtera à la fin du tour de piste.

#### Simulation

    - Refaire les mêmes tests en générant les données (présence d'un obstacle, distance de l'obstacle, vitesse) aléatoirement.