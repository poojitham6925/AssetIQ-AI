const authUrl = "/api/v1/auth";

interface AuthUser {
  id: string;
  email: string;
}

async function request<T>(path: string, body?: unknown): Promise<T> {
  let response: Response;
  try {
    response = await fetch(`${authUrl}${path}`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: body === undefined ? undefined : JSON.stringify(body),
    });
  } catch {
    throw new Error("Cannot reach the authentication service. Try again shortly.");
  }

  if (!response.ok) {
    const result = await response.json().catch(() => null) as
      | { detail?: string | { msg?: string }[] }
      | null;
    const detail = result?.detail;
    const message = typeof detail === "string"
      ? detail
      : Array.isArray(detail) && detail[0]?.msg
        ? detail[0].msg
        : "The request could not be completed.";
    throw new Error(message);
  }

  return response.json() as Promise<T>;
}

export function registerAccount(input: {
  name: string;
  email: string;
  password: string;
}): Promise<{ message: string }> {
  return request("/register", input);
}

export function loginAccount(input: {
  email: string;
  password: string;
}): Promise<AuthUser> {
  return request("/login", input);
}

export function verifyEmail(token: string): Promise<{ message: string }> {
  return request("/verify-email", { token });
}
