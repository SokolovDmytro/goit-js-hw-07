'use strict';

console.log('================task-01=====================')

// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

const categories = document.querySelector('#categories');
console.log(`В списке ${categories.children.length} категории.`);

categories.querySelectorAll('.item').forEach(item => {
    console.log(`Категория: ${item.querySelector('h2').textContent}`);
    console.log(`Количество элементов: ${item.querySelector('ul').children.length}`,);
});

console.log('================task-02=====================')

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM-узлов используй document.createElement().

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const ul = ingredients.map(item => {
    console.log(item);
    const li = document.createElement('li');
    li.textContent = item;
    console.log(li);
    return li; 
});
  
  document.querySelector('#ingredients').append(...ul);

  console.log('================task-03=====================')

  