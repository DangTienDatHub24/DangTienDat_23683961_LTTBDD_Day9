import { api } from "../api/client";
import { AppNotification } from "../types";

// Lấy thông báo của tài khoản hiện tại, mới nhất lên đầu.
export async function getNotifications(userId: number): Promise<AppNotification[]> {
  const res = await api.get<AppNotification[]>("/notifications", {
    params: { userId, _sort: "createdAt", _order: "desc" },
  });
  return res.data;
}

// Lưu trạng thái đã đọc lên server.
export async function markAsRead(id: number): Promise<AppNotification> {
  const res = await api.patch<AppNotification>(`/notifications/${id}`, { read: true });
  return res.data;
}
