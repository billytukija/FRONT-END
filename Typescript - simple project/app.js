var Product = /** @class */ (function () {
    function Product(_id, _category, _description, _price) {
        this.id = _id;
        this.category = _category;
        this.description = _description;
        this.price = _price;
    }
    Product.prototype.getProduct = function () {
        return "Product Infos : " + " Id : " + this.id + " - " + " Category: " + this.category + " - " +
            " Description : " + this.description + " - " + "Price : " + this.price;
    };
    return Product;
}());
