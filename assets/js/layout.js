document.addEventListener('DOMContentLoaded', () => {
  const user = GART_AUTH.getCurrentUser();
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  
  const navLink = (href, text, style = '') => {
    const isActive = currentPath === href || (href.includes('#') && currentPath === href.split('#')[0]);
    return `<a href="${href}" class="${isActive ? 'nav-active' : ''}" style="${style}">${text}</a>`;
  };

  let dropdownContent = `
    <a href="index.html#about">О проекте</a>
    <a href="stub.html">Правовая информация</a>
  `;
  
  if (user) {
    dropdownContent = `
      <a href="index.html#about">О проекте</a>
      <a href="stub.html">Партнеры</a>
      <a href="stub.html">СМИ о нас</a>
      <a href="stub.html">Отзывы</a>
      <a href="contacts.html">Контакты</a>
      <a href="test.html">Тестирование</a>
      <a href="stub.html">Правовая информация</a>
      <a href="#" onclick="GART_AUTH.logout(); window.location.reload();" style="color: #F44336; margin-top: 10px; border-top: 1px solid #333; padding-top: 15px;">Выйти</a>
    `;
  }

  const safeNickname = user ? (user.nickname || user.firstName || 'U') : '';

  const headerHTML = `
    <header>
      <div class="container header-inner">
        <a href="index.html" class="logo">ГАРТ<span>.</span></a>
        
        <nav style="display: flex; flex-wrap: wrap; gap: 15px; align-items: center; justify-content: flex-end;">
          
          ${!user ? `
            ${navLink('index.html', 'Главная')}
            ${navLink('news.html', 'Новости')}
            ${navLink('rating.html', 'Рейтинг')}
          ` : ''}

          ${user ? `
            ${navLink('events.html', 'Афиша')}
            ${navLink('news.html', 'Новости')}
            ${navLink('merch.html', 'Магазин')}
            ${navLink('rating.html', 'Рейтинг')}
          ` : ''}

          ${user && user.role === 'admin' ? `
            ${navLink('admin-applications.html', 'Заявки', 'color: #4CAF50;')}
            ${navLink('admin-users.html', 'Участники', 'color: #4CAF50;')}
          ` : ''}

          <div class="dropdown" id="dropdown-menu">
            <a href="#" id="dropdown-btn" style="cursor: pointer;">Ещё ▾</a>
            <div class="dropdown-content">${dropdownContent}</div>
          </div>
          
          ${user 
            ? `<a href="messages.html" class="icon-badge" title="Сообщения">✉<span class="badge" id="msg-badge">1</span></a>` 
            : ''}

          ${user 
            ? `<a href="profile.html" class="user-avatar" title="Личный кабинет">${safeNickname.charAt(0).toUpperCase()}</a>` 
            : navLink('login.html', 'Войти')}
        </nav>
      </div>
    </header>
  `;
  
  const footerHTML = `
    <footer>
      <div class="container">
        <p>© 2026 Мужской клуб "ГАРТ". Все права защищены.</p>
      </div>
    </footer>
  `;

  const modalHTML = `
    <div class="modal-overlay" id="auth-modal">
      <div class="modal-content">
        <button class="modal-close" onclick="closeAuthModal()">&times;</button>
        <div class="modal-icon">🔒</div>
        <h3 class="modal-title">Требуется вход</h3>
        <p class="modal-text">Чтобы совершить это действие, вам нужно войти в свой аккаунт или зарегистрироваться в клубе.</p>
        <div class="modal-buttons">
          <a href="login.html" class="btn" style="width: 100%;">Войти в аккаунт</a>
          <a href="apply.html" class="btn btn-outline" style="width: 100%;">Подать заявку на вступление</a>
        </div>
      </div>
    </div>
  `;

  const devPanelHTML = `
    <div id="dev-panel">
      <span style="color:#fff; font-size:12px; align-self:center; margin-right:10px;">Режим демо:</span>
      <button onclick="GART_AUTH.logout(); window.location.href='index.html'">Гость</button>
      <button onclick="GART_AUTH.login('user@demo'); window.location.href='messages.html'">Участник</button>
      <button onclick="GART_AUTH.login('admin@demo'); window.location.href='admin-applications.html'">Админ</button>
    </div>
  `;

  document.body.insertAdjacentHTML('afterbegin', headerHTML);
  document.body.insertAdjacentHTML('beforeend', modalHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);
  
  if (!window.location.search.includes('clean=1')) {
    document.body.insertAdjacentHTML('beforeend', devPanelHTML);
  }

  const dropdownBtn = document.getElementById('dropdown-btn');
  const dropdownMenu = document.getElementById('dropdown-menu');
  if (dropdownBtn && dropdownMenu) {
    dropdownBtn.addEventListener('click', (e) => { e.preventDefault(); dropdownMenu.classList.toggle('show'); });
    window.addEventListener('click', (e) => { if (!dropdownMenu.contains(e.target)) dropdownMenu.classList.remove('show'); });
  }
});

window.showAuthRequiredModal = function() {
  const modal = document.getElementById('auth-modal');
  if (modal) modal.style.display = 'flex';
};

window.closeAuthModal = function() {
  const modal = document.getElementById('auth-modal');
  if (modal) modal.style.display = 'none';
};
