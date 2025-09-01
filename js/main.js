let productsContainer = document.getElementById('products-container');
let searchProductInput = document.querySelector('[name="search-product"]');
let searchWishProductInput = document.querySelector('[name="search-wish-product"]');
let wishListBody = document.getElementById('wish-list-body');
let backgroundWish = document.getElementById('wish-is-empty');
let wishListContainer = document.getElementById('wish-list-container');
let wishListCounter = document.querySelectorAll(".wish-list-counter");
let displayWishBtn = document.getElementById('display-wishlist-btn');
let cartProductsBody = document.getElementById('cart-products-body');
let backgroundCart = document.getElementById('cart-is-empty');
let cartProductContainer = document.getElementById('cart-products-container');
let cartCounter = document.querySelectorAll(".cart-counter");
let displayCartBtn = document.getElementById('display-cart-btn');
let closeBtns = document.querySelectorAll('.close-btn');
let netPayment = document.getElementById("net-payable");
let netPaymentContainer = document.getElementById("payment-container");

// let cartCounter = document.getElementById("cart-counter");
// let closeWishListBtn = document.getElementById('close-wish-btn');


function normalizeProduct(p) {
    return {
        id: p.id,
        title: p.title,
        brand: p.brand || "Unknown",
        description: p.description || "No description",
        category: p.category,
        price: p.price || 0,
        discountPercentage: p.discountPercentage,
        rating: p.rating || 0,
        stock: p.stock ?? 0,
        tags: p.tags || [],
        images: p.images && p.images.length ? p.images : ["default.jpg"]
    };
}


let localProducts = [
    {
        id: 1,
        title: "Hyponotic-Poison Perfume 100 ml",
        brand: "Dior",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, corporis placeat architecto harum dignissimos fugit.",
        category: "fragrances",
        price: 65.25,
        discountPercentage: 14.72,
        rating: 3.8,
        stock: 20,
        tags: ['fragrances', 'perfumes'],
        images: ["./images/products/hyponotic-poison-4.jpg", "./images/products/hyponotic-poison.jpg", "./images/products/hyponotic-poison-2.jpg", "./images/products/hyponotic-poison-4.jpg"],

    },
    {
        id: 2,
        title: "Maange Makeup Brush Set",
        brand: "Manage",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, corporis placeat architecto harum dignissimos fugit.",
        category: "beauty",
        price: 75.52,
        discountPercentage: 12.5,
        rating: 4.8,
        stock: 12,
        tags: ['beauty', 'brush'],
        images: ["./images/products/maange-2.jpg", "./images/products/maange-2.jpg", "./images/products/maange-3.jpg", "./images/products/maange-1.jpg"],

    },
    {
        id: 3,
        title: "mademoiselle Perfume 90 ml",
        brand: "Chanel",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, corporis placeat architecto harum dignissimos fugit.",
        category: "fragrances",
        price: 90.87,
        discountPercentage: 18.49,
        rating: 4.9,
        stock: 14,
        tags: ['fragrances', 'perfumes'],
        images: ["./images/products/mademoiselle-1.jpg", "./images/products/mademoiselle-2.jpg", "./images/products/mademoiselle-3.jpg"],

    },
    {
        id: 4,
        title: "Shiseido Lipstick 20g",
        brand: "Shiseido",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, corporis placeat architecto harum dignissimos fugit.",
        category: "beauty",
        price: 12.6,
        discountPercentage: 0,
        rating: 4.3,
        stock: 35,
        tags: ['beauty', 'lipstick'],
        images: ["./images/products/shiseido-1.jpg", "./images/products/shiseido-2.jpg", "./images/products/shiseido-3.jpg", "./images/products/shiseido-4.jpg"],

    },
    {
        id: 5,
        title: "Lash Senational Mascara  30ml",
        brand: "Maybelline",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, corporis placeat architecto harum dignissimos fugit.",
        category: "beauty",
        price: 35,
        discountPercentage: 5,
        rating: 2.6,
        stock: 16,
        tags: ['fragrances', 'mascara'],
        images: ["./images/products/lash-senational-1.jpeg", "./images/products/lash-senational-2.jpeg", "./images/products/lash-senational-3.jpeg"],

    },

];

