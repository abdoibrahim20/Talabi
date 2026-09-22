function ReportsScreen() {
  const weekDays = ['السبت', 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة']
  const weekData = [45, 62, 38, 71, 55, 82, 68]
  return `
    <div class="mb-6">
      <h1 class="text-2xl md:text-3xl font-black text-slate-800">التقارير</h1>
      <p class="text-slate-500 text-sm mt-1">نظرة شاملة على أداء متجرك</p>
    </div>

    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      ${StatCard({ icon: '💰', label: 'إجمالي المبيعات', value: fmtNum(12450), trend: 12, badge: 'هذا الأسبوع', badgeColor: 'emerald' })}
      ${StatCard({ icon: '📦', label: 'إجمالي الطلبات', value: '81', trend: 8 })}
      ${StatCard({ icon: '⭐', label: 'متوسط قيمة الطلب', value: '154', badge: 'جنيه' })}
      ${StatCard({ icon: '🎯', label: 'معدل التحويل', value: '3.2%', trend: -2, badge: 'هذا الشهر', badgeColor: 'amber' })}
    </div>

    <div class="grid lg:grid-cols-2 gap-6 mb-6">
      <div class="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
        <h3 class="font-bold text-slate-800 mb-6">المبيعات آخر 7 أيام</h3>
        <div class="h-56 flex items-end gap-2 md:gap-3">
          ${weekData.map((h, i) => `
            <div class="flex-1 flex flex-col items-center gap-2 group cursor-pointer">
              <div class="w-full gradient-primary rounded-t-xl transition-all hover:opacity-90 relative" style="height:${h}%">
                <div class="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none">${h * 100} جنيه</div>
              </div>
              <span class="text-xs text-slate-500 font-medium">${weekDays[i]}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
        <h3 class="font-bold text-slate-800 mb-6">حالات الطلبات</h3>
        <div class="space-y-5">
          ${[
            { label: 'جديد', count: 6, pct: 15, color: 'bg-amber-500' },
            { label: 'مؤكد', count: 18, pct: 45, color: 'bg-emerald-500' },
            { label: 'تم الشحن', count: 12, pct: 30, color: 'bg-primary-500' },
            { label: 'مكتمل', count: 45, pct: 100, color: 'bg-slate-500' }
          ].map(s => `
            <div>
              <div class="flex justify-between text-sm mb-2">
                <span class="text-slate-700 font-bold">${s.label}</span>
                <span class="text-slate-500 font-bold">${s.count}</span>
              </div>
              <div class="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div class="h-full ${s.color} rounded-full transition-all" style="width:${s.pct}%"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <div class="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
      <h3 class="font-bold text-slate-800 mb-6">أفضل المنتجات مبيعاً</h3>
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-slate-100">
              <th class="text-right pb-3 font-bold text-slate-500 text-xs">#</th>
              <th class="text-right pb-3 font-bold text-slate-500 text-xs">المنتج</th>
              <th class="text-right pb-3 font-bold text-slate-500 text-xs">المبيعات</th>
              <th class="text-right pb-3 font-bold text-slate-500 text-xs">الإيرادات</th>
            </tr>
          </thead>
          <tbody>
            ${[
              { name: 'تيشيرت أسود L', sales: 45, revenue: 6750, emoji: '👕' },
              { name: 'حذاء رياضي 42', sales: 32, revenue: 14400, emoji: '👟' },
              { name: 'بنطلون جينز 32', sales: 18, revenue: 6300, emoji: '👖' },
              { name: 'كوتشي نسائي 38', sales: 12, revenue: 4560, emoji: '👠' }
            ].map((p, i) => `
              <tr class="border-b border-slate-50 hover:bg-slate-50 transition">
                <td class="py-4 font-bold text-slate-400">${i + 1}</td>
                <td class="py-4">
                  <div class="flex items-center gap-3">
                    <span class="text-2xl">${p.emoji}</span>
                    <span class="font-bold text-slate-800">${p.name}</span>
                  </div>
                </td>
                <td class="py-4 text-slate-600">${p.sales} طلب</td>
                <td class="py-4 font-bold text-primary-600">${fmt(p.revenue)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `
}

