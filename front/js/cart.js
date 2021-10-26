// Récupération des données dans le local storage ( convertion du json en javascritpt)
let productSelection = JSON.parse(localStorage.getItem("produit"));
console.log(produit);
const cart__items = document.getElementById("cart__items");
// Si
if (productSelection === null) {
}

// Sinon
else {
  let blabla = [];

  for (k = 0; k < productSelection.lenght; k++) {
    blabla =
      blabla +
      `
    <article class="cart__item" data-id="{product-ID}">
      <div class="cart__item__img">
        <img src="${productSelection[k].imageUrl}" alt="${productSelection[k].altTxt}">
      </div>
      <div class="cart__item__content">
        <div class="cart__item__content__titlePrice">
          <h2>${productSelection[k].name}</h2>
          <p>${productSelection[k].price}</p>
        </div>
        <div class="cart__item__content__settings">
          <div class="cart__item__content__settings__quantity">
            <p>Qté : ${productSelection[k].quantity}</p>
            <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
          </div>
          <div class="cart__item__content__settings__delete">
            <p class="deleteItem">Supprimer</p>
          </div>
        </div>
      </div>
    </article>
      `;
  }
  if (k === productSelection.lenght) {
    cart__items.innerhtml = blabla;
  }
}

/*// Récupération des informations des différents produits présents dans l'API
fetch("http://localhost:3000/api/products")
  .then((res) => res.json())
  .then((products) => {
    
    // Commentaire !?!?!?
    const cart__items = document.getElementById("cart__items");

    // Injections des informations dans l'id items avec innerHTML
    cart__items.innerHTML += `
    <article class="cart__item" data-id="{product-ID}">
      <div class="cart__item__img">
        <img src="${productInfo.imageUrl}" alt="${productInfo.altTxt}">
      </div>
      <div class="cart__item__content">
        <div class="cart__item__content__titlePrice">
          <h2>${productInfo.name}</h2>
          <p>${productInfo.price}</p>
        </div>
        <div class="cart__item__content__settings">
          <div class="cart__item__content__settings__quantity">
            <p>Qté : ${productInfo.quantity}</p>
            <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
          </div>
          <div class="cart__item__content__settings__delete">
            <p class="deleteItem">Supprimer</p>
          </div>
        </div>
      </div>
    </article>
      `;
  });*/