function renderProducts(arr, itemsContainer) {
    itemsContainer.innerHTML = '';
    arr.forEach((el, index) => {
        el.id = index;
        itemsContainer.innerHTML += `
            <div class="card w-full shadow-sm shadow-secondary bg-white rounded-2xl overflow-hidden" id="${index}">
                <div class="main-image relative aspect-[4/3] object-cover">
                    <img class="w-full h-full" src="${el.images[0]}" alt="">
                    <span class="hidden rounded-lg py-1 px-2 text-sm bg-danger text-white absolute top-4 left-4"
                    id="is-left-stock">No Stock</span>
                    <span
                    class="hidden rounded-lg py-1 px-2 text-sm bg-warning text-white absolute bottom-4 left-4"
                    id="is-discount">${-1 * el.discountPercentage}</span>
                    <div class="absolute top-4 right-4" id="card-btns">
                        <button class="add-to-cart-btn edit-product cursor-pointer bg-light/50 hover:bg-white p-1 rounded-md text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-square-pen size-6">
                                <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path
                                d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z">
                                </path>
                            </svg>
                                
                        </button>
                        <button class="add-to-favorite-btn cursor-pointer bg-light/50 hover:bg-white p-1 rounded-md text-primary ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" fill="none" class="size-6 heart-figure">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                        </button>
                    </div>
                </div>
                                
                <div class="product-info px-4 pt-10 pb-8 leading-8">
                    <p class="text-sm font-semibold flex-1">
                    ${el.title}
                    </p>
                    
                    <p class="text-lg font-semibold">
                    <span class="font-bold text-primary">Brand </span>: ${el.brand}
                    </p>
                    
                    <p class="text-primary/70 text-sm flex-2">
                        ${el.description}
                    </p>
                    
                    <div class="rating-stars">
                        <i class="fa-solid fa-star fa-sm text-warning" data-rating></i>
                        <i class="fa-solid fa-star fa-sm text-warning" data-rating></i>
                        <i class="fa-solid fa-star fa-sm text-warning" data-rating></i>
                        <i class="fa-solid fa-star fa-sm text-warning" data-rating></i>
                        <i class="fa-solid fa-star fa-sm text-warning" data-rating></i>
                        <span class="text-primary/70 text-sm">${el.rating}</span>
                    </div>
                    <div class=" flex justify-between items-center" id="Purchase-information">
                        <div class="flex gap-3 items-center" id="Prices">
                            <p class="text-2xl font-bold text-purple" id="final-price">$${parseFloat((el.price - (el.discountPercentage * el.price / 100)).toFixed(2))}</p>
                            <p class="text-sm text-primary/70 line-through" id="original-price">$${el.price}</p>
                        </div>
                        <p class="hidden text-sm bg-light rounded-lg py-1 px-4 " id="left-quantity">5 left</p>
                    </div>
                    <div class="product-btns">
                        <button
                            class="view-details-btn bg-primary hover:bg-primary/90 mt-8 outline-none py-2 text-sm font-bold rounded-md text-white flex items-center justify-center gap-1 cursor-pointer w-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                                class="lucide lucide-eye-icon lucide-eye">
                                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/>
                                <circle cx="12" cy="12" r="3"/>
                            </svg>
                            <p>View Details</p>
                        </button>
                    </div>
            </div>`


    });
};


