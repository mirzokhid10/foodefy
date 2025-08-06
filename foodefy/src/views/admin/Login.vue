<template>
  <div class="flex h-screen">
    <!-- Left Panel -->
    <div
      class="max-sm:w-2/2 sm:w-1/2 md:w-1/2 lg:w-1/3 bg-black text-white p-10 flex flex-col justify-center"
    >
      <div class="mb-8">
        <div class="text-4xl mb-1">
          <a href="">
            <img
              class="w-50"
              src="../../../public/admin/foodefy-logo.png"
              alt="foodefy-logo.png"
            />
          </a>
        </div>
      </div>

      <LoginForm />
    </div>

    <!-- Right Panel -->
    <FoodDisplay />
  </div>
</template>

<script setup>
import LoginForm from "../../components/LoginForm.vue";
import FoodDisplay from "../../components/FoodDisplay.vue";
</script>
