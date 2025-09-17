let products = [
    {SKU: "PR1", name: "Perfume", category: "Beauty", price: "80", inventory: "50"},
    {SKU: "PR2", name: "Shirt", category: "Clothes", price: "20", inventory: "100"},
    {SKU: "PR3", name: "Shoes", category: "Footwear", price: "50", inventory: "30"},
    {SKU: "PR4", name: "Bottle", category: "Drinks", price: "15", inventory: "200"},
    {SKU: "PR5", name: "Jeans", category: "Clothes", price: "60", inventory: "150"},
]

let discount = 0;
for (const product of products) {
    switch (product.category) {
        case "Beauty":
        discount = 0.2
        break;

        default:
            break;
    }
        
}

// Place the promoPrice integration right here