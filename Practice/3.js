document.addEventListener('DOMContentLoaded', function () {
    let products = document.querySelector('.products')
async function fetchProducts(url) {
    let data = await fetch(url);
    let response = await data.json();
   
for (let i = 0; i < response.length; i++){
    let description = response[i].description;
    products.innerHTML += `    
    <div class="product">
    <img src="${response[i].image}" alt="" class="product-img">
    <div class="product-content">
    <h2 class="product-title">${response[i].title}</h2>
    <h4 class="product-category">${response[i].category}</h4>
    <p class="product-description">${description.length > 20 ? description.substring(0, 20).concat('....') : description}</p>
    <div class="procuct-price-container">
        <h3 class="product-price">${response[i].price} sek</h3>
        <a href="order.html" data-productId="" class="add-to-cart">Beställ</a>
    </div>
</div>
    </div>
`;
}

};
fetchProducts('https://fakestoreapi.com/products');
});
