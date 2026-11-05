// Сброс старых тестовых данных для применения новых ников
if (localStorage.getItem('gart_version') !== '2.0') {
    localStorage.clear();
    localStorage.setItem('gart_version', '2.0');
}

const GART_DATA = {
  users: [
    { email: 'admin@demo', name: 'Евгений', nickname: 'Рагнар', role: 'admin' },
    { email: 'user@demo', name: 'Владимир', nickname: 'Свенельд', role: 'member' },
    { email: 'candidate@demo', name: 'Иван', nickname: 'Ярополк', role: 'candidate' }
  ],
  applications: [
    { id: 1, name: 'Алексей Смирнов', nickname: 'Велес', email: 'alex@mail.ru', phone: '+7 999 123-45-67', region: 'Челябинск', source: 'Рекомендация', status: 'pending', date: '2026-11-01' },
    { id: 2, name: 'Дмитрий Петров', nickname: 'Громобой', email: 'dim@mail.ru', phone: '+7 999 765-43-21', region: 'Екатеринбург', source: 'Блог Владимира', status: 'approved', date: '2026-10-28' }
  ],
  posts: [
    { id: 1, author: 'Свенельд', text: 'Всем привет! В субботу идем в баню. Кто со мной?', date: '2026-11-03', comments: [] },
    { id: 2, author: 'Велес', text: 'Спасибо за поддержку вчера, мужики. С машиной разобрался.', date: '2026-11-02', comments: [{ author: 'Рагнар', text: 'Всегда пожалуйста!' }] }
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

// Инициализация localStorage
localStorage.setItem('gart_applications', JSON.stringify(GART_DATA.applications));
localStorage.setItem('gart_posts', JSON.stringify(GART_DATA.posts));

// Инициализация рейтинга с новыми никами
localStorage.setItem('gart_rating_new', JSON.stringify([
  { id: 1, name: 'Велес', exercise: 'Отжимания', value: 50, date: '2026-11-04' },
  { id: 2, name: 'Свенельд', exercise: 'Бег (км)', value: 10, date: '2026-11-03' },
  { id: 3, name: 'Ярополк', exercise: 'Отжимания', value: 70, date: '2026-11-01' }
]));
