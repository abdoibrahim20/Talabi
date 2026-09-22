// 13. MAIN RENDER
// ═══════════════════════════════════════════════════════════════════════
function render() {
  const appEl = $('#app')

  if (app.view === 'loading') {
    appEl.innerHTML = `<div class="min-h-screen flex items-center justify-center bg-slate-50">
      <div class="text-center">
        <div class="w-16 h-16 gradient-primary rounded-3xl flex items-center justify-center text-white font-black text-2xl mx-auto mb-4 animate-float shadow-2xl shadow-primary-600/30">ط</div>
        <div class="text-slate-500 text-sm animate-pulse">جاري التحميل...</div>
      </div>
    </div>`
    return
  }

  if (app.view === 'landing') { appEl.innerHTML = LandingScreen(); return }
  if (app.view === 'login') { appEl.innerHTML = AuthScreen('login'); return }
  if (app.view === 'signup') { appEl.innerHTML = AuthScreen('signup'); return }
  if (app.view === 'onboarding') {
    appEl.innerHTML = OnboardingScreen()
    // Draw QR
    const qr = $('#onb-qr')
    if (qr && !qr.children.length) {
      for (let i = 0; i < 64; i++) {
        const cell = document.createElement('div')
        cell.className = (Math.random() > 0.5 ? 'bg-white' : 'bg-slate-900') + ' rounded-sm'
        qr.appendChild(cell)
      }
    }
    return
  }

  if (app.view === 'app') {
    const screens = {
      dashboard: DashboardScreen,
      orders: OrdersScreen,
      'order-detail': OrderDetailScreen,
      products: ProductsScreen,
      customers: CustomersScreen,
      reports: ReportsScreen,
      settings: SettingsScreen
    }
    const screenHtml = (screens[app.route] || DashboardScreen)()
    appEl.innerHTML = `
      <div class="min-h-screen bg-slate-50">
        ${Sidebar()}
        <main class="lg:mr-64 pb-24 lg:pb-8">
          <div class="p-4 lg:p-8 max-w-7xl mx-auto animate-fade-in">${screenHtml}</div>
        </main>
        ${MobileNav()}
      </div>
    `
  }
}

// ═══════════════════════════════════════════════════════════════════════
// 14. BOOT — نقطة البداية
// ═══════════════════════════════════════════════════════════════════════
function boot() {
  const session = auth.session()
  if (session) {
    app.user = { email: session.email, name: session.name }
    app.store = auth.getStore(session.email)
    app.onboardingData = app.store || app.onboardingData
    app.view = auth.isOnboarded(session.email) ? 'app' : 'onboarding'
  } else {
    app.view = 'landing'
  }
  render()
}

boot()
