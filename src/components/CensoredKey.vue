<template>
  <div 
    class="censored-container" 
    ref="container" 
    role="img" 
    aria-label="Encrypted and censored API key suffix represented by moving particles"
  >
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const container = ref<HTMLElement | null>(null)
const canvas    = ref<HTMLCanvasElement | null>(null)

let ctx: CanvasRenderingContext2D | null = null
let animationFrame: number
let particles: Particle[] = []

class Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number

  constructor(w: number, h: number) {
    this.x = Math.random() * w
    this.y = Math.random() * h
    this.vx = (Math.random() - 0.5) * 0.4
    this.vy = (Math.random() - 0.5) * 0.4
    this.size = Math.random() * 1.5 + 0.5
    this.opacity = Math.random() * 0.5 + 0.2
  }

  update(w: number, h: number) {
    this.x += this.vx
    this.y += this.vy

    if (this.x < 0) this.x = w
    if (this.x > w) this.x = 0
    if (this.y < 0) this.y = h
    if (this.y > h) this.y = 0
    
    // Slight flickering
    if (Math.random() > 0.98) this.opacity = Math.random() * 0.5 + 0.2
  }

  draw(c: CanvasRenderingContext2D) {
    c.fillStyle = `rgba(102, 102, 102, ${this.opacity})` // Darker dots (#666)
    c.beginPath()
    c.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    c.fill()
  }
}

function init() {
  if (!canvas.value || !container.value) return
  ctx = canvas.value.getContext('2d')
  
  const dpr = window.devicePixelRatio || 1
  const rect = container.value.getBoundingClientRect()
  
  canvas.value.width = rect.width * dpr
  canvas.value.height = rect.height * dpr
  canvas.value.style.width = `${rect.width}px`
  canvas.value.style.height = `${rect.height}px`
  
  ctx?.scale(dpr, dpr)
  
  particles = []
  const count = Math.floor((rect.width * rect.height) / 20) // Middle ground
  for (let i = 0; i < count; i++) {
    particles.push(new Particle(rect.width, rect.height))
  }
}

function animate() {
  if (!ctx || !canvas.value || !container.value) return
  
  const rect = container.value.getBoundingClientRect()
  ctx.clearRect(0, 0, rect.width, rect.height)
  
  particles.forEach(p => {
    p.update(rect.width, rect.height)
    p.draw(ctx!)
  })
  
  animationFrame = requestAnimationFrame(animate)
}

onMounted(() => {
  init()
  animate()
  window.addEventListener('resize', init)
})

onUnmounted(() => {
  cancelAnimationFrame(animationFrame)
  window.removeEventListener('resize', init)
})
</script>

<style scoped>
.censored-container {
  width: 120px;
  height: 14px;
  background: transparent; /* Background removed */
  border-radius: 10px;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  position: relative;
  margin-left: 2px;
}

canvas {
  display: block;
}
</style>
