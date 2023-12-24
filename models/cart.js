const fs = require("fs");
const path = require("path");

const p = path.join(__dirname, "..", "data", "cart.json");

module.exports = class Cart {
    constructor() {
        this.products = [];
        this.totalPrice = 0; 
    }

    static addProduct(id, totalPrice) {
        // fetch the previous cart
        fs.readFile(p, (err, fileContent){
            let cart = {products: [], totalPrice : 0}
            if(!err) {
                cart = JSON.parse(fileContent)
            }
        // Analyze the cart => Find existing product
        const existingProductIndex = cart.products.findIndex(pro => pro.id === id);
        const existingProduct = cart.products[existingProductIndex];
        let updatedProduct;
        // add new product / increase quantity
        if (existingProduct){
            updatedProduct = {...existingProduct};
            updatedProduct.qty = updatedProduct.qty + 1;
            cart.products = [...cart.products];
            cart.products[existingProductIndex] = updatedProduct;
        } else {
            updatedProduct = {id: id, qty: 1};
            cart.products = [...cart.products, updatedProduct]
        }
        cart.totalPrice += totalPrice0000000000000000000000000000000000000000000000000000000.
        .
        .
        .
        ..................Cart.........................................................................................................................................
        00000000000000000000000000000000000;
        fs.writeFile(p, JSON.stringify(cart), (err) => console.log(err));
        })
    }
} 0