(function () {
  /* ---- tooltip: <el data-tip-name="Gravity" data-tip-text="force of" data-tip-val="5.50 pN" data-tip-color="#3fb37a"> ---- */
  var tip = document.createElement('div');
  tip.className = 'tip';
  tip.setAttribute('role', 'tooltip');
  document.body.appendChild(tip);

  function fill(el) {
    tip.textContent = '';
    var n = document.createElement('span');
    n.textContent = el.getAttribute('data-tip-name') + ' ';
    n.style.color = el.getAttribute('data-tip-color') || '#fff';
    var t = document.createElement('span');
    t.className = 't';
    t.textContent = (el.getAttribute('data-tip-text') || '') + ' ';
    var v = document.createElement('span');
    v.textContent = el.getAttribute('data-tip-val') || '';
    tip.append(n, t, v);
  }
  function place(x, y) {
    var w = tip.offsetWidth, h = tip.offsetHeight;
    var nx = x + 16, ny = y + 18;
    if (nx + w > window.innerWidth - 8) nx = x - w - 16;
    if (ny + h > window.innerHeight - 8) ny = y - h - 18;
    tip.style.transform = 'translate(' + Math.max(8, nx) + 'px,' + Math.max(8, ny) + 'px)';
  }
  document.querySelectorAll('[data-tip-name]').forEach(function (el) {
    el.addEventListener('mouseenter', function (e) { fill(el); tip.classList.add('on'); place(e.clientX, e.clientY); });
    el.addEventListener('mousemove', function (e) { place(e.clientX, e.clientY); });
    el.addEventListener('mouseleave', function () { tip.classList.remove('on'); });
    el.addEventListener('focus', function () {
      fill(el); tip.classList.add('on');
      var r = el.getBoundingClientRect(); place(r.left + r.width / 2, r.top + r.height / 2);
    });
    el.addEventListener('blur', function () { tip.classList.remove('on'); });
  });

  /* ---- highlight the paper row for the section currently in view ---- */
  var links = Array.prototype.slice.call(document.querySelectorAll('.paper li a[href^="#"]'));
  if (!links.length || !('IntersectionObserver' in window)) return;
  var map = {};
  links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
  function mark(id) {
    links.forEach(function (a) { a.classList.toggle('current', a === map[id]); });
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) mark(e.target.id); });
  }, { rootMargin: '-25% 0px -65% 0px' });
  Object.keys(map).forEach(function (id) {
    var s = document.getElementById(id);
    if (s) io.observe(s);
  });
  mark(links[0].getAttribute('href').slice(1));

  /* the last section can't reach the trigger band once the page ends, so pin it at the bottom */
  var last = links[links.length - 1].getAttribute('href').slice(1);
  window.addEventListener('scroll', function () {
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) mark(last);
  }, { passive: true });
})();

(function () {
  var root = document.documentElement;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* first tool button: show / hide the menu, remembered between pages */
  var btn = document.querySelector('.tool-menu');
  function setMenu(on, save) {
    root.classList.toggle('menu-off', !on);
    if (btn) btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    if (save) { try { localStorage.setItem('menu', on ? 'on' : 'off'); } catch (e) {} }
  }
  setMenu(!root.classList.contains('menu-off'), false);
  if (btn) btn.addEventListener('click', function () { setMenu(root.classList.contains('menu-off'), true); });

  /* page change: clear the top sheet before the next page deals its own sheet in */
  function norm(p) { return p.replace(/index\.html$/, ''); }
  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a[href]') : null;
    if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || a.target || reduce) return;
    var u = new URL(a.href, location.href);
    if (u.protocol !== location.protocol || u.host !== location.host) return;
    if (norm(u.pathname) === norm(location.pathname)) return;
    e.preventDefault();
    root.classList.add('leaving');
    setTimeout(function () { location.href = a.href; }, 300);
  });
  window.addEventListener('pageshow', function (e) { if (e.persisted) root.classList.remove('leaving'); });
})();
