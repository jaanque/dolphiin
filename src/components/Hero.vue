<script setup lang="ts">
import { ref } from 'vue'
import LogoDolphin from './LogoDolphin.vue'

const copied = ref(false)
async function copy() {
  await navigator.clipboard.writeText('npm install dolphiin')
  copied.value = true
  setTimeout(() => (copied.value = false), 2000)
}
</script>

<template>
  <div class="page">

    <header>
      <nav aria-label="Main navigation">
        <a href="/" class="logo" aria-label="Dolphiin home">
          <LogoDolphin :size="28" />
          <span>dolphiin</span>
        </a>
        <div class="nav-links" role="list">
          <a href="#how" role="listitem">How it works</a>
          <a href="#pricing" role="listitem">Pricing</a>
          <a href="#docs" role="listitem">Docs</a>
          <a href="#start" class="btn-nav" role="listitem">Get started</a>
        </div>
      </nav>
    </header>

    <main id="start">
      <p class="eyebrow">For vibe coders & AI developers</p>

      <h1>
        Your API key is in your code.
        <em>That's a problem.</em>
      </h1>

      <p class="sub">
        Dolphiin replaces it with a fake key per user that expires automatically.
        One install, done.
      </p>

      <div class="install" role="group" aria-label="Terminal install command">
        <code aria-label="npm install dolphiin">npm install dolphiin</code>
        <button
          @click="copy"
          :aria-label="copied ? 'Command copied to clipboard' : 'Copy install command to clipboard'"
        >
          {{ copied ? 'Copied ✓' : 'Copy' }}
        </button>
      </div>

      <div class="actions">
        <a href="#start" class="btn-primary">Get started — it's free</a>
        <a href="#how" class="btn-link">How it works →</a>
      </div>
    </main>

  </div>
</template>

<style scoped>
/* ── Page ── */
.page {
  font-family: 'Inter', system-ui, sans-serif;
  color: #1a1a1a;
  background: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* ── Nav ── */
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 48px;
  border-bottom: 1px solid #f2f2f2;
}
.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: -0.3px;
  color: #1a1a1a;
  text-decoration: none;
}
.logo:focus-visible {
  outline: 2px solid #1a73e8;
  outline-offset: 3px;
  border-radius: 4px;
}
.nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
  font-size: 14px;
}
.nav-links a { color: #555; text-decoration: none; transition: color 0.15s; }
.nav-links a:hover { color: #1a1a1a; }
.nav-links a:focus-visible {
  outline: 2px solid #1a73e8;
  outline-offset: 3px;
  border-radius: 4px;
}
.btn-nav {
  background: #1a1a1a;
  color: #fff !important;
  padding: 8px 18px;
  border-radius: 6px;
  font-weight: 500;
  transition: background 0.15s;
}
.btn-nav:hover { background: #333 !important; }

/* ── Main ── */
main {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 96px 24px 80px;
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
}

/* ── Eyebrow ── */
.eyebrow {
  font-size: 13px;
  font-weight: 500;
  color: #1a73e8;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  margin: 0 0 24px;
}

/* ── Headline ── */
h1 {
  font-family: 'Lora', Georgia, serif;
  font-size: clamp(44px, 7vw, 80px);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -2px;
  margin: 0 0 28px;
  color: #1a1a1a;
}
h1 em { font-style: italic; }

/* ── Sub ── */
.sub {
  font-size: 18px;
  line-height: 1.7;
  color: #555;
  max-width: 520px;
  margin: 0 0 44px;
}

/* ── Install ── */
.install {
  display: flex;
  align-items: center;
  border: 1px solid #e4e4e4;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 32px;
  background: #fafafa;
}
.install code {
  font-family: 'Roboto Mono', monospace;
  font-size: 15px;
  font-weight: 500;
  color: #1a1a1a;
  padding: 13px 22px;
  letter-spacing: 0.2px;
}
.install button {
  padding: 13px 20px;
  font-size: 13px;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  background: #fff;
  color: #1a73e8;
  border: none;
  border-left: 1px solid #e4e4e4;
  cursor: pointer;
  transition: background 0.15s;
  white-space: nowrap;
}
.install button:hover { background: #f5f5f5; }

/* ── Actions ── */
.actions {
  display: flex;
  align-items: center;
  gap: 24px;
}
.btn-primary {
  background: #1a73e8;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  padding: 13px 28px;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.15s;
}
.btn-primary:hover { background: #1558c0; }
.btn-link {
  font-size: 15px;
  color: #1a73e8;
  text-decoration: none;
  font-weight: 500;
}
.btn-link:hover { text-decoration: underline; }

/* ── Responsive ── */
@media (max-width: 640px) {
  nav { padding: 16px 20px; }
  .nav-links a:not(.btn-nav) { display: none; }
  main { padding: 64px 20px 56px; }
}
</style>
