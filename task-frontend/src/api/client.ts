// src/api/client.ts
const BASE = import.meta.env.VITE_API_URL;

export async function apiFetch(
  url: string,
  options: RequestInit = {}
) {
  const res = await fetch(`${BASE}${url}`, {
    ...options,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  if (!res.ok) {
    const error = await res.json();
    throw error;
  }

  return res.json();
}
