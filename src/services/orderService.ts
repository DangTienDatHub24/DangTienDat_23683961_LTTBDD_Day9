import { api } from "../api/client";
import { Order, OrderItem, PaymentMethod, ShippingAddress } from "../types";

export interface NewOrder {
  userId: number;
  items: OrderItem[];
  total: number;
  address: ShippingAddress;
  paymentMethod: PaymentMethod;
}

// Tạo đơn hàng mới với trạng thái chờ xử lý và thời gian hiện tại.
export async function createOrder(payload: NewOrder): Promise<Order> {
  const res = await api.post<Order>("/orders", {
    ...payload,
    status: "pending",
    createdAt: new Date().toISOString(),
  });
  return res.data;
}

// TODO BT9.3: GET /orders?userId=…&_sort=createdAt&_order=desc  (mới nhất lên đầu)
export async function getOrdersByUser(userId: number): Promise<Order[]> {
  void userId;
  throw new Error("TODO BT9.3: chưa viết getOrdersByUser");
}
