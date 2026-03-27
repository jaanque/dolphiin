<template>
  <section class="benefit" id="benefit" aria-labelledby="benefit-header">
    <div class="container">
      <p class="eyebrow">The Benefit</p>
      <div class="content">
        <h2 id="benefit-header" tabindex="0">Keep your API keys private. <em>Always.</em></h2>
        <div class="benefit-grid">
          <div class="benefit-item" tabindex="0">
            <span class="dot"></span>
            <p tabindex="0">
              <strong>Total Key Privacy</strong>: Your code never sees the real key. It remains
              protected at the edge, far from the code.
            </p>
          </div>
          <div class="benefit-item" tabindex="0">
            <span class="dot"></span>
            <p tabindex="0">
              <strong>Instant Integration</strong>: Links your projects automatically. Zero
              configuration or code changes required.
            </p>
          </div>
          <div class="benefit-item" tabindex="0">
            <span class="dot"></span>
            <p tabindex="0">
              <strong>Scoped Control</strong>: Manage access through session tokens without ever
              sharing master credentials.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.benefit {
  padding: 120px 48px;
  background: #fff; /* Match site white */
}

.container {
  max-width: 1320px; /* Match HowItWorks max-width */
  margin: 0 auto;
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
  font-size: clamp(36px, 5vw, 56px); /* Match HowItWorks */
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -1.5px; /* Match HowItWorks */
  margin-bottom: 64px;
  color: #1a1a1a;
  max-width: 600px;
}

h2 em {
  font-style: italic;
  color: #1a73e8;
}

.benefit-grid {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.benefit-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.dot {
  width: 8px;
  height: 8px;
  background: #1a73e8;
  border-radius: 50%;
  margin-top: 10px;
  flex-shrink: 0;
}

p {
  font-size: 20px;
  line-height: 1.5;
  color: #4b4b4b;
  margin: 0;
  letter-spacing: -0.2px;
}

p strong {
  color: #1a1a1a;
  font-weight: 600;
}

@media (max-width: 860px) {
  .benefits-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .benefit-card {
    padding: 24px;
  }
}

@media (max-width: 640px) {
  .benefit {
    padding: 80px 24px;
  }
  h2 {
    font-size: 36px;
    margin-bottom: 48px;
  }
  p {
    font-size: 18px;
  }
}
</style>
