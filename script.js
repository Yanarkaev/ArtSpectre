let data = [
    {
        id: 1,
        name: "Ночь у берега",
        price: 2500000,
        imgPath: "./assets/photo_2024-06-01_09-45-15.jpg",
    },

    {
        id: 2,
        name: "Горы за лесами",
        price: 2800000,
        imgPath: "./assets/photo_2024-06-01_09-45-22.jpg",
    },

    {
        id: 3,
        name: "Ассорти",
        price: 2700000,
        imgPath: "./assets/photo_2024-06-01_09-45-29.jpg",
    },

    {
        id: 4,
        name: "Лето",
        price: 2200000,
        imgPath: "./assets/photo_2024-06-01_09-45-43.jpg",
    },

    {
        id: 6,
        name: "Пейзаж гор",
        price: 2900000,
        imgPath: "./assets/photo_2024-06-01_09-47-18.jpg",
    },
];

let cartData = [];

let cartIcon=document.querySelector(".cartIcon")
let cartModal=document.querySelector(".cartModal")

cartIcon.addEventListener("click",function(){
  cartModal.classList.toggle("hide")

})

let productCardsWrapper = document.querySelector(".productCardsWrapper");

function renderProducts(){
    for (let i = 0; i < data.length; i++){
        productCardsWrapper.innerHTML += `
        <div class="productCard">
        <div class="productImg">
            <img src=${data[i].imgPath} />
            
        </div>
        <div class="productInfo">
        <span class="productName">${data[i].name}</span>
        <span class="productPrice">${data[i].price}</span>
        <button class="buyBtn">Купить</button>
        </div>
        </div>
        `;
    }
     
    let buyBtns =
    document.querySelectorAll(".buyBtn");

    for (let i = 0; i< buyBtns.length;i++){
     buyBtns[i].addEventListener("click", function (){
        buyBtns[i].innerHTML = "В корзине"
        cartData.push({ ...data[i], count: 1});
     });   
    }

}

renderProducts();
    