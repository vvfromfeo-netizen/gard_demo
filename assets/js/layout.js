document.addEventListener('DOMContentLoaded', () => {
  const user = GART_AUTH.getCurrentUser();
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  
  const navLink = (href, text, style = '') => {
    const isActive = currentPath === href;
    return `<a href="${href}" class="${isActive ? 'nav-active' : ''}" style="${style}">${text}</a>`;
  };

  const headerHTML = `
    <header>
      <div class="container header-inner">
        <a href="index.html" class="logo">ГАРТ<span>.</span></a>
        <nav style="display: flex; flex-wrap: wrap; gap: 15px; align-items: center; justify-content: flex-end;">
          ${navLink('index.html', 'Главная')}
          ${navLink('about.html', 'О проекте')}
          ${navLink('news.html', 'Новости')}
          
          <!-- Закрытый контур: Афиша и Участники только для авторизованных -->
          ${user ? navLink('events.html', 'Афиша') : ''}
          ${user ? navLink('members.html', 'Участники') : ''}
          
          ${navLink('merch.html', 'Мерч')}
          
          <!-- Выпадающее меню для статичных страниц (чтобы не загромождать) -->
          <div style="position: relative; display: inline-block;">
            <a href="#" style="cursor: pointer;">Ещё ▾</a>
            <div style="position: absolute; right: 0; top: 100%; background: #111; border: 1px solid #333; padding: 10px; display: none; flex-direction: column; gap: 10px; z-index: 1000;" 
                 onmouseover="this.style.display='flex'" onmouseout="this.style.display='none'">
              ${navLink('partners.html', 'Партнеры')}
              ${navLink('media.html', 'СМИ о нас')}
              ${navLink('reviews.html', 'Отзывы')}
              ${navLink('contacts.html', 'Контакты')}
              ${navLink('legal.html', 'Правовая информация')}
            </div>
          </div>

          ${user ? navLink('rating.html', 'Рейтинг') : ''}
          ${user ? navLink('profile.html', 'Личный кабинет') : ''}
          
          ${user && user.role === 'admin' ? navLink('admin-applications.html', 'Заявки', 'color: #4CAF50;') : ''}
          ${user && user.role === 'admin' ? navLink('admin-moderation.html', 'Модерация', 'color: #4CAF50;') : ''}
          
          ${user 
            ? `<a href="#" onclick="GART_AUTH.logout(); window.location.reload();" style="color: var(--text-muted); margin-left: 10px;">Выйти</a>` 
            : navLink('login.html', 'Войти')}
        </nav>
      </div>
    </header>
  `;
  
  // ... (остальной код layout.js без изменений - footerHTML и devPanelHTML)
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
