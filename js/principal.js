const music = document.getElementById('musicBackground');
const yes_button = document.getElementById('yes_button');

music.volume = 0.3;

music.play().catch(() => {
    window.addEventListener('click', () => {
        music.play();
    }, { once: true });
});

yes_button.addEventListener('click', (event) => {
    event.preventDefault();

    document.body.innerHTML = `
        <div class="image_section">
            <img class="image2" src="./sources/catsShiiii.gif" alt="">
        </div>

        <div class="title_section">
            <h2 class="title">eshooo cielo, eres la mejor 💕</h2>
            <h3 class="subtitle"></h3>
        </div>

        <div class="button_section">
        </div>
    `;

    document.body.appendChild(music);
});
