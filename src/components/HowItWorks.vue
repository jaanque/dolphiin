<script setup lang="ts">
import CensoredKey from './CensoredKey.vue'
</script>

<template>
  <section class="hiw" id="how" aria-labelledby="hiw-title">
    <div class="hiw-header">
      <p class="eyebrow">How it works</p>
      <h2 id="hiw-title">Three steps.<br /><em>Done.</em></h2>
    </div>

    <ol class="steps" aria-label="Setup steps">
      <li class="step">
        <span class="step-n" aria-hidden="true">01</span>
        <div class="step-body">
          <h3>Install the package</h3>
          <p>One command. Your project is linked to Dolphiin.</p>
          <div class="terminal" role="img" aria-label="npm install dolphiin">
            <span class="t-prompt" aria-hidden="true">$</span>
            <code>npm install dolphiin</code>
          </div>
        </div>
      </li>

      <li class="step">
        <span class="step-n" aria-hidden="true">02</span>
        <div class="step-body">
          <h3>Add your real API key — once</h3>
          <p>
            Paste it in your Dolphiin dashboard. We encrypt it. It never touches your code or your
            <code class="ic">.env</code> file.
          </p>
          <div class="key-row" aria-hidden="true">
            <div class="key-provider">
              <span class="provider-dot"></span>
              <span class="provider-name">Key</span>
            </div>
            <div class="key-field">
              <div class="key-value-wrap">
                <span class="lock-icon" aria-hidden="true">🔒</span>
                <span class="key-prefix">sk-proj-</span>
                <CensoredKey />
              </div>
              <span class="key-badge">Active ✓</span>
            </div>
          </div>
        </div>
      </li>

      <li class="step">
        <span class="step-n" aria-hidden="true">03</span>
        <div class="step-body">
          <h3>Ship your app</h3>
          <p>
            Nothing else changes in your code. Every visitor automatically gets a temporary key that
            expires the moment they leave.
          </p>
          <div class="chips" aria-label="Included automatically">
            <span class="chip">Auto-expiring keys</span>
            <span class="chip">Bot blocking</span>
            <span class="chip">Rate limiting</span>
          </div>
        </div>
      </li>
    </ol>
  </section>
</template>

<style scoped>
/* ── Section shell ── */
.hiw {
  padding: 112px 48px 120px;
  max-width: 1320px; /* Even wider for zero wrapping */
  margin: 0 auto;
  border-top: 1px solid #f2f2f2;
}

/* ── Header ── */
.hiw-header {
  margin-bottom: 72px;
}

.eyebrow {
  font-size: 13px;
  font-weight: 500;
  color: #1a73e8;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin: 0 0 18px;
}

h2 {
  font-family: 'Lora', Georgia, serif;
  font-size: clamp(36px, 5vw, 56px);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -1.5px;
  margin: 0;
  color: #1a1a1a;
}
h2 em {
  font-style: italic;
}

/* ── Steps list ── */
.steps {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 80px; /* More gap */
}

/* ── Single step ── */
.step {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
}

/* ── Step number — the design element ── */
.step-n {
  font-family: 'Lora', Georgia, serif;
  font-size: 80px;
  font-weight: 700;
  color: #f0f0f0;
  line-height: 1;
  letter-spacing: -3px;
  user-select: none;
  margin-bottom: -10px;
  margin-left: -4px;
}

/* ── Step body ── */
.step-body {
  padding-top: 0;
  width: 100%;
}

h3 {
  font-size: 22px;
  font-weight: 600;
  color: #1a1a1a;
  letter-spacing: -0.4px;
  margin: 0 0 12px;
  min-height: 2.6em; /* Align start of paragraphs */
  display: flex;
  align-items: flex-end; /* Push title to bottom of its zone for consistency */
}

.step-body > p {
  font-size: 15px;
  line-height: 1.65;
  color: #666;
  margin: 0 0 28px;
  min-height: 4.8em; /* Align start of widgets */
}

/* ── Terminal ── */
.terminal {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #fafafa;
  border: 1px solid #ebebeb;
  border-radius: 8px;
  padding: 14px 18px;
  width: 100%;
  box-sizing: border-box;
}

.t-prompt {
  font-family: 'Roboto Mono', monospace;
  font-size: 13px;
  color: #ccc;
}

.terminal code {
  font-family: 'Roboto Mono', monospace;
  font-size: 14px;
  font-weight: 600;
  color: #1a1a1a;
}

/* ── Inline code ── */
.ic {
  font-family: 'Roboto Mono', monospace;
  font-size: 13px;
  background: #f5f5f5;
  border: 1px solid #ebebeb;
  padding: 1px 6px;
  border-radius: 4px;
  color: #444;
}

/* ── Dashboard key row ── */
.key-row {
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: #fafafa;
  border: 1px solid #ebebeb;
  border-radius: 8px;
  padding: 16px 20px;
  width: 100%;
  box-sizing: border-box;
}

.key-provider {
  display: flex;
  align-items: center;
  gap: 6px;
}

.provider-dot {
  width: 6px;
  height: 6px;
  background: #1a73e8;
  border-radius: 50%;
}

.provider-name {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  color: #999;
}

.key-field {
  display: flex;
  flex-direction: row; /* Horizontal as per request */
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.lock-icon {
  font-size: 12px;
  margin-right: 4px;
}

.key-value-wrap {
  display: flex;
  align-items: center;
  gap: 2px;
}

.key-prefix {
  font-family: 'Roboto Mono', monospace;
  font-size: 13px;
  color: #888;
  letter-spacing: 0.5px;
}

.key-badge {
  font-size: 11px;
  font-weight: 600;
  color: #166534;
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  padding: 3px 10px;
  border-radius: 999px;
}

/* ── Chips ── */
.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.chip {
  font-size: 12px;
  font-weight: 500;
  color: #555;
  background: #f5f5f5;
  border: 1px solid #e8e8e8;
  padding: 6px 12px;
  border-radius: 999px;
}

/* ── Responsive ── */
@media (max-width: 900px) {
  .steps {
    grid-template-columns: 1fr;
    gap: 80px;
  }
}

@media (max-width: 640px) {
  .hiw {
    padding: 64px 20px 56px;
  }

  .step-n {
    font-size: 64px;
  }

  h3 {
    font-size: 19px;
  }
}
</style>
