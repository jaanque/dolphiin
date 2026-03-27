<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import LogoDolphin from './LogoDolphin.vue'
import { WEBSITE_CONTEXT } from '../lib/context'

const copied = ref(false)
const email = ref('')
const isMenuOpen = ref(false)

const SYSTEM_PROMPT = `You are the Dolphiin AI Assistant. You have expert knowledge about the Dolphiin platform.

Use the following information about the website and platform to answer any user questions:
${WEBSITE_CONTEXT}

Guidelines:
- Answer accurately based on the provided context.
- Keep responses professional, technical, and concise.
- Respond in the same language the user uses.
- If the information is not in the context, state that it's in the 2026 roadmap or suggest contacting support at hello@dolphiin.com.`

// ── Chat State ──
const isChatOpen = ref(false)
const chatInput = ref('')
const messages = ref<{ role: 'user' | 'assistant' | 'system'; content: string }[]>([
  { role: 'system', content: SYSTEM_PROMPT }
])
const isTyping = ref(false)
const chatContainer = ref<HTMLElement | null>(null)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

async function copy() {
  await navigator.clipboard.writeText('npm install dolphiin')
  copied.value = true
  setTimeout(() => (copied.value = false), 2000)
}

async function sendMessage() {
  if (!chatInput.value.trim() || isTyping.value) return
  
  const userMessage = chatInput.value.trim()
  chatInput.value = ''
  
  messages.value.push({ role: 'user', content: userMessage })
  isTyping.value = true
  
  scrollToBottom()

  try {
    // LLAMADA ACTUALIZADA: Ahora apunta a nuestra Serverless Function
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        messages: messages.value,
      })
    })

    const data = await response.json()
    
    // Si la función de Vercel devuelve un error (ej. 500), lo capturamos
    if (!response.ok) throw new Error(data.error || 'Error fetching chat')

    const aiResponse = data.choices[0].message.content
    messages.value.push({ role: 'assistant', content: aiResponse })
  } catch (error) {
    console.error('Chat Error:', error)
    messages.value.push({ role: 'assistant', content: "Sorry, I'm having trouble connecting right now. Please try again later." })
  } finally {
    isTyping.value = false
    scrollToBottom()
  }
}

async function scrollToBottom() {
  await nextTick()
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight
  }
}

function formatMessage(content: string) {
  if (!content) return ''
  return content
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br>')
}

function toggleChat() {
  isChatOpen.value = !isChatOpen.value
  if (isChatOpen.value && !messages.value.some(m => m.role === 'assistant')) {
    messages.value.push({ role: 'assistant', content: "Hi! I'm Dolphiin AI. Ask me anything about how we protect your API keys or how to integrate us into your workflow." })
  }
}
</script>

