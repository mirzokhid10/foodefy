// composables/useLogout.js
import { useRouter } from "vue-router";
import { useNotify } from "./useNotify";

export function useLogout() {
  const router = useRouter();
  const { notifyInfo } = useNotify();

  const logout = () => {
    localStorage.removeItem("admin_token"); // Remove auth token
    notifyInfo("You’ve been logged out.");
    router.push("/login"); // Redirect to login
  };

  return { logout };
}
