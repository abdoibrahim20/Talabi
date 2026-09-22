function OrdersScreen() {
  const counts = {
    all: DB.orders.length,
    new: DB.orders.filter(o => o.status === 'new').length,
    confirmed: DB.orders.filter(o => o.status === 'confirmed').length,
    shipped: DB.orders.filter(o => o.status === 'shipped').length,
    delivered: DB.orders.filter(o => o.status === 'delivered').length,
    needs_info: DB.orders.filter(o => o.status === 'needs_info').length
  }
  const filters = [
    { v: 'all', l: 'الكل', cls: 'bg-primary-600 text-white' },
    { v: 'new', l: 'جديد', cls: 'bg-amber-500 text-white' },
    { v: 'needs_info', l: 'يحتاج معلومات', cls: 'bg-rose-500 text-white' },
    { v: 'confirmed', l: 'مؤكد', cls: 'bg-emerald-500 text-white' },
    { v: 'shipped', l: 'تم الشحن', cls: 'bg-primary-500 text-white' },
    { v: 'delivered', l: 'مكتمل', cls: 'bg-slate-600 text-white' }
  ]
  const filtered = DB.orders.filter(o => {
    if (app.filter !== 'all' && o.status !== app.filter) return false
    if (app.search) {
      const q = app.search.toLowerCase()
      return o.customer.name.toLowerCase().includes(q) || o.customer.phone.includes(q) || o.shortId.toLowerCase().includes(q) || o.items.some(i => i.name.toLowerCase().includes(q))
    }
    return true
  })

  return `
    <div class="flex items-center justify-between mb-6 flex-wrap gap-4">
      <div>
        <h1 class="text-2xl md:text-3xl font-black text-slate-800">الطلبات</h1>
        <p class="text-slate-500 text-sm mt-1">إدارة جميع الطلبات الواردة</p>
      </div>
      <button class="gradient-primary text-white px-4 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-primary-600/20 hover:shadow-xl transition">+ طلب يدوي</button>
    </div>

    <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 mb-6">
      <div class="flex flex-wrap items-center gap-3">
        <div class="flex-1 min-w-[220px] relative">
          <input type="text" value="${app.search}" oninput="setSearch(this.value)" placeholder="ابحث بالاسم، الرقم، أو المنتج..." class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 pr-11 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
          <span class="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
        </div>
        <div class="flex gap-2 overflow-x-auto pb-1 scrollbar-thin w-full lg:w-auto">
          ${filters.map(f => `
            <button onclick="setFilter('${f.v}')" class="px-4 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition ${app.filter === f.v ? f.cls + ' shadow-sm' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}">
              ${f.l} <span class="opacity-75">(${counts[f.v] ?? 0})</span>
            </button>
          `).join('')}
        </div>
      </div>
    </div>

    ${filtered.length === 0 ? EmptyState({
      icon: '🔍',
      title: 'لا توجد طلبات مطابقة',
      description: 'جرب تغيير الفلاتر أو البحث بكلمات مختلفة.',
      action: `<button onclick="setFilter('all'); setSearch('')" class="bg-slate-100 hover:bg-slate-200 text-slate-700 px-5 py-2.5 rounded-xl font-bold text-sm">مسح الفلاتر</button>`
    }) : `
      <div class="space-y-3">
        ${filtered.map(OrderCard).join('')}
      </div>
    `}
  `
}

