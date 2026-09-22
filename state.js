// 1. STATE — الحالة المركزية للتطبيق
// ═══════════════════════════════════════════════════════════════════════
const app = {
  view: 'loading',       // loading | landing | login | signup | onboarding | app
  route: 'dashboard',    // dashboard | orders | order-detail | products | customers | reports | settings
  user: null,
  store: null,
  selectedOrderId: null,
  filter: 'all',
  search: '',
  onboardingStep: 1,
  onboardingData: { storeName: '', storeType: '', ordersRange: '', products: [], whatsappConnected: false },
  modal: null,
}

// ═══════════════════════════════════════════════════════════════════════
// 2. DATA — بيانات تجريبية
// ═══════════════════════════════════════════════════════════════════════
const DB = {
  orders: [
    { id: 'o_1', shortId: 'A1B2C3', status: 'new',
      customer: { name: 'أحمد محمد', phone: '+201012345678', address: 'مدينة نصر، القاهرة — شارع عباس العقاد، برج النور، الدور 5', totalOrders: 3, totalSpent: 1250 },
      items: [{ name: 'تيشيرت أسود L', emoji: '👕', qty: 2, price: 150, sku: 'TSH-BLK-L' }],
      subtotal: 300, shipping: 35, total: 335, payment: 'cod', createdAt: Date.now() - 5*60*1000, aiConfidence: 0.94,
      conversation: [
        { role: 'customer', content: 'عايز 2 تيشيرت أسود مقاس L', time: '10:23' },
        { role: 'customer', content: 'مدينة نصر، شارع عباس العقاد، برج النور، الدور 5', time: '10:24' },
        { role: 'customer', content: 'الدفع كاش عند الاستلام', time: '10:24' },
        { role: 'bot', content: '✅ استلمنا طلبك! جاري المراجعة والتأكيد.', time: '10:25' }
      ]
    },
    { id: 'o_2', shortId: 'C3D4E5', status: 'confirmed',
      customer: { name: 'سارة علي', phone: '+201123456789', address: 'المعادي، القاهرة', totalOrders: 7, totalSpent: 3450 },
      items: [{ name: 'حذاء رياضي 42', emoji: '👟', qty: 1, price: 450, sku: 'SH-RUN-42' }],
      subtotal: 450, shipping: 35, total: 485, payment: 'transfer', createdAt: Date.now() - 23*60*1000, aiConfidence: 0.98,
      conversation: [
        { role: 'customer', content: 'عايز حذاء رياضي مقاس 42', time: '09:55' },
        { role: 'customer', content: 'هحول بنكي', time: '09:56' }
      ]
    },
    { id: 'o_3', shortId: 'E5F6G7', status: 'needs_info',
      customer: { name: 'محمود حسن', phone: '+201234567890', totalOrders: 1, totalSpent: 0 },
      items: [{ name: 'بنطلون جينز 32', emoji: '👖', qty: 1, price: 350, sku: 'JN-BLU-32' }],
      subtotal: 350, shipping: 0, total: 350, payment: 'cod', createdAt: Date.now() - 60*60*1000, aiConfidence: 0.72,
      conversation: [{ role: 'customer', content: 'عايز بنطلون جينز 32', time: '09:15' }]
    },
    { id: 'o_4', shortId: 'G7H8I9', status: 'shipped',
      customer: { name: 'نورا إبراهيم', phone: '+201345678901', address: '6 أكتوبر، الجيزة', totalOrders: 4, totalSpent: 1890 },
      items: [{ name: 'تيشيرت أبيض M', emoji: '👕', qty: 3, price: 150, sku: 'TSH-WHT-M' }],
      subtotal: 450, shipping: 35, total: 485, payment: 'card', createdAt: Date.now() - 3*60*60*1000, aiConfidence: 0.96,
      conversation: [{ role: 'customer', content: '3 تيشيرت أبيض مقاس M', time: '07:30' }]
    },
    { id: 'o_5', shortId: 'K9L0M1', status: 'delivered',
      customer: { name: 'عمر خالد', phone: '+201456789012', address: 'الزمالك، القاهرة', totalOrders: 12, totalSpent: 6780 },
      items: [{ name: 'كوتشي نسائي 38', emoji: '👠', qty: 1, price: 380, sku: 'SH-WMN-38' }],
      subtotal: 380, shipping: 35, total: 415, payment: 'transfer', createdAt: Date.now() - 8*60*60*1000, aiConfidence: 0.99,
      conversation: [{ role: 'customer', content: 'عايز كوتشي نسائي 38', time: '05:00' }]
    }
  ],
  products: [
    { id: 'p_1', name: 'تيشيرت أسود L', emoji: '👕', sku: 'TSH-BLK-L', price: 150, stock: 45, status: 'ok' },
    { id: 'p_2', name: 'حذاء رياضي 42', emoji: '👟', sku: 'SH-RUN-42', price: 450, stock: 3, status: 'low' },
    { id: 'p_3', name: 'بنطلون جينز 32', emoji: '👖', sku: 'JN-BLU-32', price: 350, stock: 0, status: 'out' },
    { id: 'p_4', name: 'تيشيرت أبيض M', emoji: '👕', sku: 'TSH-WHT-M', price: 150, stock: 28, status: 'ok' },
    { id: 'p_5', name: 'كوتشي نسائي 38', emoji: '👠', sku: 'SH-WMN-38', price: 380, stock: 12, status: 'ok' },
    { id: 'p_6', name: 'جاكيت شتوي L', emoji: '🧥', sku: 'JKT-WNT-L', price: 650, stock: 8, status: 'ok' }
  ]
}

const STATUS = {
  new: { label: 'جديد', cls: 'bg-amber-100 text-amber-700 border-amber-200', dot: 'bg-amber-500', emoji: '🟡' },
  confirmed: { label: 'مؤكد', cls: 'bg-emerald-100 text-emerald-700 border-emerald-200', dot: 'bg-emerald-500', emoji: '🟢' },
  shipped: { label: 'تم الشحن', cls: 'bg-primary-100 text-primary-700 border-primary-200', dot: 'bg-primary-500', emoji: '🚚' },
  delivered: { label: 'مكتمل', cls: 'bg-slate-100 text-slate-700 border-slate-200', dot: 'bg-slate-500', emoji: '✅' },
  needs_info: { label: 'يحتاج معلومات', cls: 'bg-rose-100 text-rose-700 border-rose-200', dot: 'bg-rose-500', emoji: '🔴' },
  cancelled: { label: 'ملغي', cls: 'bg-rose-100 text-rose-700 border-rose-200', dot: 'bg-rose-500', emoji: '❌' }
}

const PAYMENT = { cod: 'دفع عند الاستلام', transfer: 'تحويل بنكي', card: 'بطاقة', wallet: 'محفظة' }

