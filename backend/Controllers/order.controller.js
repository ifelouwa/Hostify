import Order from "../Models/order.model.js";

// Create a new order
export const createOrder = async (req, res, next) => {
  try {
    const { items, totalPrice } = req.body;
    const order = await Order.create({ userId: req.user.id, items, totalPrice });
    res.status(201).json({ success: true, order });
  } catch (err) {
    next(err);
  }
};

// Get all orders (Admin) or user’s orders
export const getallOrders = async (req, res, next) => {
  try {
    const filter = req.user.role === "admin" ? {} : { userId: req.user.id };
    const orders = await Order.find(filter).sort({ createdAt: -1 });
    res.json({ success: true, orders });
  } catch (err) {
    next(err);
  }
};

// Update order status (Admin)
export const updateOrderStatus = async (req, res, next) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.json({ success: true, order });
  } catch (err) {
    next(err);
  }
};