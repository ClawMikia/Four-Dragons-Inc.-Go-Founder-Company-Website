(() => {
  const html = document.documentElement;
  const nav = document.getElementById('siteNav');
  const scrim = document.getElementById('scrim');
  const drawerToggle = document.getElementById('drawerToggle');
  const navClose = document.getElementById('navClose');
  const themeToggleMobile = document.getElementById('themeToggleMobile');

  const STORE_KEY_THEME = 'fourDragons.theme';
  const STORE_KEY_NAV = 'fourDragons.navPosition';

  /* ---------- restore saved preferences ---------- */
  const savedTheme = safeGet(STORE_KEY_THEME);
  const savedNav = safeGet(STORE_KEY_NAV);
  const systemPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

  setTheme(savedTheme || (systemPrefersLight ? 'light' : 'dark'), false);
  setNavPosition(savedNav || 'top', false);

  function safeGet(key){
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }
  function safeSet(key, value){
    try { localStorage.setItem(key, value); } catch (e) { /* storage unavailable, ignore */ }
  }

  /* ---------- theme ---------- */
  function setTheme(theme, persist = true){
    html.setAttribute('data-theme', theme);
    document.querySelectorAll('[data-theme-choice]').forEach(btn => {
      const active = btn.dataset.themeChoice === theme;
      btn.setAttribute('aria-checked', active ? 'true' : 'false');
    });
    if (persist) safeSet(STORE_KEY_THEME, theme);
  }

  document.querySelectorAll('[data-theme-choice]').forEach(btn => {
    btn.addEventListener('click', () => setTheme(btn.dataset.themeChoice));
  });

  themeToggleMobile.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(next);
  });

  /* ---------- navbar position ---------- */
  function setNavPosition(position, persist = true){
    html.setAttribute('data-nav', position);
    document.querySelectorAll('[data-nav-choice]').forEach(btn => {
      const active = btn.dataset.navChoice === position;
      btn.setAttribute('aria-checked', active ? 'true' : 'false');
    });
    if (persist) safeSet(STORE_KEY_NAV, position);
  }

  document.querySelectorAll('[data-nav-choice]').forEach(btn => {
    btn.addEventListener('click', () => setNavPosition(btn.dataset.navChoice));
  });

  /* ---------- mobile drawer ---------- */
  function openDrawer(){
    html.classList.add('nav-open');
    scrim.classList.add('show');
    drawerToggle.setAttribute('aria-expanded', 'true');
  }
  function closeDrawer(){
    html.classList.remove('nav-open');
    scrim.classList.remove('show');
    drawerToggle.setAttribute('aria-expanded', 'false');
  }
  drawerToggle.addEventListener('click', () => {
    html.classList.contains('nav-open') ? closeDrawer() : openDrawer();
  });
  navClose.addEventListener('click', closeDrawer);
  scrim.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDrawer();
  });
  nav.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', closeDrawer);
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 960) closeDrawer();
  });

  /* ---------- scroll-spy active link ---------- */
  const links = Array.from(document.querySelectorAll('.nav-links a'));
  const sections = links
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  const spy = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = '#' + entry.target.id;
      const link = links.find(a => a.getAttribute('href') === id);
      if (!link) return;
      if (entry.isIntersecting) {
        links.forEach(a => a.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

  sections.forEach(sec => spy.observe(sec));

  document.addEventListener('contextmenu', e => e.preventDefault());
})();
