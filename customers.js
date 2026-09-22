function CustomersScreen() {
  const customers = DB.orders.map(o => o.customer).filter((c, i, arr) => arr.findIndex(x => x.phone === c.phone) === i)
  return `
    <div class="mb-6">
      <h1 class="text-2xl md:text-3xl font-black text-slate-800">العملاء</h1>
      <p class="text-slate-500 text-sm mt-1">${customers.length} عميل مسجل</p>
    </div>
    <div class="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead class="bg-slate-50 border-b border-slate-100">
            <tr>
              <th class="text-right px-5 py-4 font-bold text-slate-600">العميل</th>
              <th class="text-right px-5 py-4 font-bold text-slate-600">الهاتف</th>
              <th class="text-right px-5 py-4 font-bold text-slate-600">عدد الطلبات</th>
              <th class="text-right px-5 py-4 font-bold text-slate-600">إجمالي الإنفاق</th>
              <th class="text-right px-5 py-4 font-bold text-slate-600"></th>
            </tr>
          </thead>
          <tbody>
            ${customers.map(c => `
              <tr class="border-b border-slate-50 hover:bg-slate-50 transition">
                <td class="px-5 py-4">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-sm shrink-0">${c.name[0]}</div>
                    <span class="font-bold text-slate-800">${c.name}</span>
                  </div>
                </td>
                <td class="px-5 py-4 text-slate-600 font-mono text-xs" dir="ltr">${c.phone}</td>
                <td class="px-5 py-4 text-slate-600">${c.totalOrders}</td>
                <td class="px-5 py-4 font-bold text-primary-600">${fmt(c.totalSpent)}</td>
                <td class="px-5 py-4 text-right"><button onclick="toast('قريباً', 'info')" class="text-primary-600 text-xs font-bold hover:underline">عرض →</button></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `
}

