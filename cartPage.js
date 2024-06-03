let myCardCartPageContainer = document.querySelector(".card-container");
let myCardCartPage = document.querySelector(".card");
let myCardCartPageImg = document.querySelector("img");
let myCardCartPageTitle = document.querySelector(".text-title");
let myCardCartPageDescription = document.querySelector(".text-body");
let myCardCartPagePrice = document.querySelector(".price");

let basket = JSON.parse(localStorage.getItem("product")) || [];









// COUNTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT

let CountMyItemsCart = document.querySelector(".count");
let countItemCart = () => {
  CountMyItemsCart.innerHTML = basket.length;
};

countItemCart();












// DISPLAYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY

clutter = "";

let displaycartitemsCartpage = () => {
  basket.forEach((element) => {
    clutter += `
     <div class="card">
     <div class="card-img">
       <img src=${element.img} alt="" width="100" height="100">
     </div>
     <div class="card-info">
       <p class="text-title">${element.title}</p>
       <p class="text-body">${element.description}</p>
     </div>
     <div class="card-footer">
     <span class="text-title price">$  ${element.price}</span>

     <div class="card-button" data-index="${element.id}">
      
          
     <img width="18" height="18" src="https://img.icons8.com/android/24/minus.png" alt="minus"/>
       
     </div>

   </div></div>
     `;
  });

  myCardCartPageContainer.innerHTML = clutter;
};

displaycartitemsCartpage();

let myRemoveBtn = document.querySelectorAll(".card-button");

// myRemoveBtn.forEach((button)=>{
//     console.log(button.innerHTML);

// })






// REMOVEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE

let removeCartitem = (id) => {
  basket = basket.filter((x) => x.id != id);
  localStorage.setItem("product", JSON.stringify(basket));
  displaycartitemsCartpage();
  countItemCart();
  window.location.reload();
};

myRemoveBtn.forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.dataset.index;
    removeCartitem(id);
  });
});




//         BILLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL

let updateBillContainer = () => {
    let myBillContainer = document.querySelector(".bill-container");
    let totalAmount = 0; // Assuming total amount is calculated elsewhere
  
    // Check if basket has items (avoid division by zero errors)
    if (basket.length === 0) {
      myBillContainer.innerHTML = `
        <div class="bill-container">
          <p class="total-items">Total Items: 0</p>
          <p>No items in cart</p>
          <hr>
          <p class="total-bill">Total Bill: $0.00</p>
          <button class="Done-order">
            Proceed Order
          </button>
        </div>
      `;
      return; // Exit function early if no items
    }
  
    let itemsList = "";
  
    basket.forEach((item) => {
      itemsList += `
        <p class="itemsName">${item.title} : $${item.price}</p>
      `;
      totalAmount += item.price; // Update total amount if needed
    });
  
    myBillContainer.innerHTML = `
      <div class="bill-container">
        <p class="total-items">Total Items: ${basket.length}</p>
        ${itemsList}
        <hr>
        <p class="total-bill">Total Bill: $${totalAmount.toFixed(2)}</p>
        <button class="Done-order">
          Proceed Order
        </button>
      </div>
    `;
  };
  
  updateBillContainer();
  















