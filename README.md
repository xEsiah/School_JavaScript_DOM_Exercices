# Exercices sur les fonctions en JavaScript

- Tu peux mettre toutes tes réponses dans le fichier `exercices.js`.
- À chaque exercice _(chaque sous-titre après le titre Exercices dans cet énoncé)_, tu dois faire un commit avec le titre de l'exercice.
- Tu n'es pas obligé de garder le code fait précédemment, mais ⚠️ **attention** certaines choses sont utiles pour plus tard.

## Rappels

Mettez vos ressources de cours pas loin de vous et n'oubliez pas de vérifier ce que vous faites avec du `console.log`.

## Thème 🔮🧙‍♂️🧪🪙🍄

- Tu es le sorcier Archibald 🧙‍♂️ et tu gères une petite boutique dans laquelle tu crées et vends des potions 🧪.
- La monnaie est le `🪙`. Tu peux stocker ça dans une constante si tu veux :)

Dès que tu verras `<ce_genre_de_chose>` c'est qu'il faudra remplacer `<ce_genre_de_chose>` par la bonne variable appropriée au contexte.\
Tu comprendras en lisant la suite :)

Commencez avec ces constantes

```js

```

## Exercices

### Quel est le titre de la boutique

- Récupère le titre de la boutique avec `querySelector` et affiche dans le `console` la valeur de `textContent`

### Des informations manquent !

- Archibald a oublié d'ajouter un paragraphe dans la description de sa boutique.
  - Avec `querySelector` récupère l'élément parent du paragraphe existant dans le HTML.
  - Crée un nouveau paragraphe avec `createElement`.
  - Ajoute-y le texte suivant `Pour cela, il vous suffit de cliquer sur une des potions de la liste ci-dessous pour l'acheter.` en l'affectant à la propriété `textContent` du paragraphe.
  - Et ajoute le paragraphe avec la méthode `appendChild` du parant.

### Roger, enfoiré !

Roger, un collègue sorcier jaloux, entache le titre de ta boutique (avec le mot pacotille).

- Récupère l'élément avec `querySelector` en utilisant la constante dans laquelle tu as déjà stocké le titre pour aller chercher `<span id="blague_de_roger_le_sorcier">blague_de_roger_le_sorcier</span>`
- Supprime le en utilisant la méthode `remove`.

### Archibald n'est pas là, appelons le !

- Récupérer le bouton avec `querySelector`
- Attache un évènement à ce bouton avec la méthode `addEventListener` sur l'évènement `click`
- Depuis la fonction de rappel, fais un `alert` de `🧙‍♂️ J'arrive, j'arrive Aventurier !`

### Faisons un peu de magie 🪄

Tu as des boutons permettant de changer les boîtes de couleur.

- Récupère avec `querySelectorAll` toutes les boîtes à l'intérieur de la `<div id="boites_magique">`
- Attache un évènement à chacun des boutons
- En fonction de chaque bouton change la couleur de fond des boîtes en utilisant la propriété `style` pour chaque boîte

### Aventurier, voici ma boutique !

Récupérez cette liste de potions :

```js
const potions = [
  {
    nom: "Potion de soin",
    description: "",
    prix: 10,
  },
  {
    nom: "Potion de sommeil",
    description: "",
    prix: 50,
  },
];
```

- Pour chaque potion :
  - Récupère dans une constante le contenant de la liste des potions `<div id="liste_potions">`
  - Les éléments à créer sont plus conséquents avec `createElement` nous allons donc utiliser les `template` (que vous trouverez dans le code html)
  - Récupère le template avec `querySelector` sur son id
  - Clone le contenu dans une constante avec `.content.cloneNode(true);`
  - À partir d'ici tu peux remplacer les éléments du template avec `querySelector` et `textContent`
    - `<h5 class="card-title">` contient le titre
    - `<span class="prix"></span>` contient le prix
    - `<p class="card-text">` contient le texte
