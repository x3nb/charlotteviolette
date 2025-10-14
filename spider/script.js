
const loadingPage = document.querySelector('.loading-page');
const dynamicContent = document.querySelector('.dynamic-content');
const orderBtn = document.querySelector('.order-btn');

loadingPage.style.display = 'block';

setTimeout(() => {
    loadingPage.style.display = 'none';
    dynamicContent.style.display = 'block';
}, 2000);

orderBtn.addEventListener('click', () => {
    alert('Merci pour votre commande!');
});
