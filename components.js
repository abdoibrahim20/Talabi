// 7. COMPONENTS — Reusable
// ═══════════════════════════════════════════════════════════════════════
function Badge(status) {
  const s = STATUS[status]
  return `<span class="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-semibold border ${s.cls}"><span class="w-1.5 h-1.5 rounded-full ${s.dot}"></span>${s.label}</span>`
}

function StatCard({ icon, label, value, badge, badgeColor = 'primary', trend }) {
  const colorMap = {
    primary: 'bg-primary-50 text-primary-700',
    emerald: 'bg-emerald-50 text-emerald-700',
    amber: 'bg-amber-50 text-amber-700',
    rose: 'bg-rose-50 text-rose-700'
  }
  return `
    <div class="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
      <div class="flex items-center justify-between mb-3">
        <div class="w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center text-xl">${icon}</div>
        ${badge ? `<span class="text-xs px-2 py-1 rounded-full font-semibold ${colorMap[badgeColor]}">${badge}</span>` : ''}
      </div>
      <div class="flex items-end gap-2">
        <div class="text-3xl font-bold text-slate-800">${value}</div>
        ${trend ? `<div class="text-xs font-semibold ${trend > 0 ? 'text-emerald-600' : 'text-rose-600'} mb-1">${trend > 0 ? '↑' : '↓'} ${Math.abs(trend)}%</div>` : ''}
      </div>
      <div class="text-sm text-slate-500 mt-1">${label}</div>
    </div>
  `
}

function EmptyState({ icon, title, description, action }) {
  return `
    <div class="text-center py-16 px-6 animate-fade-in">
      <div class="w-20 h-20 bg-slate-100 rounded-3xl flex items-center justify-center text-4xl mx-auto mb-5">${icon}</div>
      <h3 class="text-xl font-bold text-slate-800 mb-2">${title}</h3>
      <p class="text-slate-500 mb-6 max-w-md mx-auto text-sm leading-relaxed">${description}</p>
      ${action || ''}
    </div>
  `
}

