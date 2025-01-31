const h1 = document.querySelector("h1");
console.log(h1);
console.log(h1.textContent);

const desc_boutique = document.querySelector("#description_boutique");
console.log(desc_boutique.textContent);

const p2 = document.createElement("p");
p2.textContent = `Pour cela, il vous suffit de cliquer sur une des potions de la liste ci-dessous pour l'acheter.`;
desc_boutique.appendChild(p2);

const titre_blague = document.querySelector("#blague_de_roger_le_sorcier");
titre_blague.remove();

const bouton_pour_appeler_archibald = document.querySelector("#call_archibald");
bouton_pour_appeler_archibald.addEventListener("click", () => {
  alert(`🧙‍♂️ J'arrive, j'arrive Aventurier !`);
});

const boites_couleur = document.querySelector("#boites_magique");
const liste_boites_couleur = boites_couleur.querySelectorAll("div");

const bouton_rouge = document.querySelector("#btn_change_red");
const bouton_bleu = document.querySelector("#btn_change_blue");
const bouton_vert = document.querySelector("#btn_change_green");

bouton_rouge.addEventListener("click", () => {
  liste_boites_couleur[0].style.backgroundColor = "red";
});
bouton_bleu.addEventListener("click", () => {
  liste_boites_couleur[0].style.backgroundColor = "blue";
  liste_boites_couleur[1].style.backgroundColor = "blue";
});
bouton_vert.addEventListener("click", () => {
  liste_boites_couleur[0].style.backgroundColor = "green";
  liste_boites_couleur[1].style.backgroundColor = "green";
  liste_boites_couleur[2].style.backgroundColor = "green";
});

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

potions.forEach((potion) => {
  const cardPotionHtml = template.content.cloneNode(true);

  const liste_potions = document.querySelector("#liste_potions");
  const title = cardPotionHtml.querySelector(".card-title");
  const prix = cardPotionHtml.querySelector(".prix");
  const description = cardPotionHtml.querySelector(".card-text");

  title.textContent = potion.nom;
  prix.textContent = potion.prix;
  description.textContent = potion.description;

  liste_potions.appendChild(cardPotionHtml);
});

// potions.forEach((potion) => {
//   const templatetHTML = document.createElement(`div`);
//   templatetHTML.classList.add("card", "bg-secondary", "col-4");
//   templatetHTML.innerHTML = `
//         <div class="card bg-secondary col-4">
//         <div class="card-body">
//           <h5 class="card-title">${potion.nom}</h5>
//           <p>
//             Prix:
//             <span class="prix">${potion.prix}</span>
//             🪙
//           </p>
//           <p class="card-text">${potion.description}</p>
//           <button class="btn btn-primary">Acheter</button>
//         </div>
//     `; //
//   liste_potions.appendChild(templateHTML);
// });