<template>
  <div class="page">
    <header>
      <nav aria-label="Main navigation">
        <a href="/" class="logo" aria-label="Dolphiin home">
          <LogoDolphin :size="52" />
          <span class="logo-text">dolphiin</span>
        </a>
        <div class="nav-links" :class="{ 'is-open': isMenuOpen }" role="list">
          <button class="menu-close" @click="toggleMenu" aria-label="Close menu">&times;</button>
          <a href="#how-it-works" @click="isMenuOpen = false" role="listitem">How it works</a>
          <a href="#problem-solution" @click="isMenuOpen = false" role="listitem">The Evolution</a>
          <a href="#benefit" @click="isMenuOpen = false" role="listitem">Benefits</a>
          <a href="#waitlist" @click="isMenuOpen = false" class="btn-nav" role="listitem"
            >Join Waitlist</a
          >
        </div>
        <button class="menu-toggle" @click="toggleMenu" aria-label="Open menu">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </nav>
    </header>

    <main id="start">
      <p class="eyebrow">DEVELOPING TILL AUGUST 2026</p>

      <h1>
        Your API key is in your code?<br />
        <em>That's a problem.</em>
      </h1>

      <p class="sub">
        Dolphiin replaces your API key with a fake one per user that expires automatically. One
        install, done.
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
        <a href="#waitlist" class="btn-primary">Get started — it's free</a>
        <a href="#how-it-works" class="btn-link">How it works →</a>
      </div>
    </main>

    <div class="hero-chat" v-show="!isMenuOpen" :class="{ 'is-expanded': isChatOpen }">
      <div class="chat-header" @click="toggleChat">
        <div class="chat-label">Ask Dolphiin AI</div>
        <button class="chat-toggle-btn">{{ isChatOpen ? '−' : '+' }}</button>
      </div>
      
      <div v-if="isChatOpen" class="chat-window" ref="chatContainer">
        <div v-for="(msg, idx) in messages.filter(m => m.role !== 'system')" :key="idx" 
             class="message" :class="msg.role">
          <div class="bubble" v-html="formatMessage(msg.content)"></div>
        </div>
        <div v-if="isTyping" class="message assistant typing">
          <div class="bubble">...</div>
        </div>
      </div>

      <div class="chat-input-wrap">
        <input 
          type="text" 
          placeholder="Ask something..." 
          v-model="chatInput"
          @focus="!isChatOpen && toggleChat()"
          @keyup.enter="sendMessage"
        />
        <button class="chat-send" @click="sendMessage" :disabled="isTyping" aria-label="Send">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12h14m-7-7 7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
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
header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(14px) saturate(180%);
  -webkit-backdrop-filter: blur(14px) saturate(180%);
  border-bottom: 1px solid rgba(242, 242, 242, 0.5);
  transition: background 0.3s ease;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 48px;
  max-width: 1400px;
  margin: 0 auto;
}
.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  font-size: 20px;
  letter-spacing: -0.5px;
  color: #1a1a1a;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: color 0.2s ease;
}

.logo:hover {
  color: #b55916;
}

.logo-text {
  /* Naturally centered by flexbox now */
}

.logo:focus-visible {
  outline: 2px solid #b55916;
  outline-offset: 3px;
  border-radius: 4px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
  font-size: 14px;
}
.nav-links a {
  color: #555;
  text-decoration: none;
  transition: color 0.15s;
}
.nav-li.btn-nav:hover {
  color: #b55916;
}
.nav-links a:hover {
  color: #1a1a1a;
}
.nav-links a:focus-visible {
  outline: 2px solid #b55916;
  outline-offset: 3px;
  border-radius: 4px;
}
.btn-nav {
  background: #b55916;
  color: #fff !important;
  padding: 8px 18px;
  border-radius: 6px;
  font-weight: 500;
  transition: background 0.15s;
}
.btn-nav:focus-visible {
  border-radius: 6px;
}
.btn-nav:hover {
  background: #a04e13 !important;
}

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
  color: #b55916;
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
h1 em {
  font-style: italic;
  color: #b55916; /* Subtle brand color shift */
}
.hero-h1 em {
  font-style: italic;
  color: #b55916;
}
 /* Subtle brand color shift */


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
  color: #b55916;
  border: none;
  border-left: 1px solid #e4e4e4;
  cursor: pointer;
  transition: background 0.15s;
  white-space: nowrap;
}
.install button:hover {
  background: #f5f5f5;
}

/* ── Actions ── */
.actions {
  display: flex;
  align-items: center;
  gap: 24px;
}
.btn-primary {
  background: #b55916;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  padding: 13px 28px;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.15s;
}
.btn-primary:hover {
  background: #a04e13;
}
.btn-link {
  font-size: 15px;
  color: #b55916;
  text-decoration: none;
  font-weight: 500;
}
.btn-link:hover {
  text-decoration: underline;
}

