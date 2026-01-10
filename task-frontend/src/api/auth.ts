// src/api/auth.ts
import { apiFetch } from "./client";

export const authApi = {
  register: (data: {
    name: string;
    email: string;
    password: string;
  }) =>
    apiFetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  login: (data: { email: string; password: string }) =>
    apiFetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  me: () => apiFetch("/api/auth/me"),
};
