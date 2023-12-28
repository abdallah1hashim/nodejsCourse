const mongodb = require("mongodb");
const getdb = require("../util/database").getDb;

class User {
  constructor(username, email, _id, cart) {
    this.email = email;
    this.username = username;
    this._id = _id ? _id : null;
    this._cart = cart;
  }

  save() {
    const db = getdb();
    return db.collection("users").insertOne(this);
  }

  addToCart(product) {
    // const cartProduct = this.cart.items.findIndex(cp => {
    //   return cp._id === product._id
    // })
    const updatedProduct = { items: [{ ...product, quantity: 1 }] };
    const db = getdb();
    return db
      .collection("user")
      .updatedOne(
        { _id: new mongodb.ObjectId(this._id) },
        { $set: { cart: new mongodb.ObjectId(updatedProduct) } }
      );
  }

  static findById(userId) {
    const db = getdb();
    return db
      .collection("users")
      .findOne({ _id: new mongodb.ObjectId(userId) })
      .then((user) => {
        return user;
      })
      .catch((err) => console.log(err));
  }
}

module.exports = User;
