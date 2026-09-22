// 11. APP SHELL — Sidebar + Topbar
// ═══════════════════════════════════════════════════════════════════════
function Sidebar() {
  const items = [
    { id: 'dashboard', label: 'لوحة التحكم', icon: '📊' },
    { id: 'orders', label: 'الطلبات', icon: '📦', badge: DB.orders.filter(o => o.status === 'new').length },
    { id: 'products', label: 'المنتجات', icon: '🏷️' },
    { id: 'customers', label: 'العملاء', icon: '👥' },
    { id: 'reports', label: 'التقارير', icon: '📈' },
    { id: 'settings', label: 'الإعدادات', icon: '⚙️' }
  ]
  const storeName = app.store?.storeName || app.onboardingData?.storeName || 'متجري'
  const initials = (app.user?.name || 'أ')[0]
  return `
    <aside class="hidden lg:flex w-64 bg-white border-l border-slate-200 flex-col fixed right-0 top-0 bottom-0 z-30">
      <div class="p-5 border-b border-slate-100">
        <div class="flex items-center gap-3">
          <div class="w-11 h-11 rounded-2xl gradient-primary flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary-600/20">ط</div>
          <div class="min-w-0">
            <div class="font-bold text-slate-800 truncate">${storeName}</div>
            <div class="text-xs text-slate-500">طلبي</div>
          </div>
        </div>
      </div>
      <nav class="flex-1 p-3 space-y-1 overflow-y-auto">
        ${items.map(i => `
          <button onclick="nav('${i.id}')" class="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition text-sm font-medium text-right ${app.route === i.id ? 'bg-primary-50 text-primary-700 font-bold' : 'text-slate-600 hover:bg-slate-50'}">
            <span class="text-lg">${i.icon}</span>
            <span>${i.label}</span>
            ${i.badge ? `<span class="mr-auto bg-rose-500 text-white text-xs px-2 py-0.5 rounded-full font-bold min-w-[22px] text-center">${i.badge}</span>` : ''}
          </button>
        `).join('')}
      </nav>
      <div class="p-4 border-t border-slate-100 space-y-3">
        <div class="bg-gradient-to-br from-wa-50 to-wa-100 rounded-2xl p-4 border border-wa-200">
          <div class="flex items-center gap-2 mb-2">
            <span class="w-2 h-2 bg-wa-500 rounded-full animate-pulse"></span>
            <span class="text-sm font-bold text-wa-700">واتساب متصل</span>
          </div>
          <div class="text-xs text-slate-600">آخر رسالة: قبل 3 دقائق</div>
        </div>
        <div class="flex items-center gap-3 px-2">
          <div class="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-sm shrink-0">${initials}</div>
          <div class="flex-1 min-w-0">
            <div class="text-sm font-bold text-slate-800 truncate">${app.user?.name || 'مستخدم'}</div>
            <button onclick="if(confirm('تسجيل الخروج؟')) auth.logout()" class="text-xs text-slate-500 hover:text-rose-600 transition">تسجيل الخروج</button>
          </div>
        </div>
      </div>
    </aside>
  `
}

function MobileNav() {
  const items = [
    { id: 'dashboard', label: 'الرئيسية', icon: '📊' },
    { id: 'orders', label: 'الطلبات', icon: '📦' },
    { id: 'products', label: 'المنتجات', icon: '🏷️' },
    { id: 'settings', label: 'الإعدادات', icon: '⚙️' }
  ]
  return `
    <nav class="lg:hidden fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-lg border-t border-slate-200 z-40 pb-safe">
      <div class="flex items-center justify-around px-2 py-2">
        ${items.map(i => `
          <button onclick="nav('${i.id}')" class="flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all min-w-[68px] ${app.route === i.id ? 'text-primary-600' : 'text-slate-400'}">
            <span class="text-xl">${i.icon}</span>
            <span class="text-[10px] font-bold">${i.label}</span>
          </button>
        `).join('')}
      </div>
    </nav>
  `
}

// ═══════════════════════════════════════════════════════════════════════
