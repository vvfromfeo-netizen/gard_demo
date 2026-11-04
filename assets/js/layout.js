document.addEventListener('DOMContentLoaded', () => {
  const user = GART_AUTH.getCurrentUser();
  
  // 1. Рендер шапки
  const headerHTML = `
    <header>
      <div class="container header-inner">
        <a href="index.html" class="logo">ГАРТ<span>.</span></a>
        <nav>
          <a href="index.html">Главная</a>
          <a href="events.html">Мероприятия</a>
          ${user ? `<a href="feed.html">Лента</a>` : ''}
          ${user && user.role === 'admin' ? `<a href="admin-applications.html" style="color:var(--accent)">Админка</a>` : ''}
          ${user ? `<a href="#" onclick="GART_AUTH.logout(); window.location.reload();">Выйти (${user.name})</a>` : `<a href="login.html">Войти</a>`}
        </nav>
      </div>
    </header>
  `;
  
  // 2. Рендер подвала
  const footerHTML = `
    <footer>
      <div class="container">
        <p>© 2026 Мужской клуб "ГАРТ". Все права защищены.</p>
        <p style="margin-top:10px; font-size:12px;">Прототип сайта для презентации. <a href="legal.html">Правовая информация</a></p>
      </div>
    </footer>
  `;

  // 3. Dev-панель для презентации
  const devPanelHTML = `
    <div id="dev-panel">
      <span style="color:#fff; font-size:12px; align-self:center; margin-right:10px;">Режим демо:</span>
      <button onclick="GART_AUTH.logout(); window.location.href='index.html'">Гость</button>
      <button onclick="GART_AUTH.login('candidate@demo'); window.location.href='welcome.html'">Кандидат</button>
      <button onclick="GART_AUTH.login('user@demo'); window.location.href='feed.html'">Участник</button>
      <button onclick="GART_AUTH.login('admin@demo'); window.location.href='admin-applications.html'">Админ</button>
    </div>
  `;

  // Вставляем в body
  document.body.insertAdjacentHTML('afterbegin', headerHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);
  
  // Прячем панель, если в URL есть ?clean=1 (для чистых скриншотов)
  if (!window.location.search.includes('clean=1')) {
    document.body.insertAdjacentHTML('beforeend', devPanelHTML);
  }
});
