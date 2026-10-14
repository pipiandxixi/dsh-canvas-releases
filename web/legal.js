(() => {
  let lang = 'en';
  try { lang = localStorage.getItem('lang') || ''; } catch {}
  if (lang !== 'en' && lang !== 'zh') lang = (navigator.language || 'en').toLowerCase().startsWith('zh') ? 'zh' : 'en';
  const apply = () => {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    for (const b of document.querySelectorAll('[data-lang]')) b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
  };
  for (const b of document.querySelectorAll('[data-lang]')) b.addEventListener('click', () => { lang = b.dataset.lang; try { localStorage.setItem('lang', lang); } catch {} apply(); });
  apply();
})();
