const listItems = document.getElementById("items");

const fetchKanap = async () => {
  let products = await fetch(`http://localhost:3000/api/products`).then((res) =>
    res.json()
  );
  //.then((res) => console.log(res));
};

fetchKanap();

const affichage = async () => {
  await fetchKanap();

  listItems.innerHTML = products.map(
    (product) =>
      `
        <a href="./product.html?id=${product._id}">
          <article>
            <img src="http://localhost:3000/images/${product.imageUrl}" alt="${product.altTxt}">
            <h3 class="productName">${product.name}</h3>
            <p class="productDescription">${product.description}</p>
          </article>
        </a>
      `
  ).join;
};

//Affichage du produit (de l'objet) qui a été sélectionné par l'id
let response = await fetch(`http://localhost:3000/api/products/${id}`);

//Affichage du produit (de l'objet) qui a été sélectionné par l'id
const idProduct = jsonListProducts.find((element) => element.id === _id);
