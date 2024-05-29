let containerEl = document.getElementById("container")
fetch("https://fakestoreapi.com/products", {
  method: "GET",
  headers: {
    "Content-type": "application/json; charset='UTF-8'",
  },
})
  .then((respons) => respons.json())
  .then((data) =>
    data.forEach((e) => {
      const div = document.createElement("div")
const p = document.createElement("p")
const p1 = document.createElement("p")

      const img = document.createElement("img");
      div.className = "card";
      img.className = "images";
      p.className = "description";

      img.src = e.image;
      p1.innerHTML = e.price;
      p.innerHTML = e.description;

    

div.appendChild(img)
div.appendChild(p1)
div.appendChild(p)



const btn = document.createElement("button");
btn.className = "bts bi-trash-fill";
div.appendChild(btn)
  btn.innerHTML = "Delete";

      containerEl.append(div);
    })
  );