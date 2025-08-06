<!-- components/FormInput.vue -->
<template>
  <div>
    <label :for="id" class="block text-sm mb-1">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :required="required"
      :name="name"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="w-full px-4 py-2 rounded bg-gray-900 border border-gray-700 text-white"
    />
  </div>
</template>

<script setup>
defineProps({
  id: String,
  label: String,
  name: String,
  type: { type: String, default: "text" },
  placeholder: String,
  required: Boolean,
  modelValue: String,
});

defineEmits(["update:modelValue"]);
</script>
