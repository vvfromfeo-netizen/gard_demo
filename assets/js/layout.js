document.addEventListener('DOMContentLoaded', () => {
  const user = GART_AUTH.getCurrentUser();
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  
  const navLink = (href, text, style = '') => {
    const isActive = currentPath === href || (href.includes('#') && currentPath === href.split('#')[0]);
    return `<a href="${href}" class="${isActive ? 'nav-active' : ''}" style="${style}">${text}</a>`;
  };

  const headerHTML = `
    <header>
      <div class="container header-inner">
        <a href="index.html" class="logo">ГАРТ<span>.</span></a>
        <nav style="display: flex; flex-wrap: wrap; gap: 15px; align-items: center; justify-content: flex-end;">
          ${navLink('index.html', 'Главная')}
          
          ${user ? navLink('events.html', 'Афиша') : ''}
          ${user ? navLink('feed.html', 'Лента') : ''}
          
          ${navLink('merch.html', 'Магазин')}
          
          ${user ? navLink('rating.html', 'Рейтинг') : ''}
          ${user ? navLink('profile.html', 'Личный кабинет') : ''}
          
          ${user && user.role === 'admin' ? navLink('admin-applications.html', 'Заявки', 'color: #4CAF50;') : ''}
          ${user && user.role === 'admin' ? navLink('admin-moderation.html', 'Модерация', 'color: #4CAF50;') : ''}

          <!-- Выпадающее меню "Ещё" -->
          <div class="dropdown" id="dropdown-menu">
            <a href="#" id="dropdown-btn" style="cursor: pointer;">Ещё ▾</a>
            <div class="dropdown-content">
              <a href="index.html#about">О проекте</a>
              <a href="stub.html">Новости</a>
              <a href="stub.html">Партнеры</a>
              <a href="stub.html">СМИ о нас</a>
              <a href="stub.html">Отзывы</a>
              <a href="stub.html">Контакты</a>
              <a href="stub.html">Правовая информация</a>
            </div>
          </div>
          
          ${user 
            ? `<a href="#" onclick="GART_AUTH.logout(); window.location.reload();" style="color: var(--text-muted); margin-left: 10px;">Выйти</a>` 
            : navLink('login.html', 'Войти')}
        </nav>
      </div>
    </header>
  `;
  
  const footerHTML = `
    <footer>
      <div class="container">
        <p>© 2026 Мужской клуб "ГАРТ". Все права защищены.</p>
        <p style="margin-top:10px; font-size:12px;">Прототип сайта. <a href="stub.html">Правовая информация</a></p>
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

  // ЛОГИКА РАБОТЫ ВЫПАДАЮЩЕГО МЕНЮ (по клику)
  const dropdownBtn = document.getElementById('dropdown-btn');
  const dropdownMenu = document.getElementById('dropdown-menu');

  if (dropdownBtn && dropdownMenu) {
    dropdownBtn.addEventListener('click', (e) => {
      e.preventDefault();
      dropdownMenu.classList.toggle('show');
    });

    window.addEventListener('click', (e) => {
      if (!dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.remove('show');
      }
    });
  }
});
