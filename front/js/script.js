let kanap;

const fetchKanap = async () => {
  kanap = await fetch("http://localhost:3000/api/products").then((res) =>
    res.json()
  );
};

const items = document.getElementById("items");

items.addEventListener("click", () => {});
