const music = document.getElementById('musicBackground');
const yes_button = document.getElementById('yes_button');
const no_button = document.getElementById('no_button');

music.volume = 0.1;

music.play().catch(() => {
    window.addEventListener('click', () => {
        music.play();
    }, { once: true });
});

yes_button.addEventListener('click', (event) => {
    event.preventDefault();

    // Ocultamos los elementos originales
    document.querySelector('.image_section').style.display = 'none';
    document.querySelector('.title_section').style.display = 'none';
    document.querySelector('.buttons_container').style.display = 'none';

    // Creamos el contenedor del carrusel
    const carouselContainer = document.createElement('div');
    carouselContainer.classList.add('carousel');
    document.querySelector('.container').appendChild(carouselContainer);

    // Agregamos título debajo del carrusel
    const newTitleSection = document.createElement('div');
    newTitleSection.classList.add('title_section');
    newTitleSection.innerHTML = `
        <h2 class="title">Te adoro como no tienes imaginación 💗</h2>
        <h3 class="subtitle"></h3>
    `;
    document.querySelector('.container').appendChild(newTitleSection);

    // Lista de imágenes
    const images = [
        "amorcito1.jpg",
        "amorcito2.jpg",
        "amorcito3.jpg",
        "amorcito4.jpg",
        "amorcito5.jpg",
        "amorcito6.jpg",
        "amorcito7.jpg"
    ];

    let index = 0;

    const imgElements = images.map((src, i) => {
        const img = document.createElement('img');
        img.src = `./sources/${src}`;
        img.style.left = i === 0 ? '0' : '100%';
        carouselContainer.appendChild(img);
        return img;
    });

    function nextImage() {
        const current = imgElements[index];
        index = (index + 1) % imgElements.length;
        const next = imgElements[index];

        current.style.transform = 'translateX(-100%)';
        next.style.transform = 'translateX(-100%)';
        next.style.left = '100%';

        setTimeout(() => {
            current.style.transition = 'none';
            current.style.transform = 'translateX(0)';
            current.style.left = '100%';
            current.offsetHeight; // fuerza reflow
            current.style.transition = 'transform 0.8s ease-in-out';
        }, 800);
    }

    setInterval(nextImage, 3000);
});

no_button.addEventListener('click', () => {
    const buttonRect = no_button.getBoundingClientRect();
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;

    const maxX = containerWidth - buttonRect.width - 20;
    const maxY = containerHeight - buttonRect.height - 20;

    const randomX = Math.min(Math.max(buttonRect.left + (Math.random() * 400 - 200), 20), maxX);
    const randomY = Math.min(Math.max(buttonRect.top + (Math.random() * 300 - 150), 20), maxY);

    no_button.style.position = 'absolute';
    no_button.style.left = `${randomX}px`;
    no_button.style.top = `${randomY}px`;

    const frases = [
        "¿Por qué quieres hacer eso? 😡",
        "Enserio no me quele? 😭",
        "Yo se que si me quieres 💕",
        "Amame 😔",
        "Este no es el boton cielito 👀",
        "Yo te enciendo la chispa ⚡"
    ];

    const indice = Math.floor(Math.random() * frases.length);
    no_button.innerHTML = frases[indice];
});
