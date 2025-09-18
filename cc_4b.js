let products = [
    {SKU: "PR1", name: "Perfume", category: "Beauty", price: 80, inventory: "50"},
    {SKU: "PR2", name: "Shirt", category: "Clothes", price: 20, inventory: "100"},
    {SKU: "PR3", name: "Shoes", category: "Footwear", price: 50, inventory: "30"},
    {SKU: "PR4", name: "Bottle", category: "Drinks", price: 15, inventory: "200"},
    {SKU: "PR5", name: "Jeans", category: "Clothes", price: 60, inventory: "150"},
]

let discount = 0;
for (const product of products) 
{ switch (product.category) {
        case "Beauty":
        discount = 0.2
        break;
        case "Drinks":
        case "Footwear":
        case "Clothes":
        discount = 0.1
        break;
        default:
            discount = 0;
            break;
    }
    // Place the promoPrice integration right here   
let promoPrice = product.price * (1-discount);
product.promoPrice = promoPrice;

    }
console.log(products)

const customers = [
    {id: 1, customerType: "regular", couponCode: "SAVE10", taxRate: 0.03,
    cart: [{sku: "PR4", qty: 3 }, {sku: "PR5", qty: 3 }]},
    {id: 2, customerType: "student", couponCode: "SAVE10", taxRate: 0.03,
    cart: [{sku: "PR3", qty: 2 }, {sku: "PR5", qty: 3 }]},
    {id: 3, customerType: "senior", couponCode: "SAVE10", taxRate: 0.03,
    cart: [{sku: "PR1", qty: 3 }, {sku: "PR2", qty: 3 }]} 
]