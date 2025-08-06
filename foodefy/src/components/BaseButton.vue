<template>
  <button
    :type="type"
    class="w-full py-2 bg-red-500 text-white rounded hover:bg-red-600 transition cursor-pointer"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  type: { type: String, default: "button" },
});
</script>
