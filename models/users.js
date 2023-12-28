const mongodb = require("mongodb");
const getdb = require("../util/database").getDb;

class User {
  constructor(username, email, id, cart) {
    this.email = email;
    this.username = username;
    this._id = id ? id : null;
    this.cart = { items: [] };
  }

  save() {
    const db = getdb();
    return db.collection("users").insertOne(this);
  }

  addToCart(product) {
    // const cartProduct = this.cart.items.findIndex(cp => {
    //   return cp._id === product._id
    // })

    const updatedCart = { items: [{ ...product, quantity: 1 }] };
    const db = getdb();
    return db
      .collection("user")
      .updateOne(
        { _id: new mongodb.ObjectId(this._id) },
        { $set: { cart: updatedCart } }
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
