


let basket=JSON.parse(localStorage.getItem("product"))||[];

let addToCart = (id, img, title, description, price) => {
    console.log(id);
    console.log(img);
    console.log(title);
    console.log(description);
    console.log(price);


    basket.push({
        id:id,
        img:img,
        title:title,
        description:description,
        price:price
    })

    localStorage.setItem("product",JSON.stringify(basket));
};

let myAddtoCartBtn = document.querySelectorAll(".card-button");

myAddtoCartBtn.forEach((button) => {
  button.addEventListener("click", () => {
    currentElementIndex = button.dataset.index;
    currentElement = pizzaData[currentElementIndex];
    addToCart(
      currentElement.id,
      currentElement.img,
      currentElement.title,
      currentElement.description,
      currentElement.price
    );
    let myCountItems=document.querySelector(".count");
myCountItems.innerHTML=basket.length;
  });

});



let myCountItems=document.querySelector(".count");
myCountItems.innerHTML=basket.length;