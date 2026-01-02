import { apiClient } from "@/services/api-client";

export const userService = {
  async getProfile() {
    return await apiClient.get<any>("/users/profile");
  },
}; 