document.addEventListener('DOMContentLoaded', () => {
  const user = GART_AUTH.getCurrentUser();
  
  const headerHTML = `
    <header>
      <div class="container header-inner">
        <a href="index.html" class="logo">ГАРТ<span>.</span></a>
        <nav style="display: flex; flex-wrap: wrap; gap: 10px;">
          <a href="index.html">Главная</a>
          <a href="events.html">Афиша</a>
          ${user ? `<a href="feed.html">Лента</a>` : ''}
          ${user ? `<a href="rating.html">Рейтинг</a>` : ''}
          ${user ? `<a href="profile.html">Кабинет</a>` : ''}
          <a href="donate.html" style="color: var(--accent);">Помочь</a>
          ${user && user.role === 'admin' ? `<a href="admin-applications.html" style="color: #4CAF50;">Заявки</a>` : ''}
          ${user && user.role === 'admin' ? `<a href="admin-moderation.html" style="color: #4CAF50;">Модерация</a>` : ''}
          ${user 
            ? `<a href="#" onclick="GART_AUTH.logout(); window.location.reload();" style="color: var(--text-muted);">Выйти</a>` 
            : `<a href="login.html">Войти</a>`}
        </nav>
      </div>
    </header>
  `;
  
  const footerHTML = `
    <footer>
      <div class="container">
        <p>© 2026 Мужской клуб "ГАРТ". Все права защищены.</p>
        <p style="margin-top:10px; font-size:12px;">Прототип сайта. <a href="legal.html">Правовая информация</a></p>
      </div>
    </footer>
  `;

  const devPanelHTML = `
    <div id="dev-panel">
      <span style="color:#fff; font-size:12px; align-self:center; margin-right:10px;">Режим демо:</span>
      <button onclick="GART_AUTH.logout(); window.location.href='index.html'">Гость</button>
      <button onclick="GART_AUTH.login('user@demo'); window.location.href='feed.html'">Участник</button>
      <button onclick="GART_AUTH.login('admin@demo'); window.location.href='admin-applications.html'">Админ</button>
    </div>
  `;

  document.body.insertAdjacentHTML('afterbegin', headerHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);
  
  if (!window.location.search.includes('clean=1')) {
    document.body.insertAdjacentHTML('beforeend', devPanelHTML);
  }
});
