# Exercices sur les fonctions en JavaScript

- Tu peux mettre toutes tes réponses dans le fichier `exercices.js`.
- À chaque exercice _(chaque sous-titre après le titre Exercices dans cet énoncé)_, tu dois faire un commit avec le titre de l'exercice.
- Tu n'es pas obligé de garder le code fait précédemment, mais ⚠️ **attention** certaines choses sont utiles pour plus tard.

## Rappels

Mettez vos ressources de cours pas loin de vous et n'oubliez pas de vérifier ce que vous faites avec du `console.log`.

## Thème 🔮🧙‍♂️🧪🪙🍄

- Tu es le sorcier Archibald 🧙‍♂️ et tu gères une petite boutique dans laquelle tu crées et vends des potions 🧪.

## Exercices

### Quel est le titre de la boutique

- Récupère le titre de la boutique avec `querySelector` et affiche dans le `console` la valeur de `textContent`.

### Des informations manquent !

- Tu as oublié d'ajouter un paragraphe dans la description de sa boutique.
  - Avec `querySelector` récupère l'élément parent du paragraphe existant dans le HTML.
  - Crée un nouveau paragraphe avec `createElement`.
  - Ajoute-y le texte suivant `Pour cela, il vous suffit de cliquer sur une des potions de la liste ci-dessous pour l'acheter.` en l'affectant à la propriété `textContent` du paragraphe.
  - Et ajoute le paragraphe avec la méthode `appendChild` du parent.

### Roger, enfoiré !

Roger, un collègue sorcier jaloux, entache le titre de ta boutique (avec le mot `pacotille`).

- Récupère l'élément avec `querySelector` en utilisant la constante dans laquelle tu as déjà stocké le titre pour aller chercher `<span id="blague_de_roger_le_sorcier">blague_de_roger_le_sorcier</span>`.
- Supprime le en utilisant la méthode `remove`.

### Archibald n'est pas là, appelons le !

- Récupére le bouton avec `querySelector`.
- Attache un évènement à ce bouton avec la méthode `addEventListener` sur l'évènement `click`.
- Depuis la fonction de rappel, fais un `alert` de `🧙‍♂️ J'arrive, j'arrive Aventurier !`.

### Faisons un peu de magie 🪄

Le temps que tu arrives, l'Aventurier a des boutons permettant de changer les boîtes de couleur.

- Récupère avec `querySelectorAll` toutes les boîtes à l'intérieur de la `<div id="boites_magique">`.
- Attache un évènement à chacun des boutons.
- En fonction de chaque bouton change la couleur de fond des boîtes en utilisant la propriété `style` pour chaque boîte.

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
  - Récupère dans une constante grâce à `querySelector` le contenant de la liste des potions `<div id="liste_potions">`.
  - Les éléments à créer sont plus conséquents avec `createElement`. Nous allons donc nous faciliter la tâche en utilisant les `template` _(que vous trouverez dans le code html)_.
    - Récupère le template avec `querySelector` sur son id.
    - Clone le contenu dans une constante avec `.content.cloneNode(true);`.
  - À partir d'ici tu peux remplacer certains élements HTML du template avec `querySelector` et `textContent`.
    - `<h5 class="nom_potion">` contient le nom de la potion.
    - `<span class="prix_potion"></span>` contient le prix de la potion.
    - `<p class="card-text description_potion">` contient la description de la potion.

### Plus de potions, nous avons besoin de plus de potions !

Un formulaire a été ajouté pour te permettre d'ajouter plus de potions à la boutique et se faire plus de sous !

- Récupère le formulaire `<form>` avec `querySelector` et affecte le à une constante.
- Gère la soumission du formulaire en y attachant un évènement `submit`, ce qui permettra de soumettre le formulaire avec le bouton et aussi avec la touche entrée.
- Utilise l'objet `FormData` pour extraire les valeurs du formulaire.
  - `FormData` se crée avec le mot-clef `new` et tu peux y passer directement un `FormHtmlElement` (le formulaire que tu as affecté à ta constante). Ce qui donnerait : `const formData = new FormData(formHtmlElement)`.
  - Tu peux récupérer la valeur d'un champ de formulaire avec la méthode `get`.
- Trouve un moyen pour réutiliser le code de l'exercice précédent avec une ou plusieurs fonctions, qui te permettra de rajouter cette nouvelle potion dans la boutique.
- [BONUS] Tous les champs sont requis ! Si un champ est manquant, il faut prévenir l'utilisateur.
  - Il y a déjà un élément présent avec un message d'erreur `<div class="invalid-feedback">`.
  - Récupère ce noeud HTML avec `querySelector` depuis `<form>`.
  - Il faut l'afficher en changeant la propriété css `display: none` en `display: block` grâce à la propriété `style`.
