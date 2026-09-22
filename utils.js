// 3. UTILITIES
// ═══════════════════════════════════════════════════════════════════════
const $ = (sel) => document.querySelector(sel)
const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html) e.innerHTML = html; return e }

const fmt = (n) => new Intl.NumberFormat('ar-EG', { maximumFractionDigits: 0 }).format(n) + ' جنيه'
const fmtNum = (n) => new Intl.NumberFormat('ar-EG', { maximumFractionDigits: 0 }).format(n)

function timeAgo(ts) {
  const diff = Date.now() - ts
  const m = Math.floor(diff / 60000)
  if (m < 1) return 'الآن'
  if (m < 60) return `قبل ${m} دقيقة`
  const h = Math.floor(m / 60)
  if (h < 24) return `قبل ${h} ساعة`
  const d = Math.floor(h / 24)
  return `قبل ${d} يوم`
}

function toast(msg, type = 'success') {
  const colors = { success: 'bg-emerald-500', error: 'bg-rose-500', info: 'bg-primary-600', warning: 'bg-amber-500' }
  const icons = { success: '✓', error: '✕', info: 'i', warning: '!' }
  const t = el('div', `${colors[type]} text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-slide-up min-w-[300px] pointer-events-auto font-medium text-sm`)
  t.innerHTML = `<span class="w-6 h-6 bg-white/25 rounded-full flex items-center justify-center text-xs font-bold shrink-0">${icons[type]}</span><span>${msg}</span>`
  $('#toasts').appendChild(t)
  setTimeout(() => { t.style.opacity = '0'; t.style.transform = 'translateY(10px)'; t.style.transition = 'all .3s'; setTimeout(() => t.remove(), 300) }, 3200)
}