function renderWishProducts(arr) {
    wishListBody.innerHTML = '';
    arr.forEach((el, index) => {
        el.id = `wish-${index}`
        wishListBody.innerHTML += `
            <div class="parent-close card w-full shadow-sm shadow-secondary bg-white rounded-2xl p-4 mb-3" data-close = ${index} data-position = ${el.positionOriginal}>
                <div class="card-body flex items-center gap-4 mb-3">
                    <div
                        class="main-image aspect-[1/1] object-cover rounded-2xl overflow-hidden shadow-sm shadow-primary/70">
                        <img class="w-full h-full" src="${el.images[0]}" alt="">
                    </div>

                    <div class="wish-product-info leading-8">
                        <p class="text-xs font-semibold">
                            ${el.title}
                        </p>
                        <p class="text-md font-semibold">
                            <span class="font-bold text-primary">Brand </span>: ${el.brand}
                        </p>
                        <p class="text-primary/70 text-xs">
                            ${el.description}
                        </p>
                        <div class=" flex justify-between items-center" id="Purchase-information">
                            <div class="flex gap-3 items-center" id="Prices">
                                <p class="text-xl font-bold text-purple" id="final-price">$${parseFloat((el.price - (el.discountPercentage * el.price / 100)).toFixed(2))}</p>
                                <p class="text-xs text-primary/70 line-through" id="original-price">$${el.price}</p>
                            </div>
                            <p class="hidden text-xs bg-light rounded-lg py-1 px-4 " id="left-quantity">5 left</p>
                        </div>
                    </div>
                </div>
                <div class="product-btns flex gap-3">
                    <button
                        class="view-details-btn bg-primary hover:bg-primary/90 outline-none py-2 text-xs font-semibold rounded-md text-white flex items-center justify-center gap-1 cursor-pointer w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" class="lucide lucide-eye-icon lucide-eye">
                            <path
                                d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0">
                            </path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        <p>View Details</p>
                    </button>
                    <button
                        class="close-btn remove-from-wish-btn bg-danger hover:bg-danger/90 outline-none py-2 text-xs font-semibold rounded-md text-white flex items-center justify-center gap-1 cursor-pointer w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" class="lucide lucide-trash-icon lucide-trash">
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                            <path d="M3 6h18" />
                            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        </svg>
                        <p>Remove From Wish</p>
                    </button>
                </div>
            </div>
        `
    });

    updateCounter(wishListCounter, wishListProducts);
    let removeFromWishBtn = document.querySelectorAll(".remove-from-wish-btn");
    let addToWishBtns = document.querySelectorAll(".add-to-favorite-btn");

    removeFromWishBtn.forEach(btn => {
        btn.addEventListener("click", () => {
            let parentCard = btn.closest(".parent-close");
            let position = parentCard.getAttribute("data-close");
            let positionOriginal = parentCard.getAttribute("data-position");
            toggleHeart(addToWishBtns[positionOriginal]);
            wishListProducts.splice(position, 1);
            toggleBackground(wishListProducts, backgroundWish);
            renderWishProducts(wishListProducts);
        });
    });


}