/* ── Hero Chat Visual (Floating Popup) ── */
.hero-chat {
  position: fixed;
  bottom: 32px;
  right: 32px;
  width: 320px;
  z-index: 1000;
  background: #fff;
  border: 1px solid #e4e4e4;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero-chat.is-expanded {
  width: 380px;
  max-height: 500px;
}

.chat-header {
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s;
}

.is-expanded .chat-header {
  border-color: #f2f2f2;
}

.chat-label {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #b55916;
}

.chat-toggle-btn {
  background: none;
  border: none;
  font-size: 20px;
  color: #999;
  line-height: 1;
  padding: 0 4px;
}

.chat-window {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.message {
  display: flex;
  max-width: 85%;
}

.message.user {
  align-self: flex-end;
}

.message.assistant {
  align-self: flex-start;
}

.bubble {
  padding: 10px 14px;
  font-size: 14px;
  line-height: 1.4;
  border-radius: 8px;
}

.user .bubble {
  background: #b55916;
  color: #fff;
}

.assistant .bubble {
  background: #f5f5f5;
  color: #1a1a1a;
}

.typing .bubble {
  color: #999;
  letter-spacing: 2px;
}

.chat-input-wrap {
  padding: 12px;
  display: flex;
  gap: 8px;
  border-top: 1px solid #f2f2f2;
}

.chat-input-wrap input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 14px;
  background: transparent;
}

.chat-send {
  background: #f5f5f5;
  border: none;
  border-radius: 6px;
  padding: 6px;
  cursor: pointer;
  color: #666;
  transition: all 0.2s;
}

.chat-send:active {
  background: #a04e13; /* Slightly darker orange */
}
.chat-send:hover:not(:disabled) {
  background: #b55916;
  color: #fff;
}
.chat-dot {
  color: #b55916;
  font-weight: 700;
}

/* ── Mobile Menu Toggle ── */
.menu-toggle {
  display: none;
  background: none;
  border: none;
  color: #1a1a1a;
  cursor: pointer;
  padding: 8px;
}

.menu-close {
  display: none;
  position: absolute;
  top: 24px;
  right: 24px;
  background: none;
  border: none;
  font-size: 32px;
  color: #1a1a1a;
  cursor: pointer;
}
.benefit-dot {
  width: 6px;
  height: 6px;
  background: #b55916;
  border-radius: 50%;
  margin-top: 6px;
}

/* ── Responsive ── */
@media (max-width: 860px) {
  nav {
    padding: 16px 24px;
  }
  .menu-toggle {
    display: block;
  }
  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    max-width: 320px;
    height: 100vh;
    background: #fff;
    flex-direction: column;
    align-items: flex-start;
    padding: 80px 40px;
    gap: 32px;
    box-shadow: -10px 0 30px rgba(0, 0, 0, 0.05);
    transition: right 0.3s ease;
    z-index: 1001;
  }
  .nav-links.is-open {
    right: 0;
  }
  .menu-close {
    display: block;
  }
  .nav-links a {
    font-size: 18px;
    font-weight: 600;
  }
  .btn-nav {
    width: 100%;
    text-align: center;
    padding: 14px;
  }
  .btn-nav:hover {
    background: #a04e13 !important;
  }
  main {
    padding: 64px 20px 56px;
  }
  h1 {
    font-size: clamp(40px, 10vw, 60px);
  }
  .actions {
    flex-direction: column;
    width: 100%;
    gap: 16px;
  }
  .btn-primary {
    width: 100%;
    text-align: center;
  }
  .hero-chat {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    max-width: none;
    background: #fff;
    padding: 0;
    border-top: 1px solid #e4e4e4;
    border-radius: 0;
    box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.05);
  }
  .hero-chat.is-expanded {
    max-height: 80vh;
  }
  .chat-header {
    padding: 10px 24px;
  }
  .chat-input-wrap {
    padding: 12px 24px;
  }
  .chat-input-wrap input {
    font-size: 14px;
  }
  .page {
    padding-bottom: 60px;
  }
}
</style>