<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size * 0.55"
    viewBox="0 0 52 28"
    fill="#1a73e8"
    aria-hidden="true"
    role="img"
  >
    <!-- Body + tail -->
    <path d="
      M 3,14
      C 5,9 12,6 20,8
      L 22,2
      L 27,9
      C 34,9 41,11 44,14
      L 50,8
      L 47,15
      L 50,20
      L 44,15
      C 40,17 32,19 22,18
      C 14,18 6,17 3,14
      Z
    "/>
    <!-- Pectoral flipper -->
    <path d="M 14,15 C 13,21 10,23 8,22 C 11,18 13,16 14,15 Z"/>
    <!-- Eye -->
    <circle cx="8" cy="13" r="1.1" fill="#fff"/>
  </svg>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ size?: number }>(), { size: 28 })
</script>
