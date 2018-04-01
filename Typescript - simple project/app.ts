class Product
{
   id : number;
   category : string;
   description : string;
   price : number;

   constructor(_id: number, _category : string, _description : string, _price : number)
   {
       this.id = _id;
       this.category = _category;
       this.description = _description;
       this.price = _price;
   }

   getProduct()
   {
    return "Product Infos : " + " Id : " + this.id + " - " + " Category: " + this.category +  " - " +
     " Description : " + this.description + " - " + "Price : " + this.price; 
   }
}