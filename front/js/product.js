// Récupération de la chaîne de requête dans l'url
const queryString_url_id = window.location.search;

// Extraction de l'id
const urlSearchParams = new URLSearchParams(queryString_url_id);

const id = urlSearchParams.get("id");
console.log(id);

// Affichage du produit (de l'objet) qui a été sélectionné par l'id

fetch("http://localhost:3000/api/products")
  .then((res) => res.json())
  .then((products) => {
    // Commentaire !?!?!?
    const idProduct = products.find((element) => element._id === id);
    console.log(idProduct);

    // Selection des éléments HTML ou je vais injecter les informations du produit
    const img = document.querySelector(".item__img"); //getElementByClassName ne marche pas ?
    const title = document.getElementById("title");
    const price = document.getElementById("price");
    const description = document.getElementById("description");
    const colors = document.getElementById("colors");
    const quantity = document.getElementById("quantity");
    let colorsList = [];

    // Injections des informations avec innerHTML et textContent
    img.innerHTML = `<img src="${idProduct.imageUrl}" alt="${idProduct.altTxt}">`;
    title.textContent = `${idProduct.name}`;
    price.textContent = `${idProduct.price}`;
    description.textContent = `${idProduct.description}`;

    // Boucle for ... in (plus facile à lire, et effectue tout le travail d'itération) pour les différentes options de couleur
    for (let index in idProduct.colors) {
      colorsList =
        colorsList +
        `<option value="${idProduct.colors[index]}">${idProduct.colors[index]}</option>`;
    }

    // Injections des différents choix de couleurs avec innerHTML
    colors.innerHTML =
      `<option value=" ">-- SVP, choisissez une couleur --</option>` +
      colorsList;
    console.log(idProduct.colors);

    // Sélection du bouton "Ajouter au panier" dans le dom
    const addToCart = document.getElementById("addToCart");

    // Ecouter l'évènement au click et envoyer dans le panier
    addToCart.addEventListener("click", (event) => {
      event.preventDefault();

      // Récupération des valeurs du formulaire sous la forme d'un tableau ( array )
      let optionsProduct = {
        nomProduct: idProduct.name,
        idProduct: idProduct._id,
        colorsProduct: colors.value,
        quantity: quantity.value,
        price: idProduct.price * quantity.value,
      };
      console.log(optionsProduct);

      // Enregistrer les données dans le local storage
      let productSelection = JSON.parse(localStorage.getItem("produit"));

      // Fonction ajouter un produit sélectionné dans le local storage
      const addProductLocalStorage = () => {
        // Ajout dans le tableau de l'objet avec les options choisi par l'utilisateur
        productSelection.push(optionsProduct);

        // Convertion du javascript en json et envoie dans la key "produit" du local storage
        localStorage.setItem("produit", JSON.stringify(productSelection));
      };

      // Si
      if (productSelection) {
        addProductLocalStorage();
      }

      // Sinon
      else {
        productSelection = [];
        addProductLocalStorage();
      }
    });
  });
