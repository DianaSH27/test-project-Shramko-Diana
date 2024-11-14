document.querySelectorAll('.accordion-title').forEach(button => {
    button.addEventListener('click', () => {
        const accordionItem = button.parentElement;
        const content = accordionItem.querySelector('.accordion-content');

        // Тоггл класса активного элемента
        accordionItem.classList.toggle('active');

        // Поиск иконок open и close
        const openIcon = button.querySelector('.open-icon');
        const closeIcon = button.querySelector('.close-icon');


        // Переключение видимости иконок
        if (accordionItem.classList.contains('active')) {
            openIcon.style.display = 'none';
            closeIcon.style.display = 'inline';
        } else {
            openIcon.style.display = 'inline';
            closeIcon.style.display = 'none';
        }
    });
});