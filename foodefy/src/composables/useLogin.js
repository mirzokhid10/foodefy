// composables/useLogin.js
import api from "../plugins/axios";
import { useRouter } from "vue-router";

export function useLogin() {
  const router = useRouter();

  const login = async (email, password) => {
    try {
      const res = await api.post(
        "/admin/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const token = res.data.token;

      if (token) {
        localStorage.setItem("admin_token", token);
        router.push("/admin/dashboard");
      } else {
        throw new Error("No token received");
      }
    } catch (err) {
      console.error("Login failed:", err);
      // Optionally show error to user
    }
  };

  return { login };
}
