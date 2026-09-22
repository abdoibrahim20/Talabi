function ProductsScreen() {
  const lowCount = DB.products.filter(p => p.status === 'low').length
  const outCount = DB.products.filter(p => p.status === 'out').length
  return `
    <div class="flex items-center justify-between mb-6 flex-wrap gap-4">
      <div><h1 class="text-2xl md:text-3xl font-black text-slate-800">المنتجات</h1><p class="text-slate-500 text-sm mt-1">إدارة قائمة المنتجات والأسعار</p></div>
      <div class="flex gap-2">
        <button onclick="toast('استيراد CSV قريباً', 'info')" class="bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2.5 rounded-xl font-bold text-sm transition">📤 استيراد</button>
        <button onclick="toast('إضافة منتج قريباً', 'info')" class="gradient-primary text-white px-4 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-primary-600/20 transition">+ إضافة</button>
      </div>
    </div>

    <div class="grid grid-cols-3 gap-4 mb-6">
      <div class="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm"><div class="text-2xl md:text-3xl font-black text-slate-800">${DB.products.length}</div><div class="text-xs md:text-sm text-slate-500 mt-1">منتج نشط</div></div>
      <div class="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm"><div class="text-2xl md:text-3xl font-black text-amber-600">${lowCount}</div><div class="text-xs md:text-sm text-slate-500 mt-1">مخزون منخفض</div></div>
      <div class="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm"><div class="text-2xl md:text-3xl font-black text-rose-600">${outCount}</div><div class="text-xs md:text-sm text-slate-500 mt-1">نفذت الكمية</div></div>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      ${DB.products.map(p => {
        const sm = { ok: ['متوفر', 'bg-emerald-100 text-emerald-700'], low: ['منخفض', 'bg-amber-100 text-amber-700'], out: ['نفذ', 'bg-rose-100 text-rose-700'] }
        const [label, cls] = sm[p.status]
        return `
          <div class="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1 group">
            <div class="h-36 bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform">${p.emoji}</div>
            <div class="p-5">
              <div class="flex items-start justify-between mb-3">
                <div class="min-w-0">
                  <div class="font-bold text-slate-800 truncate">${p.name}</div>
                  <div class="text-xs text-slate-500 font-mono mt-0.5">${p.sku}</div>
                </div>
                <span class="text-xs px-2 py-1 rounded-full font-bold ${cls} shrink-0 mr-2">${label}</span>
              </div>
              <div class="flex items-center justify-between pt-3 border-t border-slate-100">
                <div class="text-lg font-black text-primary-600">${fmt(p.price)}</div>
                <div class="text-sm text-slate-500">${p.stock} قطعة</div>
              </div>
            </div>
          </div>
        `
      }).join('')}
    </div>
  `
}

