<template>
  <section class="prob-sol" id="problem-solution">
    <div class="container">
      <p class="eyebrow" tabindex="0">The Evolution</p>
      <h2 tabindex="0">From vulnerable to <em>invisible.</em></h2>
      
      <div class="comparison" role="region" aria-label="Security Comparison: Vulnerable vs Dolphiin">
        <div class="card problem" tabindex="0" aria-label="The traditional vulnerable way: API keys are exposed in the code.">
          <div class="card-header" aria-hidden="true">
            <span class="status-dot red"></span>
            <span>Vulnerable Way</span>
          </div>
          <div class="code-box">
            <code>const API_KEY = 'sk-proj-5jA...';</code>
            <div class="error-msg">⚠️ Exposed in frontend</div>
          </div>
        </div>

        <div class="spacer" tabindex="0" aria-label="Transforms into">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12h14m-7-7 7 7-7 7" stroke="#ccc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>

        <div class="card solution" tabindex="0" aria-label="The Dolphiin way: API keys are replaced by secure, protected tokens.">
          <div class="card-header" aria-hidden="true">
            <span class="status-dot blue"></span>
            <span>Dolphiin Way</span>
          </div>
          <div class="code-box">
            <code>const API_KEY = DOLPHIIN_SECURE;</code>
            <div class="success-msg">🔒 Protected & Private</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.prob-sol {
  padding: 120px 48px;
  background: #fff;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

.eyebrow {
  font-size: 13px;
  font-weight: 500;
  color: #b55916;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin: 0 0 18px;
  text-align: center;
}

h2 {
  font-family: 'Lora', Georgia, serif;
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -1.5px;
  margin-bottom: 72px;
  color: #1a1a1a;
  text-align: center;
}

h2 em {
  font-style: italic;
  color: #b55916;
}

.comparison {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
}

.card {
  flex: 1;
  background: #fafafa;
  border: 1px solid #ebebeb;
  border-radius: 8px;
  padding: 32px;
  min-width: 300px;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  color: #666;
  margin-bottom: 24px;
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

.red { background: #d93025; }
.blue { background: #b55916; }

.code-box {
  font-family: 'Roboto Mono', monospace;
  font-size: 14px;
  color: #1a1a1a;
}

code {
  display: block;
  margin-bottom: 16px;
  font-weight: 600;
}

.error-msg {
  font-size: 12px;
  color: #d93025;
  background: rgba(217, 48, 37, 0.05);
  padding: 6px 12px;
  border-radius: 4px;
  display: inline-block;
}

.success-msg {
  font-size: 12px;
  color: #b55916;
  background: rgba(181, 89, 22, 0.05);
  padding: 6px 12px;
  border-radius: 4px;
  display: inline-block;
}

.spacer {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 960px) {
  .prob-sol {
    padding: 80px 24px;
  }
  .comparison {
    flex-direction: column;
    gap: 24px;
  }
  .spacer {
    transform: rotate(90deg);
    padding: 16px 0;
  }
  .card {
    width: 100%;
    min-width: 0;
    padding: 24px;
  }
  h2 {
    margin-bottom: 48px;
  }
}

@media (max-width: 480px) {
  .code-box {
    font-size: 13px;
    overflow-x: auto;
    white-space: nowrap;
  }
}
</style>
