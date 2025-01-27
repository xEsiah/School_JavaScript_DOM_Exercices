# Exercices sur les fonctions en JavaScript

- Toutes les réponses doivent être placées dans le fichier `exercices.js`.
- Pour chaque exercice, tu dois faire un commit avec le titre de l'exercice.
- Il n'est pas nécessaire de conserver le code précédent, mais ⚠️ **attention** certaines parties seront utiles pour les exercices suivants.

## Rappels

N'oublie pas de consulter tes ressources de cours et de vérifier ton travail avec `console.log`.

## Thème 🔮🧙‍♂️🧪🪙🍄

- Tu es le sorcier Archibald 🧙‍♂️ et tu gères une petite boutique dans laquelle tu crées et vends des potions 🧪.

## Exercices

### Quel est le titre de la boutique

- Utilise `querySelector` pour récupérer le titre de la boutique et affiche sa valeur dans la `console`.

### Des informations manquent !

- Tu as oublié d'ajouter un paragraphe dans la description de ta boutique.
  - Utilise `querySelector` pour récupérer l'élément parent du paragraphe existant dans le HTML.
  - Crée un nouveau paragraphe avec `createElement`.
  - Ajoute le texte suivant `Pour cela, il vous suffit de cliquer sur une des potions de la liste ci-dessous pour l'acheter.` en l'affectant à la propriété `textContent` du paragraphe.
  - Ajoute le paragraphe avec la méthode `appendChild` du parent.

### Roger, enfoiré !

Roger, un collègue sorcier jaloux, a entaché le titre de ta boutique (avec le mot `pacotille`).

- Utilise `querySelector` pour récupérer l'élément avec l'id `blague_de_roger_le_sorcier` et supprime-le avec la méthode `remove`.

### Archibald n'est pas là, appelons le !

- Utilise `querySelector` pour récupérer le bouton et attache un évènement `click` avec la méthode `addEventListener`.
- Depuis la fonction de rappel, utilise `alert` pour afficher `🧙‍♂️ J'arrive, j'arrive Aventurier !`.

### Faisons un peu de magie 🪄

Le temps que tu arrives, l'Aventurier a des boutons permettant de changer les boîtes de couleur.

- Utilise `querySelectorAll` pour récupérer toutes les boîtes à l'intérieur de la `<div id="boites_magique">`.
- Attache un évènement à chacun des boutons.
- En fonction de chaque bouton, change la couleur de fond des boîtes en utilisant la propriété `style`.

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
  - Utilise `querySelector` pour récupérer le contenant de la liste des potions `<div id="liste_potions">`.
  - Les éléments à créer sont plus conséquents avec `createElement`. Utilise les `template` _(que vous trouverez dans le code html)_.
    - Utilise `querySelector` pour récupérer le template avec son id.
    - Clone le contenu dans une constante avec `.content.cloneNode(true);`.
  - À partir d'ici, remplace certains éléments HTML du template avec `querySelector` et `textContent`.
    - `<h5 class="nom_potion">` contient le nom de la potion.
    - `<span class="prix_potion"></span>` contient le prix de la potion.
    - `<p class="card-text description_potion">` contient la description de la potion.

### Plus de potions, nous avons besoin de plus de potions !

Un formulaire a été ajouté pour te permettre d'ajouter plus de potions à la boutique et se faire plus de sous !

- Utilise `querySelector` pour récupérer le formulaire `<form>` et affecte-le à une constante.
- Gère la soumission du formulaire en y attachant un évènement `submit`.
- Utilise l'objet `FormData` pour extraire les valeurs du formulaire.
  - `FormData` se crée avec le mot-clef `new` et tu peux y passer directement un `FormHtmlElement` (le formulaire que tu as affecté à ta constante). Par exemple : `const formData = new FormData(formHtmlElement)`.
  - Utilise la méthode `get` pour récupérer la valeur d'un champ de formulaire.
- Trouve un moyen pour réutiliser le code de l'exercice précédent avec une ou plusieurs fonctions, qui te permettra de rajouter cette nouvelle potion dans la boutique.
- [BONUS] Tous les champs sont requis ! Si un champ est manquant, il faut prévenir l'utilisateur.
  - Il y a déjà un élément présent avec un message d'erreur `<div class="invalid-feedback">`.
  - Utilise `querySelector` pour récupérer ce noeud HTML depuis `<form>`.
  - Affiche le en changeant la propriété css `display: none` en `display: block` grâce à la propriété `style`.
