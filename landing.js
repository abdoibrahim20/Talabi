// 8. SCREENS — LANDING
// ═══════════════════════════════════════════════════════════════════════
function LandingScreen() {
  return `
    <div class="bg-white">
      <!-- NAVBAR -->
      <nav class="fixed top-0 inset-x-0 z-50 glass border-b border-slate-200/60">
        <div class="max-w-7xl mx-auto px-4 lg:px-8 py-3 flex items-center justify-between">
          <div class="flex items-center gap-2.5">
            <div class="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary-600/20">ط</div>
            <span class="font-bold text-slate-800 text-lg">طلبي</span>
          </div>
          <div class="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#features" class="text-slate-600 hover:text-primary-600 transition">المميزات</a>
            <a href="#how" class="text-slate-600 hover:text-primary-600 transition">كيف يعمل</a>
            <a href="#pricing" class="text-slate-600 hover:text-primary-600 transition">الأسعار</a>
            <a href="#faq" class="text-slate-600 hover:text-primary-600 transition">الأسئلة</a>
          </div>
          <div class="flex items-center gap-2">
            <button onclick="go('login')" class="text-sm font-semibold text-slate-600 hover:text-primary-600 px-4 py-2 transition">دخول</button>
            <button onclick="go('signup')" class="gradient-primary text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-lg shadow-primary-600/25 hover:shadow-xl hover:scale-105 transition-all">ابدأ مجاناً</button>
          </div>
        </div>
      </nav>

      <!-- HERO -->
      <section class="pt-32 pb-24 px-4 gradient-hero relative overflow-hidden">
        <div class="absolute inset-0 pattern-dots opacity-40"></div>
        <div class="max-w-5xl mx-auto text-center relative">
          <div class="inline-flex items-center gap-2 bg-white border border-primary-200 rounded-full px-4 py-2 mb-8 text-sm shadow-sm animate-fade-in">
            <span class="w-2 h-2 bg-wa-500 rounded-full animate-pulse"></span>
            <span class="text-slate-700 font-semibold">مدعوم بالذكاء الاصطناعي · يفهم العربية</span>
          </div>
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-black text-slate-800 mb-6 leading-[1.15] tracking-tight">
            حوّل محادثات واتساب<br>
            إلى <span class="text-gradient">طلبات منظمة</span> تلقائياً
          </h1>
          <p class="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            وفّر 4 ساعات يومياً، تجنب 90% من الأخطاء، وتوسع بدون توظيف إضافي. طلبي يفهم عملاءك بالعامية المصرية ويجهز طلباتهم تلقائياً.
          </p>
          <div class="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <button onclick="go('signup')" class="gradient-primary text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-primary-600/30 hover:shadow-2xl hover:scale-105 transition-all">
              ابدأ مجاناً — 50 طلب
            </button>
            <a href="#how" class="bg-white text-slate-700 px-8 py-4 rounded-2xl font-bold text-lg border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all inline-flex items-center justify-center gap-2">
              <span>شاهد كيف يعمل</span>
              <span>▶</span>
            </a>
          </div>
          <div class="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
            <div class="flex items-center gap-2"><span class="text-emerald-500">✓</span> بدون بطاقة ائتمان</div>
            <div class="flex items-center gap-2"><span class="text-emerald-500">✓</span> إعداد في 3 دقائق</div>
            <div class="flex items-center gap-2"><span class="text-emerald-500">✓</span> دعم كامل للعربية</div>
          </div>
        </div>
      </section>

      <!-- STATS BAR -->
      <section class="py-12 bg-slate-900 text-white">
        <div class="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div><div class="text-3xl md:text-4xl font-black text-primary-300">4h</div><div class="text-sm text-slate-400 mt-1">توفير يومي</div></div>
          <div><div class="text-3xl md:text-4xl font-black text-primary-300">94%</div><div class="text-sm text-slate-400 mt-1">دقة الاستخراج</div></div>
          <div><div class="text-3xl md:text-4xl font-black text-primary-300">90%</div><div class="text-sm text-slate-400 mt-1">تقليل الأخطاء</div></div>
          <div><div class="text-3xl md:text-4xl font-black text-primary-300">3 min</div><div class="text-sm text-slate-400 mt-1">وقت الإعداد</div></div>
        </div>
      </section>

      <!-- BEFORE / AFTER -->
      <section id="features" class="py-24 px-4 bg-white">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <div class="text-sm font-bold text-primary-600 mb-3">المقارنة</div>
            <h2 class="text-3xl md:text-5xl font-black text-slate-800 mb-4">من الفوضى إلى النظام</h2>
            <p class="text-slate-600 text-lg">شاهد الفرق في 30 ثانية</p>
          </div>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-rose-50 border-2 border-rose-200 rounded-3xl p-8 relative overflow-hidden">
              <div class="absolute top-4 left-4 text-6xl opacity-10">❌</div>
              <div class="flex items-center gap-3 mb-6 relative">
                <div class="w-12 h-12 bg-rose-500 rounded-2xl flex items-center justify-center text-white text-xl shadow-lg">✗</div>
                <h3 class="font-bold text-slate-800 text-xl">قبل طلبي</h3>
              </div>
              <ul class="space-y-4 text-slate-700 relative">
                <li class="flex gap-3"><span class="text-rose-500 mt-1 shrink-0">●</span><span>3-5 ساعات يومياً نسخ ولصق في Excel</span></li>
                <li class="flex gap-3"><span class="text-rose-500 mt-1 shrink-0">●</span><span>5-10% من الطلبات تُنسى أو تُخطئ</span></li>
                <li class="flex gap-3"><span class="text-rose-500 mt-1 shrink-0">●</span><span>العميل يكرر نفس المعلومات كل مرة</span></li>
                <li class="flex gap-3"><span class="text-rose-500 mt-1 shrink-0">●</span><span>لا يمكنك التوسع — كل طلب يمر عبرك</span></li>
                <li class="flex gap-3"><span class="text-rose-500 mt-1 shrink-0">●</span><span>لا تعرف أفضل المنتجات أو العملاء</span></li>
              </ul>
            </div>
            <div class="bg-emerald-50 border-2 border-emerald-200 rounded-3xl p-8 relative overflow-hidden">
              <div class="absolute top-4 left-4 text-6xl opacity-10">✓</div>
              <div class="flex items-center gap-3 mb-6 relative">
                <div class="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white text-xl shadow-lg">✓</div>
                <h3 class="font-bold text-slate-800 text-xl">مع طلبي</h3>
              </div>
              <ul class="space-y-4 text-slate-700 relative">
                <li class="flex gap-3"><span class="text-emerald-500 mt-1 shrink-0">●</span><span>الطلبات تُنشأ تلقائياً من المحادثات</span></li>
                <li class="flex gap-3"><span class="text-emerald-500 mt-1 shrink-0">●</span><span>دقة 94%+ في الاستخراج</span></li>
                <li class="flex gap-3"><span class="text-emerald-500 mt-1 shrink-0">●</span><span>تأكيد تلقائي للعميل مع الملخص</span></li>
                <li class="flex gap-3"><span class="text-emerald-500 mt-1 shrink-0">●</span><span>تقارير فورية — تعرف الأكثر مبيعاً</span></li>
                <li class="flex gap-3"><span class="text-emerald-500 mt-1 shrink-0">●</span><span>فريقك يرى الطلبات بدونك</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- FEATURES GRID -->
      <section class="py-24 px-4 bg-slate-50">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <div class="text-sm font-bold text-primary-600 mb-3">المميزات</div>
            <h2 class="text-3xl md:text-5xl font-black text-slate-800 mb-4">كل ما تحتاجه في مكان واحد</h2>
          </div>
          <div class="grid md:grid-cols-3 gap-6">
            ${[
              { icon: '🧠', title: 'ذكاء اصطناعي يفهم العربية', desc: 'يفهم "عايز" و"كاش" وأسماء المدن المصرية واللهجات المختلفة' },
              { icon: '💬', title: 'ربط مباشر بواتساب', desc: 'بدون تغيير رقمك. امسح QR مرة واحدة وابدأ' },
              { icon: '📦', title: 'إدارة طلبات كاملة', desc: 'من الاستلام للتسليم، كل حالات الطلب في مكان واحد' },
              { icon: '📊', title: 'تقارير فورية', desc: 'اعرف أفضل المنتجات، أكثر العملاء، واتجاهات المبيعات' },
              { icon: '🔔', title: 'تأكيدات تلقائية', desc: 'العميل يستلم تأكيد الطلب فوراً بدون تدخل منك' },
              { icon: '🔒', title: 'أمان وخصوصية', desc: 'بياناتك مشفرة. لا نشاركها مع أي طرف ثالث' }
            ].map(f => `
              <div class="bg-white rounded-3xl p-8 border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
                <div class="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-2xl mb-5">${f.icon}</div>
                <h3 class="font-bold text-slate-800 text-lg mb-2">${f.title}</h3>
                <p class="text-slate-600 text-sm leading-relaxed">${f.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- HOW IT WORKS -->
      <section id="how" class="py-24 px-4 bg-white">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-16">
            <div class="text-sm font-bold text-primary-600 mb-3">الخطوات</div>
            <h2 class="text-3xl md:text-5xl font-black text-slate-800 mb-4">3 خطوات فقط</h2>
            <p class="text-slate-600 text-lg">من التسجيل للطلب الأول في أقل من 5 دقائق</p>
          </div>
          <div class="grid md:grid-cols-3 gap-8 relative">
            <div class="hidden md:block absolute top-16 right-[16%] left-[16%] h-0.5 bg-gradient-to-l from-primary-200 via-primary-400 to-primary-200"></div>
            ${[
              { n: 1, title: 'اربط واتساب', desc: 'امسح رمز QR مرة واحدة من هاتفك. لا تحتاج لتغيير رقمك أو تطبيقك.', icon: '📱' },
              { n: 2, title: 'أضف منتجاتك', desc: 'يدوياً أو عبر CSV. أضف الأسماء والأسعار والكميات.', icon: '📦' },
              { n: 3, title: 'ابدأ الاستقبال', desc: 'أي رسالة طلب تُحوّل تلقائياً لطلب منظم. أنت فقط تؤكد.', icon: '🚀' }
            ].map(s => `
              <div class="text-center relative">
                <div class="w-20 h-20 gradient-primary rounded-3xl flex items-center justify-center text-white text-3xl font-black mx-auto mb-6 shadow-xl shadow-primary-600/25 relative z-10">${s.n}</div>
                <div class="text-4xl mb-3">${s.icon}</div>
                <h3 class="font-bold text-slate-800 text-xl mb-3">${s.title}</h3>
                <p class="text-slate-600 text-sm leading-relaxed max-w-xs mx-auto">${s.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- TESTIMONIALS -->
      <section class="py-24 px-4 bg-slate-50">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <div class="text-sm font-bold text-primary-600 mb-3">آراء العملاء</div>
            <h2 class="text-3xl md:text-5xl font-black text-slate-800 mb-4">ماذا يقول التجار؟</h2>
            <p class="text-slate-600 text-lg">من مستخدمي النسخة التجريبية</p>
          </div>
          <div class="grid md:grid-cols-3 gap-6">
            ${[
              { quote: 'كنت أقضي 4 ساعات يومياً في نسخ الطلبات. الآن 30 دقيقة فقط للمراجعة والتأكيد.', name: 'محمد عبد الرحمن', role: 'متجر ملابس — القاهرة', initial: 'م' },
              { quote: 'الأخطاء انخفضت من 8% إلى أقل من 1%. عملائي لاحظوا الفرق فوراً.', name: 'سارة حسن', role: 'متجر أحذية — الإسكندرية', initial: 'س' },
              { quote: 'أهم حاجة: النظام يفهم العامية المصرية. "عايز" و"كاش" وكل الكلام ده.', name: 'أحمد مصطفى', role: 'متجر إلكترونيات — الجيزة', initial: 'أ' }
            ].map(t => `
              <div class="bg-white rounded-3xl p-8 border border-slate-100 relative">
                <div class="text-5xl text-primary-300 font-serif absolute top-4 right-6 leading-none">"</div>
                <p class="text-slate-700 mb-6 leading-relaxed relative">${t.quote}</p>
                <div class="flex items-center gap-3 pt-6 border-t border-slate-100">
                  <div class="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold">${t.initial}</div>
                  <div>
                    <div class="font-bold text-slate-800 text-sm">${t.name}</div>
                    <div class="text-xs text-slate-500">${t.role}</div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- PRICING -->
      <section id="pricing" class="py-24 px-4 bg-white">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <div class="text-sm font-bold text-primary-600 mb-3">الأسعار</div>
            <h2 class="text-3xl md:text-5xl font-black text-slate-800 mb-4">أسعار بسيطة وواضحة</h2>
            <p class="text-slate-600 text-lg">ابدأ مجاناً. ادفع فقط عندما تنمو.</p>
          </div>
          <div class="grid md:grid-cols-3 gap-6 items-stretch">
            ${[
              { name: 'مجاني', price: 0, features: ['50 طلب شهرياً', 'ربط واتساب', 'استخراج تلقائي', 'لوحة تحكم أساسية'], cta: 'ابدأ مجاناً', popular: false, variant: 'secondary' },
              { name: 'أساسي', price: 499, features: ['300 طلب شهرياً', 'كل ميزات المجاني', 'تصدير CSV', 'تقارير متقدمة', 'دعم أولوية'], cta: 'اشترك الآن', popular: true, variant: 'primary' },
              { name: 'احترافي', price: 999, features: ['1,000 طلب شهرياً', 'كل ميزات الأساسي', 'تعدد مستخدمين', 'API', 'مدير حساب'], cta: 'تواصل معنا', popular: false, variant: 'secondary' }
            ].map(p => `
              <div class="rounded-3xl p-8 relative flex flex-col ${p.popular ? 'border-2 border-primary-500 shadow-2xl shadow-primary-600/15 md:scale-105' : 'border border-slate-200'}">
                ${p.popular ? `<div class="absolute -top-4 right-8 bg-primary-600 text-white text-xs px-4 py-1.5 rounded-full font-bold shadow-lg">الأكثر شيوعاً</div>` : ''}
                <div class="font-bold text-slate-800 text-xl mb-2">${p.name}</div>
                <div class="flex items-baseline gap-2 mb-6">
                  <div class="text-5xl font-black text-slate-800">${p.price}</div>
                  <div class="text-slate-500 text-sm">جنيه/شهر</div>
                </div>
                <ul class="space-y-3 text-sm text-slate-600 mb-8 flex-1">
                  ${p.features.map(f => `<li class="flex items-center gap-2"><span class="text-emerald-500 shrink-0">✓</span><span>${f}</span></li>`).join('')}
                </ul>
                <button onclick="go('signup')" class="w-full py-3.5 rounded-xl font-bold text-sm transition ${p.popular ? 'gradient-primary text-white shadow-lg shadow-primary-600/25 hover:shadow-xl' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}">${p.cta}</button>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section id="faq" class="py-24 px-4 bg-slate-50">
        <div class="max-w-3xl mx-auto">
          <div class="text-center mb-16">
            <div class="text-sm font-bold text-primary-600 mb-3">الأسئلة الشائعة</div>
            <h2 class="text-3xl md:text-5xl font-black text-slate-800 mb-4">عندك سؤال؟</h2>
          </div>
          <div class="space-y-3">
            ${[
              { q: 'هل يفهم النظام العامية المصرية؟', a: 'أيوه. النظام مدرّب على فهم "عايز"، "كاش"، أسماء المدن المصرية، والمصطلحات الشائعة. دقته في الاستخراج 94%+ في المتوسط.' },
              { q: 'هل أحتاج لتغيير رقم الواتساب بتاعي؟', a: 'لا. نستخدم WhatsApp Business API اللي يسمحلك تستخدم رقمك الحالي. لا حاجة لتغيير أي شيء على هاتفك أو تطبيقك.' },
              { q: 'هل بياناتي آمنة؟', a: 'نعم. كل البيانات مشفرة أثناء النقل والتخزين. لا نشاركها مع أي طرف ثالث. يمكنك حذف حسابك وبياناتك في أي وقت.' },
              { q: 'هل يمكنني الإلغاء في أي وقت؟', a: 'طبعاً. لا عقود، لا التزامات. تقدر تلغي اشتراكك في أي وقت من الإعدادات بضغطة زر.' },
              { q: 'ماذا لو كان لدي فريق؟', a: 'الخطة الاحترافية تدعم مستخدمين متعددين. كل عضو فريق يمكنه رؤية الطلبات وإدارتها بدون الحاجة للوصول لحسابك الشخصي.' },
              { q: 'كيف أحصل على دعم؟', a: 'كل الخطط تحصل على دعم عبر البريد. الخطط المدفوعة تحصل على دعم أولوية عبر الواتساب مع وقت استجابة أقل من ساعة.' }
            ].map(f => `
              <details class="bg-white rounded-2xl border border-slate-100 p-5 group">
                <summary class="font-bold text-slate-800 cursor-pointer flex items-center justify-between list-none">
                  <span>${f.q}</span>
                  <span class="chevron text-primary-500 text-xl shrink-0 mr-2">▼</span>
                </summary>
                <p class="mt-4 text-slate-600 leading-relaxed pr-0">${f.a}</p>
              </details>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="py-24 px-4 gradient-primary text-white relative overflow-hidden">
        <div class="absolute inset-0 pattern-dots opacity-20"></div>
        <div class="max-w-3xl mx-auto text-center relative">
          <h2 class="text-3xl md:text-5xl font-black mb-6">جاهز توفّر 4 ساعات يومياً؟</h2>
          <p class="text-primary-100 mb-10 text-lg">ابدأ مجاناً. لا تحتاج بطاقة ائتمان. الإعداد في 3 دقائق.</p>
          <button onclick="go('signup')" class="bg-white text-primary-700 px-10 py-4 rounded-2xl font-black text-lg hover:bg-primary-50 transition-all shadow-2xl hover:scale-105">
            ابدأ الآن مجاناً →
          </button>
        </div>
      </section>

      <!-- FOOTER -->
      <footer class="bg-slate-900 text-slate-400 py-16 px-4">
        <div class="max-w-6xl mx-auto">
          <div class="grid md:grid-cols-4 gap-8 mb-10">
            <div class="md:col-span-2">
              <div class="flex items-center gap-2.5 mb-4">
                <div class="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-white font-bold">ط</div>
                <span class="font-bold text-white text-lg">طلبي</span>
              </div>
              <p class="text-sm leading-relaxed max-w-md">منصة عربية تحوّل محادثات واتساب إلى طلبات منظمة باستخدام الذكاء الاصطناعي. مصممة خصيصاً للتجار العرب.</p>
            </div>
            <div>
              <div class="font-bold text-white mb-4">المنتج</div>
              <ul class="space-y-2 text-sm">
                <li><a href="#features" class="hover:text-white transition">المميزات</a></li>
                <li><a href="#pricing" class="hover:text-white transition">الأسعار</a></li>
                <li><a href="#" class="hover:text-white transition">التحديثات</a></li>
              </ul>
            </div>
            <div>
              <div class="font-bold text-white mb-4">الشركة</div>
              <ul class="space-y-2 text-sm">
                <li><a href="#" class="hover:text-white transition">من نحن</a></li>
                <li><a href="#" class="hover:text-white transition">تواصل معنا</a></li>
                <li><a href="#" class="hover:text-white transition">الخصوصية</a></li>
              </ul>
            </div>
          </div>
          <div class="pt-8 border-t border-slate-800 text-center text-sm">
            © 2026 طلبي. جميع الحقوق محفوظة.
          </div>
        </div>
      </footer>
    </div>
  `
}

