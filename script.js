let shop = document.getElementById("shop");

/**
 * Basket to hold all the selected items
 */
let basket = JSON.parse(localStorage.getItem("data")) || [];

/**
 * Function to generate the shop with product cards
 */
let generateShop = (filteredItems = shopItemsData) => {
    return (shop.innerHTML = filteredItems
        .map((x) => {
            let { id, name, desc, img, price } = x;
            let search = basket.find((y) => y.id === id) || [];
            return `
    <div id=product-id-${id} class="item">
      <img width="220" src=${img} alt="">
      <div class="details">
        <h3>${name}</h3>
        <p>${desc}</p>
        <div class="price-quantity">
          <h2>$ ${price} </h2>
          <div class="buttons">
            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
            <div id=${id} class="quantity">${search.item === undefined ? 0 : search.item
                }</div>
            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
          </div>
        </div>
      </div>
  </div>
    `;
        })
        .join(""));
};

// Initial display of products
generateShop();

/**
 * Increment the selected product item quantity by 1
 */
let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if (search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    } else {
        search.item += 1;
    }

    console.log(basket);
    update(selectedItem.id);
    localStorage.setItem("data", JSON.stringify(basket));
};

/**
 * Decrement the selected product item quantity by 1
 */
let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if (search === undefined) return;
    else if (search.item === 0) return;
    else {
        search.item -= 1;
    }

    update(selectedItem.id);
    basket = basket.filter((x) => x.item !== 0);
    console.log(basket);
    localStorage.setItem("data", JSON.stringify(basket));
};

/**
 * Update the quantity of selected items
 */
let update = (id) => {
    let search = basket.find((x) => x.id === id);
    document.getElementById(id).innerHTML = search.item;
    calculation();
};

/**
 * Calculate total amount of selected items
 */
let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

/**
 * Toggle filter menu visibility
 */
function toggleFilterMenu() {
    let filterMenu = document.getElementById("filterMenu");
    if (filterMenu.style.display === "none") {
        filterMenu.style.display = "block";
    } else {
        filterMenu.style.display = "none";
    }
}

/**
 * Apply Filters based on the selected criteria
 */
function applyFilters() {
    let selectedType = document.getElementById("sareeType").value;
    let selectedColor = document.getElementById("color").value;
    let selectedPrice = document.getElementById("price").value;

    let filteredItems = shopItemsData.filter((item) => {
        let matchType = selectedType === "all" || item.type === selectedType;
        let matchColor = selectedColor === "all" || item.color === selectedColor;
        let matchPrice = selectedPrice === "all" || (
            (selectedPrice === "low" && item.price < 100) ||
            (selectedPrice === "medium" && item.price >= 100 && item.price <= 300) ||
            (selectedPrice === "high" && item.price > 300)
        );

        return matchType && matchColor && matchPrice;
    });

    generateShop(filteredItems);
}

/**
 * Sort Products based on selected criteria
 */
function sortProducts() {
    let sortValue = document.getElementById("sort").value;
    let sortedItems = [...shopItemsData];

    switch (sortValue) {
        case "priceLowHigh":
            sortedItems.sort((a, b) => a.price - b.price);
            break;
        case "priceHighLow":
            sortedItems.sort((a, b) => b.price - a.price);
            break;
        case "newArrivals":
            sortedItems.sort((a, b) => new Date(b.arrivalDate) - new Date(a.arrivalDate));
            break;
        default:
            // Default sort by popularity (assuming popularity is defined)
            sortedItems.sort((a, b) => b.popularity - a.popularity);
            break;
    }

    generateShop(sortedItems);
}
