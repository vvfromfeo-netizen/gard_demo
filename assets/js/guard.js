document.addEventListener('DOMContentLoaded', () => {
  const requiredRole = document.body.getAttribute('data-require');
  
  if (requiredRole) {
    if (!GART_AUTH.getCurrentUser()) {
      // Если не авторизован — на страницу входа
      window.location.href = 'login.html';
    } else if (requiredRole === 'admin' && !GART_AUTH.hasRole('admin')) {
      // Если требует админа, а зашел участник — на главную
      alert('Доступ только для администраторов');
      window.location.href = 'index.html';
    } else if (requiredRole === 'member' && !GART_AUTH.hasRole(['member', 'admin'])) {
      // Если требует участника, а зашел кандидат
      alert('Ваша заявка еще на рассмотрении');
      window.location.href = 'index.html';
    }
  }
});
