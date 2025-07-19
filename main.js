const largeImage = document.querySelector(".large-img-sneakers");
const mainThumbnails = document.querySelectorAll(".small-img-sneakers");
const lightboxImage = document.querySelector(".lightbox-gallery");
const closeIcon = document.querySelector(".close-icon");
const lightImage = document.querySelector(".light-sneakers");
const lightThumbs = document.querySelectorAll(".light-img-sneakers");
const previousIcon = document.querySelector(".previous-icon");
const nextIcon = document.querySelector(".next-icon");
const cartIcon = document.querySelector(".cart");
const cartEmpty = document.querySelector(".cart-empty p");
const cartInfo = document.querySelector(".cart-info");
const incre = document.querySelector(".increment-btn");
const decre = document.querySelector(".decrement-btn");
const totalQty = document.querySelector(".total-qty");
const productPrice = document.querySelector(".pro-price");
const addCart = document.querySelector(".add-to-cart-btn");
const cartCount = document.querySelector(".cart-count");
const donCart = document.querySelector(".dont-cart");
const checkOut = document.querySelector(".cart-button");
const menuIcon = document.querySelector(".menu-icon");
const exitIcon = document.querySelector(".exit-menu-icon");
const navMenu = document.querySelector("nav ul");
largeImage.addEventListener("click", () => {
    lightboxImage.style.display = "block";
    closeIcon.style.display = "block";
})

closeIcon.addEventListener("click", () => {
    closeIcon.style.display = "none";
    lightboxImage.style.display = "none";
})

mainThumbnails.forEach((thumbnail, index) => {
  index++;
  thumbnail.addEventListener("click", () => {
    mainThumbnails.forEach((thumb) => thumb.classList.remove("active"));
    thumbnail.classList.add("active");
    largeImage.src = `./Assets/images/image-product-${index}.jpg`;
  })
})

let Index = 1;

nextIcon.addEventListener("click", () => {
  Index++;
  if (Index > lightThumbs.length) {
    Index = 1;
  }
  lightImage.src = `./Assets/images/image-product-${Index}.jpg`;
  lightThumbs.forEach((thumb) => {
    thumb.classList.remove("active");
    lightThumbs[Index - 1].classList.add("active");
  })
});

previousIcon.addEventListener("click", () => {
  Index--;
  if (Index < 1) {
    Index = lightThumbs.length;
  } 
  lightImage.src = `./Assets/images/image-product-${Index}.jpg`;
  lightThumbs.forEach((thumb) => {
    thumb.classList.remove("active");
    lightThumbs[Index - 1].classList.add("active");
  })
})

cartIcon.addEventListener("click", () => {
  if (cartInfo.style.display === "block") {
    cartInfo.style.display = "none";
  } else {
    cartInfo.style.display = "block"
  if (qty === 0) {
    donCart.innerHTML = "";
  }  
  }
});

let price = 125;
let qty = 0;
let totalPrice;

incre.addEventListener("click", () => {
  qty++;
  totalQty.innerHTML = qty;
  totalPrice = price * qty;
  productPrice.innerHTML = "$" + totalPrice + ".00";
})

decre.addEventListener("click", () => {
  if (qty > 0) {
    qty--;
  totalQty.innerHTML = qty;
  totalPrice = price * qty;
  productPrice.innerHTML = "$" + totalPrice + ".00";
  }
});

addCart.addEventListener("click", () => {
  if (qty === 0) {
    cartCount.style.display = "none";
  } else {
    cartCount.style.display = "block"
  }
  cartCount.innerHTML = qty;
  donCart.innerHTML = "";

  let html = `<div class="dont-cart">
                            <div class="cart-info-content">
                            <img src="./Assets/images/image-product-1-thumbnail.jpg" class="cart-thumb"/>
                            <p>Fall Limited Edition Sneakers  <span>$125.00 <span>x</span> <span>${qty}</span> <span class="pro-price-total">$${totalPrice}.00</span> </span> </p>
                            <img src="./Assets/images/icon-delete.svg" alt="delete-icon" class="trash" />
                        </div>
                        <button class="cart-button">Checkout</button>
                        </div>`
  donCart.insertAdjacentHTML("afterbegin", html);
  cartEmpty.innerHTML = "";
});


donCart.addEventListener("click", (e) => {
  if (e.target.classList.contains("trash")) {
    donCart.innerHTML = "Your cart is Empty;"
    donCart.style.fontSize = "10px";
    donCart.style.marginLeft = "70px";
    donCart.style.marginTop = "30px";
    cartCount.style.display = "none"
  } else if(e.target.classList.contains("cart-button")) {
    donCart.innerHTML = "Your cart has been processed. Please hold while we proceed with your payment method.";
    donCart.style.fontSize = "10px";
    donCart.style.marginLeft = "0px";
    donCart.style.marginTop = "30px";
    cartCount.style.display = "none"
  }
})


menuIcon.addEventListener("click", () => {
  navMenu.style.display = "block";
  exitIcon.classList.add("active")
  menuIcon.style.display = "none";
});

exitIcon.addEventListener("click", () => {
  navMenu.style.display = "none";
  exitIcon.classList.remove("active");
  menuIcon.style.display = "block";
});

