const hamburger = document.querySelector('.hamburger');
const nav_list = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
    nav_list.classList.toggle('aktif');
});

const nav_menu_items = document.querySelectorAll('.nav-list li');
nav_menu_items.forEach(item => {
    item.addEventListener('click', () => {
        nav_list.classList.remove('aktif');
    });
});

nav_menu_items.forEach(link => {
    link.addEventListener('click', () => {
        const href = link.querySelector('a').getAttribute('href');
        window.location.href = href;
    })
})