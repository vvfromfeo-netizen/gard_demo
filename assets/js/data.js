// Сброс старых данных для применения новой структуры (версия 4.0)
if (localStorage.getItem('gart_version') !== '4.0') {
    localStorage.clear();
    localStorage.setItem('gart_version', '4.0');
}

const GART_DATA = {
  users: [
    { id: 1, email: 'admin@demo', firstName: 'Евгений', lastName: 'Смирнов', age: 38, nickname: 'Рагнар', role: 'admin' },
    { id: 2, email: 'user@demo', firstName: 'Владимир', lastName: 'Петров', age: 42, nickname: 'Свенельд', role: 'member' },
    { id: 3, email: 'candidate@demo', firstName: 'Иван', lastName: 'Сидоров', age: 29, nickname: 'Ярополк', role: 'candidate' }
  ],
  applications: [
    { id: 1, firstName: 'Алексей', lastName: 'Смирнов', age: 34, nickname: 'Велес', email: 'alex@mail.ru', phone: '+7 999 123-45-67', source: 'Рекомендация', status: 'pending', date: '2026-11-01' }
  ],
  posts: [
    { id: 1, author: 'Свенельд', text: 'Всем привет! В субботу идем в баню. Кто со мной?', date: '2026-11-03', comments: [] }
  ],
  news: [
    { id: 1, title: 'Итоги осеннего похода', text: 'В минувшие выходные участники клуба совершили восхождение на Таганай. Делимся впечатлениями.', date: '2026-11-04', comments: [] }
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
  ],
  // Стартовые темы и "тарантиновский" диалог
  chatTopics: ['Знакомство', 'Челлендж', 'Вопросы и помощь', 'Разное'],
  initialMessages: {
    'topic_Знакомство': [{ author: 'Свенельд', text: 'Всем привет! Давайте знакомиться.', date: '10:00' }],
    'topic_Челлендж': [{ author: 'Рагнар', text: 'Кто сегодня отжался 50 раз? Отписываемся!', date: '11:30' }],
    'topic_Вопросы и помощь': [],
    'topic_Разное': [
      { author: 'Рагнар', text: 'Слышал, у нас в клубе новые порядки пошли?', date: '14:20' },
      { author: 'Велес', text: 'Не то слово. Вчера чуть до драки не дошло из-за места в бане.', date: '14:22' },
      { author: 'Свенельд', text: 'Мужики, хорош. Мы же за поддержкой сюда пришли, а не за этим.', date: '14:25' },
      { author: 'Ярополк', text: 'Да это он первый начал, я вообще мимо шел!', date: '14:30' }
    ]
  },
  // Стартовые товары
  shopItems: [
    { id: 1, title: 'Футболка ГАРТ', price: 2500, desc: 'Черная, хлопок 100%.' },
    { id: 2, title: 'Худи ГАРТ', price: 4000, desc: 'Плотное, с капюшоном.' },
    { id: 3, title: 'Термокружка', price: 1500, desc: 'Сталь, 500 мл.' }
  ]
};

localStorage.setItem('gart_applications', JSON.stringify(GART_DATA.applications));
localStorage.setItem('gart_posts', JSON.stringify(GART_DATA.posts));
localStorage.setItem('gart_news', JSON.stringify(GART_DATA.news));
localStorage.setItem('gart_chat_topics', JSON.stringify(GART_DATA.chatTopics));
localStorage.setItem('gart_messages', JSON.stringify(GART_DATA.initialMessages));
localStorage.setItem('gart_shop', JSON.stringify(GART_DATA.shopItems));
