import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String,
  price: Number,
  size: String,
  bed: String,
  quantity: Number,
});

// Conver "_id" to "id"
cartSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
