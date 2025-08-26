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

let prductsContainer = document.getElementById('products-container');

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


function appendingCard(arr, itemsContainer) {
    itemsContainer.innerHTML = '';
    arr.forEach((el, index) => {
        itemsContainer.innerHTML += `
            <div class="w-full shadow-sm shadow-secondary bg-white rounded-2xl overflow-hidden" id="${index}">
                <div class="main-image relative flex-1 aspect-[4/3] object-cover" id="main-image">
                    <img class="w-full h-full" src="${el.images[0]}" alt="">
                    <span class="hidden rounded-lg py-1 px-2 text-sm bg-danger text-white absolute top-4 left-4"
                        id="is-left-stock">No Stock</span>
                    <span
                        class="hidden rounded-lg py-1 px-2 text-sm bg-warning text-white absolute bottom-4 left-4"
                        id="is-discount">${-1*el.discountPercentage}</span>
                    <div class="absolute top-4 right-4" id="card-btns">
                        <button class="cursor-pointer bg-light/50 hover:bg-white p-1 rounded-md text-primary"
                            id="show-details-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-square-pen size-5">
                                <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path
                                    d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z">
                                </path>
                            </svg>

                        </button>
                        <button class="cursor-pointer bg-light/50 hover:bg-white p-1 rounded-md text-primary"
                            id="add-to-favorite-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div class=" px-4 pt-10 pb-8 leading-8 flex-2" id="product-info">
                    <p class="text-sm font-semibold" id="title">
                        ${el.title}
                    </p>

                    <p class="text-lg font-semibold" id="brand">
                        <span class="font-bold text-primary">Brand </span>: ${el.brand}
                    </p>

                    <p class="text-primary/70 text-sm" id="description">
                        ${el.description}
                    </p>

                    <div id="rating-stars">
                        <i class="fa-solid fa-star fa-sm text-warning" data-rating></i>
                        <i class="fa-solid fa-star fa-sm text-warning" data-rating></i>
                        <i class="fa-solid fa-star fa-sm text-warning" data-rating></i>
                        <i class="fa-solid fa-star fa-sm text-warning" data-rating></i>
                        <i class="fa-solid fa-star fa-sm text-warning" data-rating></i>
                        <span class="text-primary/70 text-sm">${el.rating}</span>
                    </div>
                    <div class=" flex justify-between items-center" id="Purchase-information">
                        <div class="flex gap-3 items-center" id="Prices">
                            <p class="text-2xl font-bold text-purple" id="final-price">$${el.price}</p>
                            <p class="text-sm text-primary/70 line-through" id="original-price">$${el.price - (el.discountPercentage*el.price / 100)}</p>
                        </div>
                        <p class="hidden text-sm bg-light rounded-lg py-1 px-4 " id="left-quantity">5 left</p>
                </div>
            </div>`
    });
};

fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(data => {
        const apiProducts = data.products.filter(p =>
            p.category === "fragrances" || p.category === "beauty"
        ).map(normalizeProduct);
        let products = [...localProducts, ...apiProducts];
        appendingCard(products, prductsContainer);
        // console.log(filtered);
    });

