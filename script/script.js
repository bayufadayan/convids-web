const hamburger = document.querySelector('.hamburger');
const nav_list = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
    nav_list.classList.toggle('aktif');
});

// -------

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

// ---------
document.querySelectorAll('.for-popup').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-img').style.display = 'block';
        document.querySelector('.popup-img img').src = image.getAttribute('src');
    }
})

document.querySelector('.popup-img span').onclick = () =>{
    document.querySelector('.popup-img').style.display = 'none';
}

// ----------
document.getElementById('trailer-play').addEventListener('click', function() {
    window.open('https://youtu.be/DKjyrQxibo8?si=raJaVd59pWeL07Jw', '_blank');
});

document.getElementById('film-play').addEventListener('click', function() {
    window.open('https://youtu.be/AApRjBZRzbI?si=OSFc_F88xR2kN9h4', '_blank');
});

const coming_soon = document.querySelectorAll('.coming-soon');
coming_soon.forEach(button => {
    button.addEventListener('click', function() {
        window.location.href = 'coming-soon.html';
    });
});
