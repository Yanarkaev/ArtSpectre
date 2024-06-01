// ЯВАСКРИПТ

let cartIcon = document.querySelector(".cartIcon");
let cartModal = document.querySelector(".cartModal");

cartIcon.addEventListener("click", function(){
    cartModal.classList.toggle("hide")
})


let data = [
    {
        id: 1,
        name: "Зима",
        price: 2500000,
        imgPath: "",
    },

    {
        id: 2,
        name: "Осень",
        price: 2800000,
        imgPath: "",
    },

    {
        id: 3,
        name: "Весна",
        price: 2700000,
        imgPath: "",
    },

    {
        id: 4,
        name: "Лето",
        price: 2200000,
        imgPath: "",
    },

    {
        id: 5,
        name: "Межсезонье",
        price: 2900000,
        imgPath: "",
    },
];

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

        </div>
        <div class="productInfo">
        <span class="productName">${data[i].name}</span>
        <span class="productPrice">${data[i].price}</span>
        <button class="buyBtn">Купить</button>
        </div>
        </div>
        `;
    }
}

renderProducts();
