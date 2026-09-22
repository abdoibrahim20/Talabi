// 6. BUSINESS LOGIC
// ═══════════════════════════════════════════════════════════════════════
function confirmOrder(id) {
  const o = DB.orders.find(x => x.id === id)
  if (o) { o.status = 'confirmed'; toast('تم تأكيد الطلب بنجاح ✓'); render() }
}
function shipOrder(id) {
  const o = DB.orders.find(x => x.id === id)
  if (o) { o.status = 'shipped'; toast('تم شحن الطلب 🚚'); render() }
}
function cancelOrder(id) {
  const o = DB.orders.find(x => x.id === id)
  if (o) { o.status = 'cancelled'; toast('تم إلغاء الطلب', 'error'); render() }
}

// ═══════════════════════════════════════════════════════════════════════
