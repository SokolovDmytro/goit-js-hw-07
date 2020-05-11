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
    console.log(`Количество элементов: ${item.querySelector('ul').children.length}`, );
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

// Используй массив объектов images для создания тегов img вложенных в li.
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().
// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css - классы.

const images = [{
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

let gallery = '';
images.forEach(img => {
    const src = img.url;
    const alt = img.alt;
    console.log(alt);
    gallery += `<img src="${src}" alt="${alt}" class ="img"/>`;
    return gallery;
});

document.querySelector('#gallery').insertAdjacentHTML('afterbegin', gallery);

console.log('================task-04=====================')

// Счетчик состоит из спана и кнопок,
// которые должны увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = 0;

function increment() {
    counterValue += 1;
    document.querySelector('#value').textContent = counterValue;
}

function decrement() {
    counterValue -= 1;
    document.querySelector('#value').textContent = counterValue;
}

const incrementButton = document.querySelector('#counter button[data-action="increment"]', );
const decrementButton = document.querySelector('#counter button[data-action="decrement"]', );
// console.log(incrementBtn);
// console.log(decrementBtn);

incrementButton.addEventListener('click', increment);
decrementButton.addEventListener('click', decrement);

console.log('================task-05=====================')

// Напиши скрипт который,
// при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name-output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const onInput = () =>
    input.value !== "" ?
    (output.textContent = input.value) :
    (output.textContent = "незнакомец");

input.addEventListener("input", onInput);

console.log('================task-06=====================')

// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.

const validationInput = document.querySelector('#validation-input');

function validationInputFoсus() {
    if (validationInput.value.length === 6) {
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid');
    } else {
        validationInput.classList.add('invalid');
        validationInput.classList.remove('valid');
    }
}

validationInput.addEventListener('focusout', validationInputFoсus);

console.log('================task-07=====================')

// Напиши скрипт,
// который реагирует на изменение значения input#font-size-control (событие input)
// и изменяет инлайн-стиль span#text обновляя свойство font-size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const fontSizeCtl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

function fontSizeChange() {
    text.setAttribute('style', `font-size: ${fontSizeCtl.value}px`);
}

fontSizeCtl.addEventListener('input', fontSizeChange);