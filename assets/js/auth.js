const GART_AUTH = {
  login: function(email) {
    const user = GART_DATA.users.find(u => u.email === email);
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
    if (user.role === 'admin') return true; // Админ имеет доступ ко всему
    if (Array.isArray(roles)) return roles.includes(user.role);
    return user.role === roles;
  }
};
