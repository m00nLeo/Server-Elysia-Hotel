import { Router } from "express";
import Cart from "../model/cart";

const router = Router();

// Get all products
router.get("/", async (request, response) => {
  const cartSample = await Cart.find(request.query);

  response.json({
    carts: cartSample,
  });
});

// READ (Get) a product by Id
router.get("/:roomId", async (req, res) => {
  const cart = await Cart.findById(req.params.productId);

  if (!cart)
    return res.json({
      message: `Not Found Room with Id: '${req.params.productId}'`,
    });

  res.json(cart);
});

// CREATE (Post) / add a new product
router.post("/add", async (req, res) => {
  const cart = await Cart.create(req.body);
  res.json(cart);
});

// UPDATE (Put) a product by Id
router.put("/:Id", async (req, res) => {
  const cart = await Cart.findByIdAndUpdate(
    req.params.Id,
    req.body,
    { new: true }
  );

  res.json(cart);
});

// DELETE (Delete a product)
router.delete("/:Id", async (req, res) => {
  const cartProduct = await Cart.findByIdAndDelete(req.params.Id); 

  res.json(cartProduct);
});

export default router;
