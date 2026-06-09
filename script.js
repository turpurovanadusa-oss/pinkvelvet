const items = document.querySelectorAll('.master-item');

const mainPhoto = document.getElementById('mainPhoto');
const mainName = document.getElementById('mainName');
const mainPosition = document.getElementById('mainPosition');

items.forEach(item => {

    item.addEventListener('click', () => {

        items.forEach(el => {
            el.classList.remove('active');
        });

        item.classList.add('active');

        mainPhoto.src = item.dataset.photo;
        mainName.textContent = item.dataset.name;
        mainPosition.textContent = item.dataset.position;

    });

});
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
});