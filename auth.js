const auth = {
  users() { try { return JSON.parse(localStorage.getItem('talaby_users') || '{}') } catch { return {} } },
  session() { try { return JSON.parse(localStorage.getItem('talaby_session') || 'null') } catch { return null } },
  signup(name, email, password) {
    const users = this.users()
    if (users[email]) throw new Error('هذا البريد مسجل بالفعل')
    users[email] = { name, email, password, createdAt: Date.now() }
    localStorage.setItem('talaby_users', JSON.stringify(users))
    localStorage.setItem('talaby_session', JSON.stringify({ email, name }))
    return users[email]
  },
  login(email, password) {
    const u = this.users()[email]
    if (!u) throw new Error('لا يوجد حساب بهذا البريد')
    if (u.password !== password) throw new Error('كلمة المرور غير صحيحة')
    localStorage.setItem('talaby_session', JSON.stringify({ email, name: u.name }))
    return u
  },
  logout() {
    localStorage.removeItem('talaby_session')
    app.user = null
    app.view = 'landing'
    render()
  },
  getStore(email) {
    try { return JSON.parse(localStorage.getItem('talaby_store_' + email) || 'null') } catch { return null }
  },
  saveStore(email, data) {
    localStorage.setItem('talaby_store_' + email, JSON.stringify(data))
  },
  isOnboarded(email) { return !!localStorage.getItem('talaby_onboarded_' + email) },
  markOnboarded(email) { localStorage.setItem('talaby_onboarded_' + email, '1') }
}


function AuthScreen(mode) {
  return `
    <div class="min-h-screen grid lg:grid-cols-2">
      <!-- LEFT: Branding -->
      <div class="hidden lg:flex flex-col justify-center p-12 gradient-primary text-white relative overflow-hidden">
        <div class="absolute inset-0 pattern-dots opacity-20"></div>
        <div class="absolute -top-20 -left-20 w-80 h-80 bg-white/10 rounded-full"></div>
        <div class="absolute -bottom-32 -right-32 w-96 h-96 bg-white/10 rounded-full"></div>
        <div class="relative max-w-lg">
          <div class="flex items-center gap-3 mb-10">
            <div class="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-2xl font-bold backdrop-blur">ط</div>
            <span class="text-2xl font-bold">طلبي</span>
          </div>
          <h2 class="text-4xl font-black mb-5 leading-tight">حوّل محادثات واتساب إلى طلبات منظمة تلقائياً</h2>
          <p class="text-primary-100 mb-10 leading-relaxed text-lg">انضم لمئات التجار الذين وفروا آلاف الساعات شهرياً وتجنبوا مئات الأخطاء.</p>
          <div class="space-y-4">
            ${[
              { icon: '⚡', text: 'إعداد في 3 دقائق فقط' },
              { icon: '🎯', text: 'دقة 94%+ في الاستخراج' },
              { icon: '🌍', text: 'دعم كامل للعربية واللهجات' },
              { icon: '🔒', text: 'بياناتك آمنة ومشفرة' }
            ].map(f => `
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center text-lg backdrop-blur">${f.icon}</div>
                <span class="font-medium">${f.text}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- RIGHT: Form -->
      <div class="flex items-center justify-center p-6 lg:p-12 bg-white">
        <div class="w-full max-w-md">
          <div class="flex justify-center mb-8 lg:hidden">
            <div class="flex items-center gap-2">
              <div class="w-11 h-11 rounded-2xl gradient-primary flex items-center justify-center text-white font-bold text-lg">ط</div>
              <span class="font-bold text-slate-800 text-lg">طلبي</span>
            </div>
          </div>

          <button onclick="go('landing')" class="text-sm text-slate-500 hover:text-slate-800 mb-6 inline-flex items-center gap-1">← العودة للرئيسية</button>

          <h1 class="text-3xl font-black text-slate-800 mb-2">${mode === 'signup' ? 'أنشئ حسابك 🚀' : 'أهلاً بعودتك 👋'}</h1>
          <p class="text-slate-500 mb-8">${mode === 'signup' ? 'ابدأ مجاناً — بدون بطاقة ائتمان' : 'سجل دخولك للمتابعة'}</p>

          <form id="auth-form" onsubmit="handleAuth(event, '${mode}')" class="space-y-5">
            ${mode === 'signup' ? `
              <div>
                <label class="text-sm font-semibold text-slate-700 block mb-2">الاسم الكامل</label>
                <input type="text" id="auth-name" required placeholder="أحمد محمد" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all">
              </div>
            ` : ''}
            <div>
              <label class="text-sm font-semibold text-slate-700 block mb-2">البريد الإلكتروني</label>
              <input type="email" id="auth-email" required placeholder="you@example.com" dir="ltr" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-left">
            </div>
            <div>
              <div class="flex items-center justify-between mb-2">
                <label class="text-sm font-semibold text-slate-700">كلمة المرور</label>
                ${mode === 'login' ? `<button type="button" class="text-xs text-primary-600 font-semibold hover:underline">نسيت كلمة المرور؟</button>` : ''}
              </div>
              <div class="relative">
                <input type="password" id="auth-password" required minlength="6" placeholder="••••••••" dir="ltr" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-left">
                <button type="button" onclick="togglePass()" class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-sm">👁️</button>
              </div>
            </div>
            <div id="auth-error" class="hidden bg-rose-50 border border-rose-200 text-rose-700 text-sm rounded-xl px-4 py-3"></div>
            <button type="submit" class="w-full gradient-primary text-white py-4 rounded-xl font-bold text-sm shadow-lg shadow-primary-600/25 hover:shadow-xl transition-all">
              ${mode === 'signup' ? 'إنشاء الحساب' : 'تسجيل الدخول'}
            </button>
          </form>

          <div class="mt-8 text-center text-sm text-slate-500">
            ${mode === 'signup' ? 'لديك حساب بالفعل؟' : 'ليس لديك حساب؟'}
            <button onclick="go('${mode === 'signup' ? 'login' : 'signup'}')" class="text-primary-600 font-bold hover:underline mr-1">
              ${mode === 'signup' ? 'سجل دخولك' : 'أنشئ حساباً'}
            </button>
          </div>
        </div>
      </div>
    </div>
  `
}

function togglePass() {
  const i = $('#auth-password'); if (i) i.type = i.type === 'password' ? 'text' : 'password'
}

function handleAuth(e, mode) {
  e.preventDefault()
  const email = $('#auth-email').value.trim()
  const password = $('#auth-password').value
  const name = mode === 'signup' ? $('#auth-name').value.trim() : ''
  const errEl = $('#auth-error')
  errEl.classList.add('hidden')

  try {
    if (mode === 'signup') {
      if (!name) throw new Error('الاسم مطلوب')
      auth.signup(name, email, password)
      app.user = { email, name }
      app.view = 'onboarding'
      app.onboardingStep = 1
      toast('تم إنشاء الحساب بنجاح 🎉')
    } else {
      auth.login(email, password)
      app.user = { email, name: auth.users()[email].name }
      app.store = auth.getStore(email)
      app.view = auth.isOnboarded(email) ? 'app' : 'onboarding'
      app.route = 'dashboard'
      toast(`أهلاً بعودتك، ${app.user.name.split(' ')[0]} 👋`)
    }
    render()
  } catch (err) {
    errEl.textContent = err.message
    errEl.classList.remove('hidden')
  }
}

