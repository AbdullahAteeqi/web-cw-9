let products = [
    { name: "Brulee", price: 20 },
    { name: "Oreo", price: 30 },
    { name: "Dates", price: 50 }
]
let cart = []
let total = 0
function addToCart(index) {
    let product = products[index]
    cart.push(product)
    console.log(cart)
    let list = document.getElementById("list");
    list.innerHTML += ` ${product.name}, ${product.price}  `;
    /////////
    //شغل الtotal/////

    // total = total + product.price;
    total += product.price;
    let totprice = document.getElementById(`total`).innerText = `total: ${total}`;

}