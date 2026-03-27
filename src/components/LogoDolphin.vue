<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    role="img"
  >
    <path
      d="M2 13.5C2 13.5 5 7 13 7C21 7 22.5 12 22.5 12C22.5 12 21 17 13 17C5 17 2 13.5 2 13.5Z"
      fill="none"
      stroke="#1a73e8"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13 7C13 7 11 1 9 4"
      fill="none"
      stroke="#1a73e8"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22.5 12L24 10.5M22.5 12L24 13.5"
      fill="none"
      stroke="#1a73e8"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ size?: number }>(), { size: 28 })
</script>
