//Dados do carrocel a serem carregados
const carrocelData = [
    {
        image: '/images/desktop-image-hero-1.jpg',
        title: "Discover innovative ways to decorate",
        text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life.Create a room in your own style with our collection and make your property a reflection of you and what you love."
    },
    {
        image: '/images/desktop-image-hero-2.jpg',
        title: "We are available all across the globe",
        text: "With stores all over the world, it's easy for you to find furniture for your home or place of business.Locally, we’re in most major cities throughout the country.Find the branch nearest you using our store locator.Any questions? Don't hesitate to contact us today."
    },
    {
        image: '/images/desktop-image-hero-3.jpg',
        title: "Manufactured with the best materials",
        text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology  to ensure that every product is made as perfect and as consistent as possible.With three decades of experience in this industry, we understand what customers want for their home and office."
    }
];

//
let correntIndex = 0;

//Pegando todos os elementos
const carrocelIMG = document.querySelector('#carrocel-img');
const carrocelTitle = document.querySelector('#title')
const carrocelText = document.querySelector('#paragrafo')
const btnNext = document.querySelector(".btn-right");
const btnPrev = document.querySelector(".btn-left");

//função de mostrar imagem. 
function showCarrocelIttem(index) {
    carrocelIMG.src = carrocelData[index].image
    carrocelTitle.textContent = carrocelData[index].title;
    carrocelText.textContent = carrocelData[index].text;
}

//Chama a função para carrega a primeira imagem ao abrir
showCarrocelIttem(correntIndex);

//função de avançar para proxima imagem
btnNext.addEventListener('click', () => {
    correntIndex = (correntIndex === carrocelData.length - 1) ? 0 : correntIndex + 1
    showCarrocelIttem(correntIndex)

})


//função de voltar par aimagem anterior
btnPrev.addEventListener('click', () => {
    correntIndex = (correntIndex === 0) ? carrocelData.length - 1 : correntIndex - 1;
    showCarrocelIttem(correntIndex);


})

function abrirMenu() {
    document.querySelector('.grid-item1 nav').classList.add('visible')
    document.querySelector('.btm-open-menu').classList.remove('visible')

}

function closeMenu() {
    document.querySelector('.navBar-mobile').classList.remove('visible')

}