function DashboardScreen() {
  const newCount = DB.orders.filter(o => o.status === 'new').length
  const confirmedCount = DB.orders.filter(o => o.status === 'confirmed').length
  const totalRevenue = DB.orders.reduce((s, o) => s + o.total, 0)
  const firstName = (app.user?.name || 'صديقي').split(' ')[0]

  return `
    <div class="flex items-center justify-between mb-6 flex-wrap gap-4">
      <div>
        <h1 class="text-2xl md:text-3xl font-black text-slate-800">مساء الخير، ${firstName} 👋</h1>
        <p class="text-slate-500 text-sm mt-1">لديك <span class="font-bold text-amber-600">${newCount} طلبات</span> جديدة تحتاج مراجعة</p>
      </div>
      <button class="gradient-primary text-white px-4 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-primary-600/20 hover:shadow-xl transition">+ طلب يدوي</button>
    </div>

    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      ${StatCard({ icon: '📥', label: 'طلب اليوم', value: fmtNum(DB.orders.length), badge: 'اليوم', trend: 12 })}
      ${StatCard({ icon: '✅', label: 'مؤكد', value: fmtNum(confirmedCount), badge: 'مؤكد', badgeColor: 'emerald' })}
      ${StatCard({ icon: '⏳', label: 'قيد المراجعة', value: fmtNum(newCount), badge: 'مراجعة', badgeColor: 'amber' })}
      ${StatCard({ icon: '💰', label: 'جنيه مبيعات', value: fmtNum(totalRevenue), badge: '+12%', badgeColor: 'emerald', trend: 12 })}
    </div>

    <div class="gradient-primary rounded-3xl p-6 mb-6 text-white relative overflow-hidden">
      <div class="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-20 -translate-y-20"></div>
      <div class="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-16 translate-y-16"></div>
      <div class="relative flex items-start gap-4">
        <div class="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-2xl shrink-0 backdrop-blur">🤖</div>
        <div class="flex-1">
          <div class="font-bold mb-1 text-lg">مساعد طلبي الذكي</div>
          <div class="text-sm text-primary-100 leading-relaxed">
            اكتشفت <strong class="text-white">${newCount} طلبات جديدة</strong> في محادثات واتساب منذ آخر زيارة.
            ${newCount > 0 ? 'اثنان منها يحتاجان تأكيد العنوان، وواحد يحتوي على منتج غير متوفر.' : 'لا شيء يحتاج انتباهك حالياً.'}
          </div>
          <button onclick="nav('orders')" class="mt-4 bg-white text-primary-700 px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-primary-50 transition shadow-lg">مراجعة الطلبات →</button>
        </div>
      </div>
    </div>

    <div class="grid lg:grid-cols-3 gap-6">
      <div class="lg:col-span-2 bg-white rounded-3xl border border-slate-100 shadow-sm">
        <div class="p-5 border-b border-slate-100 flex items-center justify-between">
          <h2 class="font-bold text-slate-800">أحدث الطلبات</h2>
          <button onclick="nav('orders')" class="text-sm text-primary-600 font-bold hover:underline">عرض الكل →</button>
        </div>
        <div class="divide-y divide-slate-100">
          ${DB.orders.slice(0, 4).map(o => {
            const c = STATUS[o.status]
            return `
              <div onclick="nav('order-detail', '${o.id}')" class="p-4 hover:bg-slate-50 transition cursor-pointer">
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-xl shrink-0">${c.emoji}</div>
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-2 mb-1.5 flex-wrap">
                      <span class="font-bold text-slate-800">${o.customer.name}</span>
                      ${Badge(o.status)}
                    </div>
                    <div class="text-sm text-slate-600 mb-1 truncate">${o.items.map(i => `${i.qty}× ${i.name}`).join(', ')} — <strong class="text-primary-600">${fmt(o.total)}</strong></div>
                    <div class="text-xs text-slate-400">${timeAgo(o.createdAt)}</div>
                  </div>
                </div>
              </div>
            `
          }).join('')}
        </div>
      </div>

      <div class="space-y-6">
        <div class="bg-white rounded-3xl border border-slate-100 shadow-sm p-5">
          <h3 class="font-bold text-slate-800 mb-4">الأكثر مبيعاً هذا الأسبوع</h3>
          <div class="space-y-4">
            ${[
              { name: 'تيشيرت أسود L', count: 45, pct: 85 },
              { name: 'حذاء رياضي 42', count: 32, pct: 62 },
              { name: 'بنطلون جينز 32', count: 18, pct: 35 },
              { name: 'كوتشي نسائي 38', count: 12, pct: 23 }
            ].map(p => `
              <div>
                <div class="flex items-center justify-between text-sm mb-2">
                  <span class="text-slate-700 font-medium truncate">${p.name}</span>
                  <span class="text-slate-500 font-bold text-xs shrink-0">${p.count} طلب</span>
                </div>
                <div class="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div class="h-full gradient-primary rounded-full transition-all" style="width:${p.pct}%"></div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="bg-white rounded-3xl border border-slate-100 shadow-sm p-5">
          <h3 class="font-bold text-slate-800 mb-4">آخر النشاطات</h3>
          <div class="space-y-4 text-sm">
            ${[
              { color: 'bg-wa-500', text: 'رسالة واتساب جديدة من <strong>أحمد محمد</strong>', time: 'قبل 5 دقائق' },
              { color: 'bg-emerald-500', text: 'تم تأكيد طلب <strong>سارة علي</strong>', time: 'قبل 23 دقيقة' },
              { color: 'bg-amber-500', text: 'تنبيه: مخزون <strong>بنطلون جينز</strong> منخفض', time: 'قبل ساعة' },
              { color: 'bg-primary-500', text: 'تم شحن طلب <strong>نورا إبراهيم</strong>', time: 'قبل 3 ساعات' }
            ].map(a => `
              <div class="flex gap-3">
                <div class="w-2 h-2 ${a.color} rounded-full mt-2 shrink-0"></div>
                <div class="flex-1">
                  <div class="text-slate-700 leading-relaxed">${a.text}</div>
                  <div class="text-xs text-slate-400 mt-1">${a.time}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `
}

