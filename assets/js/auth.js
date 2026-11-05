const GART_AUTH = {
  login: function(email) {
    let user = GART_DATA.users.find(u => u.email === email);
    
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
    if (!user) return null;
    
    const parsed = JSON.parse(user);
    // ЗАЩИТА: Если пользователь залогинился ДО появления никнеймов
    if (!parsed.nickname) {
      parsed.nickname = parsed.name || 'User';
      localStorage.setItem('gart_current_user', JSON.stringify(parsed));
    }
    return parsed;
  },
  hasRole: function(roles) {
    const user = this.getCurrentUser();
    if (!user) return false;
    if (user.role === 'admin') return true;
    if (Array.isArray(roles)) return roles.includes(user.role);
    return user.role === roles;
  }
};
