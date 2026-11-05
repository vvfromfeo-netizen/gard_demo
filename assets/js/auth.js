const GART_AUTH = {
  login: function(email) {
    let user = GART_DATA.users.find(u => u.email === email);
    
    // Если не нашли среди тестовых, ищем среди одобренных заявок
    if (!user) {
      const approvedApps = JSON.parse(localStorage.getItem('gart_applications') || '[]').filter(a => a.status === 'approved');
      const app = approvedApps.find(a => a.email === email);
      if (app) {
        user = { email: app.email, name: app.name, nickname: app.nickname || 'User', role: 'member' };
      }
    }

    if (user) {
      localStorage.setItem('gart_current_user', JSON.stringify(user));
      return true;
    }
    return false;
  },
  logout: function() {
    localStorage.removeItem('gart_current_user');
  },
  getCurrentUser: function() {
    const user = localStorage.getItem('gart_current_user');
    return user ? JSON.parse(user) : null;
  },
  hasRole: function(roles) {
    const user = this.getCurrentUser();
    if (!user) return false;
    if (user.role === 'admin') return true;
    if (Array.isArray(roles)) return roles.includes(user.role);
    return user.role === roles;
  }
};
