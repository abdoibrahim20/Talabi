// 5. NAVIGATION
// ═══════════════════════════════════════════════════════════════════════
function go(view) { app.view = view; window.scrollTo(0, 0); render() }
function nav(route, id = null) { app.route = route; app.selectedOrderId = id; window.scrollTo(0, 0); render() }
function setFilter(f) { app.filter = f; render() }
function setSearch(s) { app.search = s; render() }

