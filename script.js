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

let cartIcon = document.querySelector(".cartIcon");
let cartModal = document.querySelector(".cartModal");

cartIcon.addEventListener("click", function () {
    cartModal.classList.toggle("hide");
});

let cartModalLeftBlock = document.querySelector(".cartModalLeftBlock");
let productCardsWrapper = document.querySelector(".productCardsWrapper");
let cartModalOrderSum = document.querySelector(".cartModalOrderSum")

document.querySelector(".introbtn").addEventListener("click", function () {
    productCardsWrapper.scrollIntoView({
        behavior: "smooth",
    });
});

function renderProducts() {
    for (let i = 0; i < data.length; i++) {
        productCardsWrapper.innerHTML += `
        <div class="productCard">
        <div class="productImg">
            <img src=${data[i].imgPath} />
            
        </div>
        <div class="productInfo">
        <span class="productName">${data[i].name}</span>
        <span class="productPrice">${data[i].price} $</span>
        <button class="buyBtn">Купить</button>
        </div>
        </div>
        `;
    }

    let buyBtns = document.querySelectorAll(".buyBtn");

    for (let i = 0; i < buyBtns.length; i++) {
        buyBtns[i].addEventListener("click", function () {
            buyBtns[i].innerHTML = "В корзине";
            buyBtns[i].disabled = true
            cartData.push({ ...data[i], count: 1 });
            renderCart();
        });
    }
}

renderProducts();

function calcTotalSum() {
    let sum = 0;
    for (let i = 0; i < cartData.length; i++) {
        sum += cartData[i].price * cartData[i].count;
    }

    cartModalOrderSum.innerHTML = sum + " $";
}

function renderCart() {
    calcTotalSum();
    cartModalLeftBlock.innerHTML = "";
    for (let i = 0; i < cartData.length; i++) {
        cartModalLeftBlock.innerHTML += `
    <div class="cartModalProduct">
    <div class="cartModalProductImg">
    <img src=${cartData[i].imgPath} />
    </div>
    <div class="cartModalProductInfo">
      <span class="cartModalProductName">${cartData[i].name}</span>
      <span class="cartModalProductPrice">${cartData[i].price} $</span>
    </div>
    <div class="cartModalCounter">
      <button class="cartModalCounterDec">-</button>
    <span class="cartModalProductCount">${cartData[i].count}</span>
      <button class="cartModalCounterInc">+</button>
    </div>
  </div>`;

    }

    let incBtns = document.querySelectorAll(".cartModalCounterInc");
    let decBtns = document.querySelectorAll(".cartModalCounterDec");
    let productCount = document.querySelectorAll(".cartModalProductCount");

    for (let i = 0; i < cartData.length; i++) {
        incBtns[i].addEventListener("click", function () {
            cartData[i].count += 1;
            productCount[i].innerHTML = cartData[i].count;
            calcTotalSum();
        });

        decBtns[i].addEventListener("click", function () {
            cartData[i].count -= 1;
            productCount[i].innerHTML = cartData[i].count;
        });
    }
}
