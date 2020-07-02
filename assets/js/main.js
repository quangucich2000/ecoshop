const listProducts = document.getElementById('list-products');

let products = [
    {
        id: 1,
        src: "./assets/img/77002_XXX_v1.jpg",
        name: "Angelica",
        price: 12
    },
    {
        id: 2,
        src: "./assets/img/77002_XXX_v1.jpg",
        name: "Angelica",
        price: 12
    },
    {
        id: 3,
        src: "./assets/img/77002_XXX_v1.jpg",
        name: "Angelica",
        price: 12
    },
    {
        id: 4,
        src: "./assets/img/77002_XXX_v1.jpg",
        name: "Angelica",
        price: 12
    },
    {
        id: 5,
        src: "./assets/img/77002_XXX_v1.jpg",
        name: "Angelica",
        price: 12
    },
    {
        id: 6,
        src: "./assets/img/77002_XXX_v1.jpg",
        name: "Angelica",
        price: 12
    },
    {
        id: 7,
        src: "./assets/img/77002_XXX_v1.jpg",
        name: "Angelica",
        price: 10
    },
    {
        id: 8,
        src: "./assets/img/77002_XXX_v1.jpg",
        name: "Angelica",
        price: 12
    },
    {
        id: 9,
        src: "./assets/img/77002_XXX_v1.jpg",
        name: "Angelica",
        price: 12
    },
    {
        id: 10,
        src: "./assets/img/77002_XXX_v1.jpg",
        name: "Angelica",
        price: 12
    }
]



let carts = [
    {
        id: 1,
        src: "./assets/img/77002_XXX_v1.jpg",
        name: "Angelica",
        price: 12,
        count: 1
    },
    {
        id: 3,
        src: "./assets/img/77002_XXX_v1.jpg",
        name: "Angelica",
        price: 12,
        count: 2
    }
]

function renderProducts(products) {
    let contentListProducts = products.map((product) => {
        return `
        <div class="col l-2-4 m-4 c-6">
            <div class="product-item">
                <img class="product-item__img" src=${product.src} alt="">
                <div class="product-item__main">
                    <div class="product-item__info">
                        <div class="product-item__info-price">
                        ${product.price} 
                        </div>
                        <div class="product-item__info-name">
                        ${product.name} 
                        </div>
                    </div>
                    <div class="product-item__control">
                        <i data-id="${product.id}" class="product-item__control-btn fas fa-plus-circle"></i>
                    </div>
                </div>
            </div>
        </div>
        `
    })

    listProducts.innerHTML = contentListProducts.join('');

}
listProducts.addEventListener('click', onProductClick);
function onProductClick(e) {
    const button = parseInt(e.target.dataset.id);
    const newCart = products.find(product => product.id === button);
    const checkCart = carts.findIndex(cart => cart.id === button);
    if (checkCart >= 0) {
        carts[checkCart].count = carts[checkCart].count + 1;
        renderSmallCarts(carts)
        renderCarts(carts)
        renderSumCost()
    }
    else {
        carts.push({ ...newCart, count: 1 });
        renderSmallCarts(carts)
        renderCarts(carts)
        renderSumCost()
    }
    console.log(carts)
}


// --------cart-------------------------


function renderSmallCarts(carts) {
    const listSmallCarts = document.getElementById('cart__list')
    let contentListSmallCarts = carts.map((cart) => {
        return `
        <li class="cart__list-item">
            <img src=${cart.src} alt="">
        </li>
        `
    })
    listSmallCarts.innerHTML = contentListSmallCarts.join('');
}

function renderCarts(carts) {
    const listCarts = document.getElementById('bought__cost-list');
    let contentListCarts = carts.map((cart) => {
        return `
        <li class="bought__cost-item">
            <div class="bought__cost-item-info">
                <img src=${cart.src} alt=""
                    class="bought__cost-item-img">
                <div class="bought__cost-item-count">
                    ${cart.count} X
                </div>
                <div class="bought__cost-item-name">
                    ${cart.name}
                </div>
            </div>
            <div class="bought__cost-item-cost">
                $${cart.price * cart.count}
            </div>
        </li>
        `
    })

    listCarts.innerHTML = contentListCarts.join('')
}

function renderSumCost() {
    let sum = 0;
    let delivery = 0;
    for (const cart of carts) {
        sum += cart.price * cart.count;
    }
    if (sum < 50) {
        sum += 50;
        delivery = 50;
    }
    const contentSumCart = document.getElementById('bought__cost-total-cost');
    const costDelivary = document.getElementById('cost__delivary');

    costDelivary.innerText = `$${delivery}`
    contentSumCart.innerText = `$${sum}`;
}


renderProducts(products)
renderSmallCarts(carts)
renderCarts(carts)
renderSumCost()

