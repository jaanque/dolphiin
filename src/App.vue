<script setup lang="ts">
import Hero from './components/Hero.vue'
import HowItWorks from './components/HowItWorks.vue'
import ProblemSolution from './components/ProblemSolution.vue'
import Benefit from './components/Benefit.vue'
import Waitlist from './components/Waitlist.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Hero />
  <HowItWorks />
  <ProblemSolution />
  <Benefit />
  <Waitlist />
  <Footer />
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
  scroll-behavior: smooth;
  scroll-padding-top: 80px; /* Account for sticky header */
}

body {
  font-family: 'Inter', system-ui, sans-serif;
  background: #fff;
  color: #1a1a1a;
  overflow-x: hidden;
}

section {
  padding: 120px 0;
}

/* ── Precise Keyboard Navigation ── */
:focus {
  outline: none; /* Hide default browser outline */
}

:focus-visible {
  outline: 2.5px solid #b55916;
  outline-offset: 3px;
  border-radius: 4px;
}

/* Specific radius for buttons/cards */
.btn-primary:focus-visible, 
.btn-nav:focus-visible,
.btn-link:focus-visible,
.step:focus-visible,
.card:focus-visible,
.chat-send:focus-visible {
  border-radius: 8px;
}
</style>
