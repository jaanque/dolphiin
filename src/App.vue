<script setup lang="ts">
import Hero from './components/Hero.vue'
import HowItWorks from './components/HowItWorks.vue'
</script>

<template>
  <Hero />
  <HowItWorks />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: 'Inter', system-ui, sans-serif;
  background: #fff;
  color: #1a1a1a;
}
</style>
