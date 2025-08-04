<script setup>
import { ref, onMounted } from "vue";
import api from "../axios"; // use the axios instance you created

const foods = ref([]);

onMounted(async () => {
  try {
    const response = await api.get("/foods");
    foods.value = response.data;
  } catch (err) {
    console.error("Failed to fetch foods:", err);
  }
});
</script>

<template>
  <div class="p-4">
    <h1 class="text-xl font-bold mb-2">Restaurant Menu</h1>
    <ul class="list-disc list-inside">
      <li v-for="food in foods" :key="food.id">{{ food.name }}</li>
    </ul>
  </div>
</template>
