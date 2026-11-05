const GART_DATA = {
  users: [
    { email: 'admin@demo', name: 'Евгений', nickname: 'Admin', role: 'admin' },
    { email: 'user@demo', name: 'Владимир', nickname: 'Vova', role: 'member' },
    { email: 'candidate@demo', name: 'Иван', nickname: 'Ivan', role: 'candidate' }
  ],
  applications: [
    { id: 1, name: 'Алексей Смирнов', nickname: 'Alex', email: 'alex@mail.ru', phone: '+7 999 123-45-67', region: 'Челябинск', source: 'Рекомендация', status: 'pending', date: '2026-11-01' },
    { id: 2, name: 'Дмитрий Петров', nickname: 'Dima', email: 'dim@mail.ru', phone: '+7 999 765-43-21', region: 'Екатеринбург', source: 'Блог Владимира', status: 'approved', date: '2026-10-28' }
  ],
  posts: [
    { id: 1, author: 'Vova', text: 'Всем привет! В субботу идем в баню. Кто со мной?', date: '2026-11-03', comments: [] },
    { id: 2, author: 'Alex', text: 'Спасибо за поддержку вчера, мужики. С машиной разобрался.', date: '2026-11-02', comments: [{ author: 'Admin', text: 'Всегда пожалуйста!' }] }
  ],
  events: [
    { id: 1, title: 'Поход в горы', date: '2026-11-15', place: 'Таганай', format: 'Офлайн', status: 'upcoming' },
    { id: 2, title: 'Чайная церемония', date: '2026-10-20', place: 'Челябинск, ул. Ленина 10', format: 'Офлайн', status: 'past' }
  ],
  gad7: [
    { q: 'Чувство нервозности, тревоги или взвинченности', options: ['Совсем нет', 'Несколько дней', 'Более половины дней', 'Почти каждый день'] },
    { q: 'Неспособность остановить или контролировать беспокойство', options: ['Совсем нет', 'Несколько дней', 'Более половины дней', 'Почти каждый день'] },
    { q: 'Слишком сильное беспокойство по разным поводам', options: ['Совсем нет', 'Несколько дней', 'Более половины дней', 'Почти каждый день'] },
    { q: 'Трудности с расслаблением', options: ['Совсем нет', 'Несколько дней', 'Более половины дней', 'Почти каждый день'] }
  ]
};

// Инициализация localStorage при первом заходе
if (!localStorage.getItem('gart_initialized')) {
  localStorage.setItem('gart_initialized', 'true');
  localStorage.setItem('gart_applications', JSON.stringify(GART_DATA.applications));
  localStorage.setItem('gart_posts', JSON.stringify(GART_DATA.posts));
}
