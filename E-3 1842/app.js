const card = document.querySelector('.card');
const colors = document.querySelectorAll('.colors div');

let hexCodes = ['#00214A', '#04BBEC', '#CDEAE8', '#FF82F4', '#0D3F7C', '#EA25B5'];

colors.forEach((item, i) => {
    item.addEventListener('click', () => {
        const root = document.querySelector(':root');

        root.style.setProperty('--product-img', `url(img/${item.className}.png)`);
        root.style.setProperty('--bg-color', hexCodes[i]);
    })
})

card.addEventListener('click', () => {
    card.classList.add('active');
})

window.addEventListener('click', (e) => {
    if(e.target.className == ''){
        card.classList.remove('active');
    }
})