<template>
  <div class="space-y-6">
    <h2 class="text-xl font-semibold">Login to continue</h2>
    <p class="text-sm text-gray-300">
      Enter your registered email address and password below
    </p>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <FormInput
        id="email"
        label="Email *"
        type="email"
        name="email"
        placeholder="user@gmail.com"
        v-model="email"
        required
      />

      <FormInput
        id="password"
        label="password *"
        type="password"
        name="password"
        placeholder="********"
        v-model="password"
        required
      />

      <div class="text-right text-sm">
        <a href="#" class="text-red-400 hover:underline">Forgot Password?</a>
      </div>

      <BaseButton type="submit">Sign In</BaseButton>
    </form>

    <div class="text-center text-gray-500">OR</div>

    <div class="flex space-x-3">
      <button
        type="button"
        class="flex items-center justify-center space-x-2 w-full py-2 bg-white text-black rounded hover:bg-gray-200 transition"
      >
        <span class="text-center">Sign in</span>
        <span class="text-center">
          <img src="/admin/google.svg" alt="google" class="h-5 mx-auto" />
        </span>
      </button>
      <button
        type="submit"
        class="flex items-center justify-center space-x-2 w-full py-2 bg-white text-black rounded hover:bg-gray-200 transition"
      >
        <span class="text-center">Sign in</span>
        <span class="text-center">
          <img src="/admin/facebook.svg" alt="facebook" class="h-5 mx-auto" />
        </span>
      </button>
    </div>

    <p class="text-center text-sm mt-4">
      Don’t have an account?
      <a href="#" class="text-red-400 hover:underline">Signup</a>
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import FormInput from "../components/FormInput.vue";
import BaseButton from "../components/BaseButton.vue";
import { useLogin } from "../composables/useLogin";
import { useNotify } from "../composables/useNotify";

const email = ref("");
const password = ref("");
const { login } = useLogin();

const { notifySuccess, notifyError } = useNotify();

const handleSubmit = async () => {
  try {
    login(email.value, password.value);
    notifySuccess("Login successful!");
  } catch (err) {
    notifyError("Login failed. Please try again.");
  }
};
</script>
