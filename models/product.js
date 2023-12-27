const { get } = require("../routes/admin");
const mongodb = require("mongodb");
const getDb = require("../util/database").getDb;

class Product {
  constructor(title, price, description, imgUrl, id) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imgUrl = imgUrl;
    this._id = id;
  }

  async save() {
    try {
    const db = getDb();
    let result;
    if(this._id){
       result = await db.collection("products").updateOne({_id: new mongodb.ObjectId(this._id)}, {$set: this});
    }
    if(!this._id){
       result = await db.collection("products").insertOne(this);
    }
      return result;
    } catch (err) {
      console.log(err);
    }
  }

  

  static fetchAll() {
    const db = getDb();
    return db
      .collection("products")
      .find()
      .toArray()
      .then((products) => {
        return products;
      })
      .catch((err) => console.log(err));
  }
  static findByID(prodId) {
    const db = getDb();
    return db
      .collection("products")
      .find({_id: new mongodb.ObjectId(prodId)})
      .next()
      .then((product) => {
        console.log(product);
        return product;
      })
      .catch((err) => console.log(err));
  }

}

module.exports = Product;
