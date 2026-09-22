function OrderDetailScreen() {
  const o = DB.orders.find(x => x.id === app.selectedOrderId)
  if (!o) return `<div class="text-center py-20 text-slate-500">الطلب غير موجود</div>`
  const c = STATUS[o.status]
  return `
    <button onclick="nav('orders')" class="text-sm text-slate-500 hover:text-slate-800 mb-4 flex items-center gap-1 font-medium">← العودة للطلبات</button>

    <div class="flex items-start justify-between mb-6 flex-wrap gap-4">
      <div>
        <div class="flex items-center gap-3 mb-2 flex-wrap">
          <h1 class="text-2xl md:text-3xl font-black text-slate-800">طلب #${o.shortId}</h1>
          ${Badge(o.status)}
        </div>
        <p class="text-slate-500 text-sm">تم الإنشاء تلقائياً من محادثة واتساب • ${timeAgo(o.createdAt)}</p>
      </div>
      <div class="flex gap-2">
        ${o.status === 'new' ? `<button onclick="confirmOrder('${o.id}')" class="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3 rounded-xl font-bold text-sm transition shadow-lg shadow-emerald-500/25">✓ تأكيد الطلب</button>` : ''}
        ${o.status === 'confirmed' ? `<button onclick="shipOrder('${o.id}')" class="gradient-primary text-white px-5 py-3 rounded-xl font-bold text-sm transition shadow-lg shadow-primary-600/25">🚚 شحن الطلب</button>` : ''}
        <button onclick="toast('جاري تحضير التعديل...', 'info')" class="bg-slate-100 hover:bg-slate-200 text-slate-700 px-5 py-3 rounded-xl font-bold text-sm transition">تعديل</button>
      </div>
    </div>

    <div class="grid lg:grid-cols-3 gap-6">
      <div class="lg:col-span-2 space-y-6">
        <div class="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
          <h2 class="font-bold text-slate-800 mb-5 flex items-center gap-2">👤 بيانات العميل</h2>
          <div class="grid sm:grid-cols-2 gap-5">
            <div><div class="text-xs text-slate-500 mb-1.5 font-bold">الاسم</div><div class="font-bold text-slate-800">${o.customer.name}</div></div>
            <div><div class="text-xs text-slate-500 mb-1.5 font-bold">رقم الهاتف</div><div class="font-bold text-slate-800 font-mono" dir="ltr">${o.customer.phone}</div></div>
            ${o.customer.address ? `<div class="sm:col-span-2"><div class="text-xs text-slate-500 mb-1.5 font-bold">العنوان</div><div class="font-bold text-slate-800">${o.customer.address}</div></div>` : ''}
            <div><div class="text-xs text-slate-500 mb-1.5 font-bold">طريقة الدفع</div><div class="font-bold text-slate-800">💵 ${PAYMENT[o.payment]}</div></div>
            <div><div class="text-xs text-slate-500 mb-1.5 font-bold">عدد الطلبات</div><div class="font-bold text-slate-800">${o.customer.totalOrders} طلب</div></div>
          </div>
        </div>

        <div class="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
          <h2 class="font-bold text-slate-800 mb-5 flex items-center gap-2">📦 المنتجات</h2>
          <div class="space-y-3">
            ${o.items.map(i => `
              <div class="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                <div class="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-2xl shadow-sm">${i.emoji}</div>
                <div class="flex-1 min-w-0">
                  <div class="font-bold text-slate-800 truncate">${i.name}</div>
                  <div class="text-xs text-slate-500 mt-0.5">الكمية: ${i.qty} · ${i.sku}</div>
                </div>
                <div class="text-left shrink-0">
                  <div class="font-bold text-slate-800">${fmt(i.price * i.qty)}</div>
                  <div class="text-xs text-slate-500">${i.qty} × ${fmt(i.price)}</div>
                </div>
              </div>
            `).join('')}
          </div>
          <div class="mt-5 pt-5 border-t border-slate-100 space-y-3">
            <div class="flex justify-between text-sm"><span class="text-slate-600">المجموع الفرعي</span><span class="font-bold text-slate-800">${fmt(o.subtotal)}</span></div>
            <div class="flex justify-between text-sm"><span class="text-slate-600">الشحن</span><span class="font-bold text-slate-800">${fmt(o.shipping)}</span></div>
            <div class="flex justify-between pt-3 border-t border-slate-100"><span class="font-bold text-slate-800 text-lg">الإجمالي</span><span class="font-black text-primary-600 text-xl">${fmt(o.total)}</span></div>
          </div>
        </div>

        <div class="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
          <h2 class="font-bold text-slate-800 mb-5 flex items-center gap-2">💬 المحادثة الأصلية</h2>
          <div class="space-y-3 max-h-80 overflow-y-auto scrollbar-thin pl-2">
            ${o.conversation.map(m => `
              <div class="flex gap-3 ${m.role === 'bot' ? 'flex-row-reverse' : ''}">
                <div class="w-9 h-9 ${m.role === 'bot' ? 'gradient-primary' : 'bg-wa-500'} rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">${m.role === 'bot' ? '🤖' : 'ع'}</div>
                <div class="${m.role === 'bot' ? 'bg-primary-50 border border-primary-100 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl' : 'bg-slate-100 rounded-tl-2xl rounded-bl-2xl rounded-br-2xl'} px-4 py-3 max-w-[80%]">
                  <div class="text-sm text-slate-700 leading-relaxed">${m.content}</div>
                  <div class="text-xs text-slate-400 mt-1.5">${m.time}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="space-y-6">
        <div class="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl border border-primary-200 p-6">
          <div class="flex items-center gap-2 mb-4">
            <span class="text-xl">🤖</span>
            <span class="font-bold text-primary-800">دقة الاستخراج</span>
          </div>
          <div class="text-4xl font-black text-primary-700 mb-1">${Math.round(o.aiConfidence * 100)}<span class="text-2xl">%</span></div>
          <div class="text-xs text-primary-600 mb-4">تم استخراج الطلب تلقائياً</div>
          <div class="h-2 bg-white rounded-full overflow-hidden shadow-inner">
            <div class="h-full gradient-primary rounded-full transition-all" style="width:${o.aiConfidence * 100}%"></div>
          </div>
        </div>

        <div class="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
          <h3 class="font-bold text-slate-800 mb-4">الجدول الزمني</h3>
          <div class="space-y-4">
            <div class="flex gap-3">
              <div class="w-2.5 h-2.5 bg-wa-500 rounded-full mt-2 shrink-0 ring-4 ring-wa-100"></div>
              <div><div class="text-sm font-bold text-slate-700">استلام رسالة واتساب</div><div class="text-xs text-slate-400 mt-0.5">${timeAgo(o.createdAt)}</div></div>
            </div>
            <div class="flex gap-3">
              <div class="w-2.5 h-2.5 gradient-primary rounded-full mt-2 shrink-0 ring-4 ring-primary-100"></div>
              <div><div class="text-sm font-bold text-slate-700">استخراج تلقائي للطلب</div><div class="text-xs text-slate-400 mt-0.5">${timeAgo(o.createdAt)}</div></div>
            </div>
            ${o.status !== 'new' ? `
              <div class="flex gap-3">
                <div class="w-2.5 h-2.5 bg-emerald-500 rounded-full mt-2 shrink-0 ring-4 ring-emerald-100"></div>
                <div><div class="text-sm font-bold text-slate-700">تم التأكيد</div><div class="text-xs text-slate-400 mt-0.5">قبل قليل</div></div>
              </div>
            ` : `
              <div class="flex gap-3">
                <div class="w-2.5 h-2.5 bg-amber-500 rounded-full mt-2 shrink-0 ring-4 ring-amber-100 animate-pulse"></div>
                <div><div class="text-sm font-bold text-slate-700">في انتظار التأكيد</div><div class="text-xs text-slate-400 mt-0.5">الآن</div></div>
              </div>
            `}
          </div>
        </div>

        <div class="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
          <h3 class="font-bold text-slate-800 mb-4">إجراءات سريعة</h3>
          <div class="space-y-2">
            <button onclick="toast('تم إرسال رسالة واتساب ✓')" class="w-full text-right px-4 py-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-sm font-bold text-slate-700 transition flex items-center gap-3">✉️ <span>إرسال رسالة واتساب</span></button>
            <button onclick="toast('جاري الاتصال...', 'info')" class="w-full text-right px-4 py-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-sm font-bold text-slate-700 transition flex items-center gap-3">📞 <span>الاتصال بالعميل</span></button>
            <button onclick="window.print()" class="w-full text-right px-4 py-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-sm font-bold text-slate-700 transition flex items-center gap-3">🖨️ <span>طباعة الفاتورة</span></button>
            ${o.status !== 'cancelled' ? `<button onclick="if(confirm('إلغاء الطلب؟')){cancelOrder('${o.id}'); nav('orders')}" class="w-full text-right px-4 py-3 rounded-xl bg-rose-50 hover:bg-rose-100 text-sm font-bold text-rose-600 transition flex items-center gap-3">🗑️ <span>إلغاء الطلب</span></button>` : ''}
          </div>
        </div>
      </div>
    </div>
  `
}

