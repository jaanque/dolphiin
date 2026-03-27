<template>
  <section class="how-it-works" id="how-it-works">
    <div class="container">
      <p class="eyebrow" tabindex="0">Integration</p>
      <h2 tabindex="0">Three steps to <em>total privacy.</em></h2>

      <div class="steps-container">
        <!-- Step 1 -->
        <div class="step" tabindex="0">
          <div class="step-num" tabindex="0">01</div>
          <div class="step-body">
            <h3 tabindex="0">Install the Library</h3>
            <p tabindex="0">One command connects your environment to the Dolphiin edge network.</p>
            <div class="technical-block terminal" tabindex="0">
              <span class="t-prompt">$</span> npm install dolphiin
            </div>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="step" tabindex="0" aria-label="Step 2: Connect your Keys. We generate secure, expiring tokens so your real keys are never exposed.">
          <div class="step-num" tabindex="0">02</div>
          <div class="step-body">
            <h3 tabindex="0">Connect your Keys</h3>
            <p tabindex="0">Link your master keys once. We generate user-specific, expiring tokens.</p>
            <div class="technical-block key-row" tabindex="0" aria-label="API Key Preview showing a protected Open AI Key prefix sk-proj followed by censored content.">
              <span class="provider-name">OPENAI_KEY</span>
              <span class="key-preview">
                <span class="key-prefix">sk-proj-</span>
                <CensoredKey />
              </span>
            </div>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="step" tabindex="0">
          <div class="step-num" tabindex="0">03</div>
          <div class="step-body">
            <h3 tabindex="0">Deploy & Forget</h3>
            <p tabindex="0">Your code only ever sees the Dolphiin token. Real keys are injected at the edge.</p>
            <div class="technical-block badge-row" tabindex="0">
              <span class="badge blue">Cloudflare Workers</span>
              <span class="badge blue">Vercel Edge</span>
              <span class="badge blue">AWS Lambda</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CensoredKey from './CensoredKey.vue'
</script>

<style scoped>
.how-it-works {
  padding: 120px 48px;
  background: #fff;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

.eyebrow {
  font-size: 13px;
  font-weight: 500;
  color: #b55916;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 24px;
  text-align: center;
}

h2 {
  font-family: 'Lora', Georgia, serif;
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -1.5px;
  margin-bottom: 80px;
  color: #1a1a1a;
  text-align: center;
}

h2 em {
  font-style: italic;
  color: #b55916;
}

.steps-container {
  display: flex;
  justify-content: center;
  gap: 32px;
}

.step {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  background: #fff;
  padding: 32px;
  border: 1px solid #f2f2f2;
  border-radius: 12px;
  transition: border-color 0.2s ease;
}

.step:hover {
  border-color: #b55916;
}

.step-num {
  font-size: 48px;
  font-weight: 800;
  color: #f5f5f5;
  line-height: 1;
  font-family: 'Inter', sans-serif;
  user-select: none;
  position: absolute;
  top: 20px;
  right: 24px;
  z-index: 0;
}

.step-body {
  position: relative;
  z-index: 1;
}

h3 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 12px;
  color: #1a1a1a;
  letter-spacing: -0.5px;
}

.step-body p {
  font-size: 18px;
  line-height: 1.6;
  color: #4b4b4b; /* Darkened from #666 as requested before */
  margin-bottom: 24px;
  max-width: 600px;
}

.technical-block {
  background: #fafafa;
  border: 1px solid #ebebeb;
  border-radius: 8px;
  padding: 16px 20px;
  display: inline-flex;
  align-items: center;
  font-family: 'Roboto Mono', monospace;
  font-size: 14px;
  white-space: nowrap;
  max-width: 100%;
  overflow-x: auto;
}

.terminal {
  color: #1a1a1a;
}

.t-prompt {
  color: #888; /* Darkened from #ccc */
  margin-right: 12px;
  user-select: none;
}

.key-row {
  gap: 16px;
}

.provider-name {
  color: #666; /* Darkened from #999 */
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
}

.key-preview {
  display: flex;
  align-items: center;
  color: #1a1a1a;
}

.key-prefix {
  color: #555; /* Darkened from #888 */
}

.badge-row {
  gap: 12px;
  background: transparent;
  border: none;
  padding: 0;
}

.badge {
  font-size: 11px;
  font-weight: 600;
  padding: 6px 12px;
  background: #f5f5f5;
  border: 1px solid #ebebeb;
  border-radius: 20px;
  color: #666;
}

.badge.blue {
  background: rgba(181, 89, 22, 0.05);
  border-color: rgba(181, 89, 22, 0.1);
  color: #b55916;
}

@media (max-width: 960px) {
  .steps-container {
    flex-direction: column;
    gap: 48px;
  }
  .step {
    padding: 24px;
  }
  .step-num {
    font-size: 40px;
    top: 16px;
    right: 20px;
  }
}
</style>
