const getDb = require("../util/database").getDb;

class Product {
  constructor(title, price, description, imgUrl) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imgUrl = imgUrl;
  }

  async save() {
    try {
      const db = getDb();
      const result = await db.collection("products").insertOne(this);
      return result;
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = Product;
