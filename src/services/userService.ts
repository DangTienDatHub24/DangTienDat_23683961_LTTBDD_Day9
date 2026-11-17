import { api } from "../api/client";
import { User } from "../types";

// Chỉ cập nhật tên và SĐT, giữ nguyên các trường khác trên server.
export async function updateProfile(id: number, data: Pick<User, "name" | "phone">): Promise<User> {
  const res = await api.patch<User & { password?: string }>(`/users/${id}`, {
    name: data.name,
    phone: data.phone,
  });
  // json-server trả cả mật khẩu; loại bỏ trước khi đưa hồ sơ vào store.
  const { password: _password, ...user } = res.data;
  return user;
}
