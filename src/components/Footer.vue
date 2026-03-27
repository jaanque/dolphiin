<template>
  <footer class="footer">
    <!-- 100% Width Footer CTA Section (Full-Bleed) -->
    <div class="footer-cta">
      <div class="brand-overlay">
        <a href="/" class="brand-link">
          <h1 class="brand-title" aria-label="dolphiin">dolphiin</h1>
        </a>
      </div>
    </div>

    <div class="container">
      <!-- Main Footer Content -->
      <div class="footer-grid">
        <div class="footer-col">
          <h3>Product</h3>
          <a href="#how-it-works">How it works</a>
          <a href="#problem-solution">The Evolution</a>
          <a href="#benefit">Benefits</a>
          <a href="#waitlist">Join Waitlist</a>
        </div>

        <div class="footer-col">
          <h3>Support</h3>
          <a href="mailto:hello@dolphiin.com">hello@dolphiin.com</a>
          <a href="https://twitter.com/dolphiin_app" target="_blank">Twitter</a>
        </div>

        <!-- Copyright Section -->
        <div class="footer-extra">
          <p class="copyright">dolphiin. All rights reserved. &copy; 2026</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import LogoDolphin from './LogoDolphin.vue'
const bgImage = '/footer-bg.jpg'
</script>

<style scoped>
.footer {
  padding: 0 0 60px; /* Removed top/side padding for full-bleed CTA */
  background: #fff;
  color: #1a1a1a;
  border-top: 1px solid #f2f2f2;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

/* ── CTA Section (Full-Bleed) ── */
.footer-cta {
  width: 100%;
  margin-bottom: 120px;
  background: #fff;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden; /* Keep parallax mask contained */
}


.brand-overlay {
  position: relative;
  z-index: 2;
  width: 100%;
}

.brand-link {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.brand-title {
  font-family: 'Inter', system-ui, sans-serif;
  font-weight: 1000;
  /* Responsive sizing that prevents overflow on small screens */
  font-size: clamp(80px, 15vw, 360px); 
  margin: 0;
  letter-spacing: 0;
  /* Increased line-height and padding to prevent 15px-stroke clipping */
  line-height: 1.3;
  padding: 40px 0;
  white-space: nowrap;
  
  /* Permanent Image Mask with Parallax */
  background-image: url('/footer-bg.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  
  /* Responsive Boldness: Scales the stroke with the viewport */
  -webkit-text-stroke: clamp(4px, 1.2vw, 15px) transparent;
}

/* ── Grid Layout ── */
.footer-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr) 1.5fr;
  gap: 60px;
  margin-bottom: 80px;
}

.footer-col h3 {
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #999;
  margin-bottom: 24px;
}

.footer-col {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.footer-col a {
  font-size: 15px;
  font-weight: 500;
  color: #444;
  text-decoration: none;
  transition: color 0.15s;
}

.footer-col a:hover {
  color: #b55916; /* Brand Sunset Orange */
}

/* ── Extras (Copyright) ── */
.footer-extra {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
}

.copyright {
  font-size: 13px;
  color: #999;
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .footer { padding: 80px 24px 40px; }
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .footer-extra { 
    align-items: flex-start;
  }
  .brand-title { 
    /* High-impact mobile size that takes up most of the viewport width */
    font-size: clamp(100px, 28vw, 140px);
    letter-spacing: -0.05em; /* Tighter for mobile impact */
    -webkit-text-stroke: 6px transparent;
    line-height: 1.4;
    padding: 20px 0;
  }
}
</style>
