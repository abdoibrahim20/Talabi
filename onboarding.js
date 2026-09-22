// 10. SCREENS — ONBOARDING
// ═══════════════════════════════════════════════════════════════════════
function OnboardingScreen() {
  const step = app.onboardingStep
  const d = app.onboardingData

  const stepContent = {
    1: `
      <div class="text-center mb-10">
        <div class="w-20 h-20 bg-primary-50 rounded-3xl flex items-center justify-center text-4xl mx-auto mb-5">🏪</div>
        <h1 class="text-2xl md:text-3xl font-black text-slate-800 mb-2">عرّفنا بمتجرك</h1>
        <p class="text-slate-500">معلومات أساسية لتهيئة حسابك</p>
      </div>
      <div class="space-y-5 max-w-md mx-auto">
        <div>
          <label class="text-sm font-bold text-slate-700 block mb-2">اسم المتجر *</label>
          <input id="onb-store-name" type="text" value="${d.storeName}" placeholder="متجر النور" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
        </div>
        <div>
          <label class="text-sm font-bold text-slate-700 block mb-2">نوع النشاط</label>
          <select id="onb-store-type" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
            <option value="">اختر النوع...</option>
            ${[
              ['fashion', 'ملابس وأزياء'],
              ['beauty', 'مستحضرات تجميل'],
              ['electronics', 'إلكترونيات'],
              ['home', 'منزل ومطبخ'],
              ['food', 'أغذية'],
              ['other', 'أخرى']
            ].map(([v, l]) => `<option value="${v}" ${d.storeType === v ? 'selected' : ''}>${l}</option>`).join('')}
          </select>
        </div>
        <div>
          <label class="text-sm font-bold text-slate-700 block mb-2">عدد الطلبات الشهرية</label>
          <select id="onb-orders-range" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
            <option value="0-50" ${d.ordersRange === '0-50' ? 'selected' : ''}>أقل من 50</option>
            <option value="50-200" ${d.ordersRange === '50-200' ? 'selected' : ''}>50 - 200</option>
            <option value="200-500" ${d.ordersRange === '200-500' ? 'selected' : ''}>200 - 500</option>
            <option value="500+" ${d.ordersRange === '500+' ? 'selected' : ''}>أكثر من 500</option>
          </select>
        </div>
      </div>
    `,
    2: `
      <div class="text-center mb-10">
        <div class="w-20 h-20 bg-primary-50 rounded-3xl flex items-center justify-center text-4xl mx-auto mb-5">📦</div>
        <h1 class="text-2xl md:text-3xl font-black text-slate-800 mb-2">أضف منتجاتك</h1>
        <p class="text-slate-500">يدوياً أو استوردها من CSV</p>
      </div>
      <div class="space-y-4 max-w-md mx-auto">
        <div class="grid grid-cols-3 gap-2">
          <input id="onb-prod-name" type="text" placeholder="اسم المنتج" class="col-span-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
          <input id="onb-prod-price" type="number" placeholder="السعر" class="bg-slate-50 border border-slate-200 rounded-xl px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
        </div>
        <button onclick="onbAddProduct()" class="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 py-3 rounded-xl font-semibold text-sm transition">+ إضافة منتج</button>
        <div id="onb-products-list" class="space-y-2 max-h-56 overflow-y-auto scrollbar-thin">
          ${d.products.length === 0
            ? `<div class="text-center text-sm text-slate-400 py-6">لا توجد منتجات بعد</div>`
            : d.products.map((p, i) => `
                <div class="flex items-center justify-between bg-slate-50 rounded-xl px-3 py-2.5 text-sm">
                  <span class="font-medium text-slate-700">${p.name}</span>
                  <div class="flex items-center gap-3">
                    <span class="font-semibold text-primary-600">${p.price} جنيه</span>
                    <button onclick="onbRemoveProduct(${i})" class="text-rose-500 hover:text-rose-700 text-lg leading-none">×</button>
                  </div>
                </div>
              `).join('')}
        </div>
        <div class="pt-4 border-t border-slate-100 text-center">
          <button onclick="onbLoadSample()" class="text-sm text-primary-600 hover:underline font-semibold">📥 استيراد 5 منتجات تجريبية</button>
        </div>
      </div>
    `,
    3: `
      <div class="text-center mb-10">
        <div class="w-20 h-20 bg-wa-50 rounded-3xl flex items-center justify-center text-4xl mx-auto mb-5">💬</div>
        <h1 class="text-2xl md:text-3xl font-black text-slate-800 mb-2">اربط واتساب</h1>
        <p class="text-slate-500">سنقوم بربط حساب واتساب بيزنس الخاص بك</p>
      </div>
      <div class="flex justify-center mb-6">
        <div class="bg-white border-4 border-slate-200 rounded-3xl p-5 shadow-lg">
          <div id="onb-qr" class="w-48 h-48 bg-slate-900 rounded-xl grid grid-cols-8 gap-1 p-2"></div>
        </div>
      </div>
      <div class="bg-primary-50 border border-primary-100 rounded-2xl p-5 max-w-md mx-auto">
        <div class="flex gap-3">
          <span class="text-2xl">📱</span>
          <div class="text-sm text-primary-800">
            <div class="font-bold mb-2">كيف تربط؟</div>
            <ol class="list-decimal list-inside space-y-1 text-primary-700 text-xs leading-relaxed">
              <li>افتح واتساب على هاتفك</li>
              <li>الإعدادات ← الأجهزة المرتبطة</li>
              <li>اضغط "ربط جهاز"</li>
              <li>امسح رمز QR المعروض</li>
            </ol>
          </div>
        </div>
      </div>
      <div class="text-center mt-6">
        <button onclick="onbConnectWhatsApp()" id="onb-connect-btn" class="bg-wa-500 hover:bg-wa-600 text-white px-8 py-3.5 rounded-xl font-bold transition shadow-lg shadow-wa-500/25">
          محاكاة الاتصال ✓
        </button>
      </div>
    `,
    4: `
      <div class="text-center">
        <div class="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center text-5xl mx-auto mb-6 animate-scale-in">🎉</div>
        <h1 class="text-3xl md:text-4xl font-black text-slate-800 mb-3">كل شيء جاهز!</h1>
        <p class="text-slate-500 mb-10 max-w-md mx-auto text-lg">حسابك مكتمل. ابدأ باستقبال الطلبات من واتساب الآن.</p>
        <div class="bg-slate-50 rounded-2xl p-6 max-w-md mx-auto mb-8 text-right">
          <div class="font-bold text-slate-800 mb-4">ملخص حسابك</div>
          <div class="space-y-3 text-sm">
            <div class="flex justify-between items-center"><span class="text-slate-500">المتجر:</span><span class="font-bold text-slate-800">${d.storeName || '—'}</span></div>
            <div class="flex justify-between items-center"><span class="text-slate-500">المنتجات:</span><span class="font-bold text-slate-800">${d.products.length}</span></div>
            <div class="flex justify-between items-center"><span class="text-slate-500">واتساب:</span><span class="font-bold ${d.whatsappConnected ? 'text-emerald-600' : 'text-slate-400'}">${d.whatsappConnected ? '✓ متصل' : 'غير متصل'}</span></div>
          </div>
        </div>
        <button onclick="onbFinish()" class="gradient-primary text-white px-10 py-4 rounded-2xl font-black text-lg transition shadow-2xl shadow-primary-600/25 hover:scale-105">
          افتح لوحة التحكم →
        </button>
      </div>
    `
  }

  return `
    <div class="min-h-screen bg-slate-50 p-4 flex flex-col">
      <div class="max-w-3xl w-full mx-auto flex items-center justify-between py-4">
        <div class="flex items-center gap-2.5">
          <div class="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-white font-bold">ط</div>
          <span class="font-bold text-slate-800">طلبي</span>
        </div>
        <button onclick="onbSkip()" class="text-sm text-slate-500 hover:text-slate-800 font-medium">تخطي الإعداد →</button>
      </div>

      <div class="max-w-3xl w-full mx-auto mb-8 mt-4">
        <div class="flex items-center gap-2">
          ${[1,2,3,4].map((n, i) => `
            ${i > 0 ? `<div class="flex-1 h-0.5 rounded-full transition-all ${step > n-1 ? 'bg-emerald-500' : 'bg-slate-200'}"></div>` : ''}
            <div class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${step === n ? 'gradient-primary text-white scale-110 shadow-lg shadow-primary-600/25' : step > n ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-400'}">
              ${step > n ? '✓' : n}
            </div>
          `).join('')}
        </div>
        <div class="flex justify-between mt-3 text-xs text-slate-500 font-medium px-1">
          <span>المتجر</span><span>المنتجات</span><span>واتساب</span><span>جاهز</span>
        </div>
      </div>

      <div class="max-w-3xl w-full mx-auto flex-1">
        <div class="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 md:p-12 animate-fade-in">
          ${stepContent[step]}
        </div>
      </div>

      <div class="max-w-3xl w-full mx-auto mt-6 flex justify-between">
        <button onclick="onbPrev()" class="${step === 1 ? 'invisible' : ''} bg-slate-100 hover:bg-slate-200 text-slate-700 px-6 py-3 rounded-xl font-bold text-sm transition">← السابق</button>
        <button onclick="onbNext()" class="${step === 4 ? 'invisible' : ''} gradient-primary text-white px-6 py-3 rounded-xl font-bold text-sm transition ml-auto">التالي →</button>
      </div>
    </div>
  `
}

function onbAddProduct() {
  const name = $('#onb-prod-name').value.trim()
  const price = parseFloat($('#onb-prod-price').value)
  if (!name || !price) return toast('أدخل الاسم والسعر', 'error')
  app.onboardingData.products.push({ name, price })
  render()
}
function onbRemoveProduct(i) {
  app.onboardingData.products.splice(i, 1)
  render()
}
function onbLoadSample() {
  app.onboardingData.products = [
    { name: 'تيشيرت أسود L', price: 150 },
    { name: 'تيشيرت أبيض M', price: 150 },
    { name: 'حذاء رياضي 42', price: 450 },
    { name: 'بنطلون جينز 32', price: 350 },
    { name: 'كوتشي نسائي 38', price: 380 }
  ]
  toast('تم استيراد 5 منتجات')
  render()
}
function onbConnectWhatsApp() {
  const btn = $('#onb-connect-btn')
  btn.disabled = true
  btn.textContent = 'جاري الاتصال...'
  setTimeout(() => {
    app.onboardingData.whatsappConnected = true
    toast('تم الربط بنجاح ✓')
    render()
  }, 1200)
}
function onbNext() {
  const step = app.onboardingStep
  if (step === 1) {
    const name = $('#onb-store-name').value.trim()
    if (!name) return toast('أدخل اسم المتجر', 'error')
    app.onboardingData.storeName = name
    app.onboardingData.storeType = $('#onb-store-type').value
    app.onboardingData.ordersRange = $('#onb-orders-range').value
  }
  if (step === 3 && !app.onboardingData.whatsappConnected) {
    if (!confirm('لم يتم ربط واتساب. هل تريد المتابعة؟')) return
  }
  if (step < 4) { app.onboardingStep++; window.scrollTo(0, 0); render() }
}
function onbPrev() {
  if (app.onboardingStep > 1) { app.onboardingStep--; window.scrollTo(0, 0); render() }
}
function onbFinish() {
  if (app.user) {
    auth.saveStore(app.user.email, app.onboardingData)
    auth.markOnboarded(app.user.email)
    app.store = app.onboardingData
  }
  app.view = 'app'
  app.route = 'dashboard'
  toast('أهلاً بك في طلبي! 🎉')
  render()
}
function onbSkip() {
  if (!confirm('تخطي الإعداد؟ يمكنك إكماله لاحقاً من الإعدادات.')) return
  if (app.user) auth.markOnboarded(app.user.email)
  app.view = 'app'
  app.route = 'dashboard'
  render()
}

// ═══════════════════════════════════════════════════════════════════════
