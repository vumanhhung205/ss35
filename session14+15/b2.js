"use strict";
class Product1 {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class CartProduct extends Product1 {
    constructor(id, name, price, quantity) {
        super(id, name, price);
        this.quantity = quantity;
    }
    calculatePrice() {
        return this.quantity * this.price;
    }
    increaseQuantity() {
        this.quantity++;
    }
    decreaseQuantity() {
        this.quantity--;
    }
}
class ShopProduct extends Product1 {
}
