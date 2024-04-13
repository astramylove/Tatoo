const btn = document.querySelectorAll('.card-button');
const cards = document.querySelectorAll('.card');

btn.forEach((button, index) => {
    let isExpanded = false; // Добавляем переменную для отслеживания состояния

    button.addEventListener('click', () => {
        let text = button.previousElementSibling.textContent;

        if (!isExpanded) {
            cards[index].querySelector('.card-text').style.webkitLineClamp = 'unset'; // Сбросить ограничение на количество строк
            button.textContent = 'Свернуть'; // Изменяем текст кнопки
            isExpanded = true;
        } else {
            cards[index].querySelector('.card-text').style.webkitLineClamp = '8'; // Возвращаем ограничение на 2 строки
            button.textContent = 'Нажмите, чтобы увидеть полностью'; // Возвращаем исходный текст кнопки
            isExpanded = false;
        }
    });
});

const form = document.querySelector('.form1')
const openForm = document.querySelector('.bg-form')

    form.addEventListener('click', () => {
    openForm.style.display = 'block'
    })

const clos = document.querySelector('.close')

    clos.addEventListener('click', () => {
        openForm.style.display = 'none'
        })

// const button = document.querySelector('.form-button')
// console.log(button.getBoundingClientRect())