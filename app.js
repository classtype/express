/*────────────────────────────────────────────────────────────────────────────────────────────────*/

require('app.init')(
/*┌────────────────┐
  │ Базовые модули │
  └────────────────┘*/[
    'File'// Модуль для работы файлом
],

/*┌─────────────────────────┐
  │ Пользовательские модули │
  └─────────────────────────┘*/[
    './inc/Server.js'// Сервер
]
);
/*────────────────────────────────────────────────────────────────────────────────────────────────*/