// Création d'une class Product qui permet de construire plusieurs objets du même type (appelés instances de la même classe)
class Product {
  constructor(product) {
    product && Object.assign(this, product);
  }
}

// Récupération des informoations des différents produits présents dans l'API
fetch("http://localhost:3000/api/products")
  .then((res) => res.json())
  .then((products) => {
    // Boucle for ... of pour afficher chaque produit (product) parmis la liste de produits (products)
    for (let product of products) {
      let productInfo = new Product(product);
      // Injections des informations dans l'id items avec innerHTML
      document.getElementById("items").innerHTML += `
        <a href="./product.html?id=${productInfo._id}">
          <article>
            <img src="${productInfo.imageUrl}" alt="${productInfo.altTxt}">
            <h3 class="productName">${productInfo.name}</h3>
            <p class="productDescription">${productInfo.description}</p>
          </article>
        </a>
      `;
    }
  });