function renderCartProducts(arr) {
    cartProductsBody.innerHTML = '';
    arr.forEach((el, index) => {
        el.id = `cart-${index}`
        cartProductsBody.innerHTML += `
            <div class="parent-close card w-full shadow-sm shadow-secondary bg-white rounded-2xl p-4 mb-3"
                data-close="${index}" data-position=${el.positionOriginal}>
                <div class="card-body flex items-center gap-4 mb-3">
                    <div
                        class="main-image aspect-[1/1] w-25 h-25 rounded-2xl overflow-hidden shadow-sm shadow-primary/70">
                        <img class="w-full h-full" src="${el.images[0]}" alt="">
                    </div>
                    <div class=" cart-product-info leading-8">
                        <p class="text-xs font-semibold">
                            ${el.title}
                        </p>
                        <p class="text-md font-semibold">
                            <span class="font-bold text-primary">Brand </span>: ${el.brand}
                        </p>
                        <div class=" flex justify-between items-center" id="Purchase-information">
                            <div class="flex gap-3 items-center" id="Prices">
                                <p class="text-xl font-bold text-purple" id="final-price">$${parseFloat((el.price - (el.discountPercentage * el.price / 100)).toFixed(2))}</p>
                                <p class="text-xs text-primary/70 line-through" id="original-price">$${el.price}</p>
                            </div>
                            <p class="hidden text-xs bg-light rounded-lg py-1 px-4 " id="left-quantity">5 left
                            </p>
                        </div>
                    </div>
                </div>
                <div class="quantity-price-container flex items-center justify-between">
                    <div class="cart-quantity-btns flex gap-3 items-center justify-center">
                        <button
                            class="decrease-quantity-btn px-2 py-2 bg-danger hover:bg-danger/90 outline-none text-xs font-semibold rounded-md text-white cursor-pointer" data-stock="-">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-square-minus-icon lucide-square-minus">
                                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                <path d="M8 12h8"></path>
                            </svg>
                        </button>
                        <p class="quantity-container font-semibold tetx-xl "><span class="quantity">1</span><span> Pcs</span></p>
                        <button
                            class="increase-quantity-btn px-2 py-2 bg-green-400 hover:bg-green-500 outline-none text-xs font-semibold rounded-md text-white cursor-pointer" data-stock="+">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-square-plus-icon lucide-square-plus">
                                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                <path d="M8 12h8"></path>
                                <path d="M12 8v8"></path>
                            </svg>
                        </button>
                    </div>
                    <p class="total-price-container font-bold text-2xl underline underline-offset-8">
                        <span>$</span><span class="total-price">${parseFloat((el.price - (el.discountPercentage * el.price / 100)).toFixed(2))}</span>
                    </p>
                </div>
            </div>
        `
    });

    updateCounter(cartCounter, cartProducts);
    // let addToWishBtns = document.querySelectorAll(".add-to-favorite-btn");
    let removeFromCartBtn = document.querySelectorAll(".remove-from-cart-btn");
    let increaseQuantityBtns = document.querySelectorAll(".increase-quantity-btn");
    let decreaseQuantityBtns = document.querySelectorAll(".decrease-quantity-btn");
    let quantityInCart = document.querySelectorAll(".quantity");
    let totalPriceForEachProduct = document.querySelectorAll(".total-price");




    removeFromCartBtn.forEach(btn => {
        btn.addEventListener("click", () => {
            let parentCard = btn.closest(".parent-close");
            let position = parentCard.getAttribute("data-close");
            let positionOriginal = parentCard.getAttribute("data-position");
            // toggleHeart(addToWishBtns[positionOriginal]);
            cartProducts.splice(position, 1);
            toggleBackground(cartProducts, backgroundCart);
            renderCartProducts(cartProducts);
        });
    });
    let netPayementArr = [];
    let currentStock;
    let finalUnitPrice;

    increaseQuantityBtns.forEach((stockBtn, index) => {
        netPayementArr = [...totalPriceForEachProduct].map((e) => parseFloat(e.textContent));
        netPayment.textContent = netPayementArr.reduce((previous, current) => previous + current, 0);

        stockBtn.addEventListener("click", () => {
            netPayementArr = [];
            currentStock = parseInt(quantityInCart[index].textContent);
            quantityInCart[index].textContent = currentStock + 1;

            let unitPrice = cartProducts[index].price - (cartProducts[index].discountPercentage * cartProducts[index].price / 100);
            finalUnitPrice = (currentStock + 1) * unitPrice;
            totalPriceForEachProduct[index].textContent = finalUnitPrice.toFixed(2);
            netPayementArr = [...totalPriceForEachProduct].map(e => parseFloat(e.textContent));
            netPayment.textContent = netPayementArr.reduce((prev, curr) => prev + curr, 0).toFixed(2);

        });

    })

    decreaseQuantityBtns.forEach((stockBtnMinus, index) => {
        netPayementArr = [...totalPriceForEachProduct].map((e) => parseFloat(e.textContent));
        netPayment.textContent = netPayementArr.reduce((previous, current) => previous + current, 0);

        stockBtnMinus.addEventListener("click", () => {
    currentStock = parseInt(quantityInCart[index].textContent);

    if (currentStock > 1) {
        quantityInCart[index].textContent = currentStock - 1;

        let unitPrice = cartProducts[index].price * (1 - cartProducts[index].discountPercentage / 100);
        let finalUnitPrice = (currentStock - 1) * unitPrice;
        totalPriceForEachProduct[index].textContent = finalUnitPrice.toFixed(2);

        netPayementArr = [...totalPriceForEachProduct].map(e => parseFloat(e.textContent));
        netPayment.textContent = netPayementArr.reduce((prev, curr) => prev + curr, 0).toFixed(2);

    } else {
        cartProducts.splice(index, 1);
        renderCartProducts(cartProducts);
        toggleBackground(cartProducts, backgroundCart);
    }
});

    })
    if (cartProducts.length > 0) {
        netPaymentContainer.classList.replace("hidden", "flex");

    }
    else {
        netPaymentContainer.classList.replace("flex", "hidden");

    }

}

