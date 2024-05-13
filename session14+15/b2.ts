class Product1{
    id:number;      
    name:string;
    price:number;
    constructor(id:number,name:string,price:number) {
        this.id=id;
        this.name=name;
        this.price=price;
    }
}
class CartProduct extends Product1{
    quantity:number;
    constructor(id:number,name:string,price:number,quantity:number) {
        super(id,name,price)
        this.quantity=quantity;
    }
    calculatePrice(){
        return this.quantity*this.price
    }
    increaseQuantity(){
        this.quantity++
    }
    decreaseQuantity(){
        this.quantity--
    }
}
class ShopProduct extends Product1{
    stock:number
}