import { apiClient } from "./api-client";
import { cookies } from "@/lib/cookies";
import { LoginPayload, RegisterPayload, AuthResponse } from "@/types";

export const authService = {
  async login(payload: LoginPayload): Promise<any> {
    try {
      const response = await apiClient.post<any>("/auth/login", payload);
      if (response.accessToken) {
        cookies.set("auth_token", response.accessToken, 7);
      }
      if (response.user) {
        cookies.set("user", JSON.stringify(response.user), 7);
      }
      return response;
    } catch (error: any) {
      console.error("Login error:", error);
      throw error;
    }
  },

  async register(payload: RegisterPayload): Promise<AuthResponse> {
    try {
      const response = await apiClient.post<AuthResponse>("/auth/register", payload);
      if (response.data?.token) {
        cookies.set("auth_token", response.data.token, 7);
        cookies.set("user", JSON.stringify(response.data.user), 7);
      }
      return response;
    } catch (error: any) {
      console.error("Registration error:", error);
      throw error;
    }
  },

  logout(): void {
    cookies.remove("auth_token");
    cookies.remove("user");
    window.location.href = "/login";
  },

  getCurrentUser(): any {
    const userData = cookies.get("user");
    if (userData) {
      try {
        return JSON.parse(userData);
      } catch {
        return null;
      }
    }
    return null;
  },

  isAuthenticated(): boolean {
    return cookies.exists("auth_token");
  },

  getToken(): string | null {
    return cookies.get("auth_token");
  },
}; 