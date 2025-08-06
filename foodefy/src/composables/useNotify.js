// composables/useNotify.js
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export function useNotify() {
  const notifySuccess = (message) => {
    toast.success(message, {
      autoClose: 3000,
      position: "top-right",
    });
  };

  const notifyError = (message) => {
    toast.error(message, {
      autoClose: 3000,
      position: "top-right",
    });
  };

  const notifyInfo = (message) => {
    toast.info(message, {
      autoClose: 3000,
      position: "top-right",
    });
  };

  return { notifySuccess, notifyError, notifyInfo };
}
