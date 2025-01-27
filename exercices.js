const h1 = document.querySelector("h1");
console.log(h1);
console.log(h1.textContent);

const desc_boutique = document.querySelector("#description_boutique");
console.log(desc_boutique.textContent);

const p2 = document.createElement("p");
p2.textContent = `Pour cela, il vous suffit de cliquer sur une des potions de la liste ci-dessous pour l'acheter.`;
desc_boutique.appendChild(p2);