function updateCounter(counter, arr) {
    counter.forEach(co => {
        if (arr.length > 0) {
            co.classList.replace("hidden", "flex");
        }
        else {
            co.classList.replace("flex", "hidden");
        }
        co.textContent = arr.length;
    })
}

function toggleHeart(btn) {
    btn.firstElementChild.classList.toggle("fill-danger");
}

function toggleProduct(newArray, oldArray, indexInOldArray, renderFun) {
    positionInProductsArr = indexInOldArray;
    let newProduct = oldArray[positionInProductsArr];
    newProduct.positionOriginal = positionInProductsArr;
    let isProductContain = newArray.findIndex(o => o.id === newProduct.id)
    if (isProductContain === -1) {
        newArray.push(newProduct);
    } else {
        newArray.splice(isProductContain, 1);
    }
    renderFun(newArray);
}


let products = [];

/* Function to fetching data from api */
function getApiProducts() {
    return fetch("https://dummyjson.com/products")
        .then(res => res.json()) //convert from json opject to js object
        .then(data => data.products.filter(p => p.category === "fragrances" || p.category === "beauty").map(normalizeProduct));
};

async function init() {
    let apiProducts = await getApiProducts();
    products = [...localProducts, ...apiProducts];
    return products
}


/* Function to search of products */
function searchAllProducts(arr, searchContainer, renderFunction, searchInput) {
    let resultSearch = arr.filter(el => {
        let searchValue = searchInput.value.toLowerCase().trim();
        let found = false;
        for (key in el) {
            if (key !== "images" && String(el[key]).toLowerCase().includes(searchValue)) {
                found = true;
            }
        }
        return found;
    });
    renderFunction(resultSearch, searchContainer);

};

/* Call renderProducts Function to display all product card on home page */
let wishListProducts = [];
let cartProducts = [];
init().then(products => {
    renderProducts(products, productsContainer);

    let addToWishBtns = document.querySelectorAll(".add-to-favorite-btn");
    addToWishBtns.forEach((item, index) => {
        item.addEventListener("click", () => {
            toggleHeart(item);
            toggleProduct(wishListProducts, products, index, renderWishProducts);
            toggleBackground(wishListProducts, backgroundWish)
        });
    });

    let addToCartBtns = document.querySelectorAll(".add-to-cart-btn");
    addToCartBtns.forEach((item, index) => {
        item.addEventListener("click", () => {
            toggleProduct(cartProducts, products, index, renderCartProducts);
            toggleBackground(cartProducts, backgroundCart);
        });
    });
});

function toggleBackground(arr, background) {
    if (arr.length > 0) {
        background.classList.add("hidden");
    }
    else {
        background.classList.remove("hidden");
    }
}

searchProductInput.addEventListener("input", () => {
    init().then(products => {
        searchAllProducts(products, productsContainer, renderProducts, searchProductInput)

    })
});

searchWishProductInput.addEventListener("input", () => {
    searchAllProducts(wishListProducts, wishListBody, renderWishProducts, searchWishProductInput);
});

displayWishBtn.addEventListener("click", () => {
    wishListContainer.classList.replace("hidden", "flex");

});
displayCartBtn.addEventListener("click", () => {
    cartProductContainer.classList.replace("hidden", "flex");
    // cartProductContainer.classList.remove("hidden");

});

closeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.closest(".parent-close").classList.replace("flex", "hidden");

    })
});

