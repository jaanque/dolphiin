<template>
  <section class="waitlist" id="waitlist">
    <div class="container">
      <h2 tabindex="0">Be an <em>Early Adopter</em>.</h2>
      <p class="sub" tabindex="0">Join the elite waitlist. Launching April 2026.</p>
      <p>The first 1,000 members get Pro features free for life. No credit card required.</p>

      <div v-if="status === 'success'" class="success-box" tabindex="0">
        <span class="icon">✨</span>
        <div class="msg">
          <h3>You're on the list!</h3>
          <p>We'll notify you as soon as we're ready.</p>
        </div>
      </div>

      <form v-else @submit.prevent="handleSubmit" class="signup-form">
        <div class="input-wrap" :class="{ 'is-loading': status === 'loading' }">
          <input 
            type="email" 
            placeholder="Enter your email" 
            v-model="email" 
            :disabled="status === 'loading'"
            required
          />
          <button type="submit" class="btn-primary" :disabled="status === 'loading'">
            {{ status === 'loading' ? 'Securing...' : 'Secure my spot' }}
          </button>
        </div>
        <p v-if="status === 'error'" class="error-msg">Something went wrong. Please try again.</p>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { supabase } from '../lib/supabase'

const email = ref('')
const status = ref<'idle' | 'loading' | 'success' | 'error'>('idle')

async function handleSubmit() {
  status.value = 'loading'
  
  try {
    const { error } = await supabase
      .from('emails')
      .insert([{ email: email.value, created_at: new Date().toISOString() }])
    
    if (error) throw error
    
    status.value = 'success'
    email.value = ''
  } catch (err) {
    console.error('Error saving email:', err)
    status.value = 'error'
    // Optional: Auto-reset error after 3 seconds
    setTimeout(() => { if (status.value === 'error') status.value = 'idle' }, 3000)
  }
}
</script>

<style scoped>
.waitlist {
  padding: 120px 48px;
  background: #fafafa;
  border-top: 1px solid #f2f2f2;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
}

h2 {
  font-family: 'Lora', Georgia, serif;
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 700;
  letter-spacing: -1.5px;
  margin: 0 0 16px;
  color: #1a1a1a;
  line-height: 1.1;
}

h2 em {
  font-style: italic;
  color: #1a73e8;
}

p {
  font-size: 18px;
  color: #555;
  margin-bottom: 48px;
  line-height: 1.5;
}

.signup-form {
  max-width: 540px;
  margin: 0 auto;
}

.input-wrap {
  display: flex;
  gap: 12px;
  background: #fff;
  padding: 8px;
  border: 1px solid #e4e4e4;
  border-radius: 8px;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;
}

.input-wrap:focus-within {
  border-color: #1a73e8;
  box-shadow: 0 0 0 4px rgba(26, 115, 232, 0.1);
}

input {
  flex: 1;
  border: none;
  background: transparent;
  padding: 12px 16px;
  font-family: inherit;
  font-size: 16px;
  outline: none;
}

.btn-primary {
  background: #1a73e8;
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: background 0.15s;
}

.btn-primary:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.success-box {
  background: #fff;
  border: 1px solid #e4e4e4;
  border-radius: 12px;
  padding: 32px;
  display: flex;
  align-items: center;
  gap: 24px;
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

.success-box .icon {
  font-size: 32px;
}

.success-box h3 {
  font-size: 18px;
  margin: 0 0 4px;
  color: #1a1a1a;
}

.success-box p {
  font-size: 14px;
  margin: 0;
  color: #666;
}

.error-msg {
  color: #d93025;
  font-size: 13px;
  margin-top: 12px;
}

.form-note {
  font-size: 13px;
  color: #999;
  margin: 20px 0 0;
}

@media (max-width: 768px) {
  .waitlist {
    padding: 80px 24px;
  }
  h2 {
    font-size: 36px;
  }
  .input-wrap {
    flex-direction: column;
    padding: 0;
    background: transparent;
    border: none;
    box-shadow: none;
    gap: 12px;
  }
  input {
    background: #fff;
    border: 1px solid #e4e4e4;
    border-radius: 8px;
    width: 100%;
    padding: 16px;
  }
  .btn-primary {
    width: 100%;
    border-radius: 8px;
    padding: 16px;
  }
}
</style>
