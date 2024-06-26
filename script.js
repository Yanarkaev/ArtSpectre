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

  {
    id: 7,
    name: "Лес",
    price: 1200000,
    imgPath: "./assets/08.jpg",
  },

  {
    id: 8,
    name: "Речка в лесу",
    price: 1400000,
    imgPath: "./assets/1700084646_pictures-pibig-info-p-risunok-na-temu-krasota-rodnoi-prirodi-ins-1.jpg",
  },

  {
    id: 9,
    name: "Осень",
    price: 1600000,
    imgPath: "./assets/1700084663_pictures-pibig-info-p-risunok-na-temu-krasota-rodnoi-prirodi-ins-14.jpg",
  },

  {
    id: 10,
    name: "Река",
    price: 1100000,
    imgPath: "./assets/img-e863314b79402a20444c67293e083539-v.jpg",
  },

  {
    id: 11,
    name: "Пейзаж гор",
    price: 900000,
    imgPath: "./assets/sakmara.jpg",
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
let cartIconCount = document.querySelector(".cartIconCount");
let cartModalOrderSum = document.querySelector(".cartModalOrderSum");
let cartModalOrder = document.querySelector(".cartModalOrderInner");
let emptyCartBlock = document.querySelector(".emptyCartBlock");
let cartModalOrderBtn = document.querySelector(".cartModalOrderBtn");

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
      buyBtns[i].disabled = true;
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
  if (cartData.length === 0) {
    cartIconCount.style.display = "none";
    cartModalOrder.classList.add("hide");
    emptyCartBlock.classList.remove("hide");
  } else {
    cartIconCount.style.display = "flex";
    cartModalOrder.classList.remove("hide");
    emptyCartBlock.classList.add("hide");
  }

  cartIconCount.innerHTML = cartData.length;

  cartModalLeftBlock.innerHTML = "";
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
  let buyBtns = document.querySelectorAll(".buyBtn");

  for (let i = 0; i < cartData.length; i++) {
    incBtns[i].addEventListener("click", function () {
      cartData[i].count += 1;
      productCount[i].innerHTML = cartData[i].count;
      calcTotalSum();
    });

    decBtns[i].addEventListener("click", function () {
      if (cartData[i].count <= 1) {
        let index = data.indexOf(data.find((el) => el.id === cartData[i].id));
        buyBtns[index].disabled = false;
        buyBtns[index].innerHTML = "Купить";
        cartData.splice(i, 1);
        renderCart();
      } else {
        cartData[i].count -= 1;
        calcTotalSum();
      }
      productCount[i].innerHTML = cartData[i].count;
    });
  }
}

renderCart();

cartModalOrderBtn.addEventListener("click", function () {
  let buyBtns = document.querySelectorAll(".buyBtn");
  for (let i = 0; i < buyBtns.length; i++) {
    buyBtns[i].disabled = false;
    buyBtns[i].innerHTML = "Купить";
  }
  cartData = [];
  alert("Спасибо за покупку!");
  renderCart();
});
