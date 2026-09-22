function SettingsScreen() {
  const storeName = app.store?.storeName || app.onboardingData?.storeName || 'متجري'
  return `
    <div class="mb-6">
      <h1 class="text-2xl md:text-3xl font-black text-slate-800">الإعدادات</h1>
      <p class="text-slate-500 text-sm mt-1">إدارة حسابك وتفضيلاتك</p>
    </div>

    <div class="grid lg:grid-cols-3 gap-6">
      <div class="lg:col-span-2 space-y-6">
        <div class="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
          <h2 class="font-bold text-slate-800 mb-5">معلومات المتجر</h2>
          <div class="space-y-4">
            <div><label class="text-sm font-bold text-slate-700 block mb-2">اسم المتجر</label><input type="text" value="${storeName}" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"></div>
            <div><label class="text-sm font-bold text-slate-700 block mb-2">نوع النشاط</label><input type="text" value="${app.store?.storeType || '—'}" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"></div>
            <div><label class="text-sm font-bold text-slate-700 block mb-2">البريد الإلكتروني</label><input type="text" value="${app.user?.email || ''}" dir="ltr" readonly class="w-full bg-slate-100 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-500 text-left"></div>
          </div>
          <button onclick="toast('تم حفظ التغييرات ✓')" class="mt-5 gradient-primary text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-primary-600/20 transition">حفظ التغييرات</button>
        </div>

        <div class="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
          <h2 class="font-bold text-slate-800 mb-5">الإشعارات</h2>
          <div class="space-y-3">
            ${[
              { label: 'إشعار عند طلب جديد', desc: 'استقبل تنبيه فوري عند كل طلب', checked: true },
              { label: 'إشعار عند مخزون منخفض', desc: 'تنبيه عندما يقل المخزون عن 5 وحدات', checked: true },
              { label: 'تقرير يومي على البريد', desc: 'ملخص يومي بمبيعاتك الساعة 9 مساءً', checked: false },
              { label: 'إشعارات واتساب', desc: 'استقبل التنبيهات على واتساب بدلاً من التطبيق', checked: false }
            ].map((n, i) => `
              <label class="flex items-center justify-between p-4 rounded-xl bg-slate-50 cursor-pointer hover:bg-slate-100 transition">
                <div class="flex-1 ml-3">
                  <div class="text-sm font-bold text-slate-800">${n.label}</div>
                  <div class="text-xs text-slate-500 mt-0.5">${n.desc}</div>
                </div>
                <input type="checkbox" ${n.checked ? 'checked' : ''} class="w-5 h-5 accent-primary-600 cursor-pointer shrink-0">
              </label>
            `).join('')}
          </div>
        </div>

        <div class="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
          <h2 class="font-bold text-rose-700 mb-5">منطقة الخطر</h2>
          <div class="space-y-3">
            <button onclick="auth.logout()" class="w-full text-right px-5 py-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-sm font-bold text-slate-700 transition">تسجيل الخروج من الحساب</button>
            <button onclick="if(confirm('سيتم حذف جميع بياناتك. هل أنت متأكد؟')){localStorage.clear();location.reload()}" class="w-full text-right px-5 py-3 rounded-xl bg-rose-50 hover:bg-rose-100 text-sm font-bold text-rose-600 transition">حذف الحساب نهائياً</button>
          </div>
        </div>
      </div>

      <div class="space-y-6">
        <div class="bg-gradient-to-br from-wa-50 to-wa-100 rounded-3xl border border-wa-200 p-6">
          <div class="flex items-center gap-2 mb-3">
            <span class="w-3 h-3 bg-wa-500 rounded-full animate-pulse"></span>
            <span class="font-bold text-wa-700">واتساب متصل</span>
          </div>
          <div class="text-xs text-slate-600 mb-4 leading-relaxed">آخر رسالة: قبل 3 دقائق<br>الحالة: نشط</div>
          <button onclick="toast('إعادة الاتصال...', 'info')" class="w-full bg-white text-wa-700 py-2.5 rounded-xl text-sm font-bold hover:bg-wa-50 transition">إدارة الاتصال</button>
        </div>

        <div class="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
          <h3 class="font-bold text-slate-800 mb-4">الخطة الحالية</h3>
          <div class="text-sm">
            <div class="font-black text-2xl text-primary-600 mb-1">مجاني</div>
            <div class="text-slate-500 mb-4">50 طلب شهرياً</div>
            <div class="h-2 bg-slate-100 rounded-full overflow-hidden mb-2"><div class="h-full gradient-primary rounded-full" style="width:48%"></div></div>
            <div class="text-xs text-slate-500 mb-4">24 من 50 طلب مستخدم</div>
            <button onclick="toast('قريباً', 'info')" class="w-full gradient-primary text-white py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-primary-600/20 transition">ترقية للاحترافي</button>
          </div>
        </div>
      </div>
    </div>
  `
}

// ═══════════════════════════════════════════════════════════════════════
