<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <a href="/" class="logo">
          <span>dolphiin</span>
        </a>
        <div class="footer-nav">
          <a href="#how-it-works">How it works</a>
          <a href="#waitlist">Waitlist</a>
          <a href="https://twitter.com/dolphiin_app" target="_blank">Twitter</a>
          <a href="mailto:hello@dolphiin.com">Support</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p tabindex="0">&copy; 2026 Dolphiin. All rights reserved.</p>
        <div class="legal">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 80px 48px;
  background: #fff;
  border-top: 1px solid #f2f2f2;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 64px;
}

.logo {
  font-weight: 700;
  font-size: 18px;
  text-decoration: none;
  color: #1a1a1a;
  letter-spacing: -0.5px;
}

.footer-nav {
  display: flex;
  gap: 32px;
}

.footer-nav a {
  font-size: 14px;
  color: #666;
  text-decoration: none;
  transition: color 0.15s;
}

.footer-nav a:hover {
  color: #1a1a1a;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 32px;
  border-top: 1px solid #f2f2f2;
}

p, .legal a {
  font-size: 12px;
  color: #999;
}

.legal {
  display: flex;
  gap: 24px;
}

.legal a {
  text-decoration: none;
}

@media (max-width: 960px) {
  .footer { padding: 64px 24px; }
  .footer-top { flex-direction: column; align-items: flex-start; gap: 40px; }
  .footer-nav { flex-direction: column; gap: 20px; }
  .footer-bottom { flex-direction: column; align-items: flex-start; gap: 20px; }
}
</style>
