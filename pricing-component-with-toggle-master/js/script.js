const btnPlano = document.querySelector('#btnToggle');
const containerImput = document.querySelector('.containerImp');


const monthlyPrices = {
    precoBasic: '&dollar;19.99',
    precoProfessional: '&dollar;24.99',
    precoMaster: '&dollar;39.99'
};



const annualPrices = {
    precoBasic: '&dollar;199.99',
    precoProfessional: '&dollar;249.99',
    precoMaster: '&dollar;399.99'
};



let isOn = false;

btnPlano.addEventListener('click', function () {
    isOn = !isOn;

    console.log(isOn)

    // Toggle class names based on state
    btnPlano.classList.toggle('anual', isOn);
    containerImput.classList.toggle('fundo', isOn);

    // Update prices efficiently using object properties
    const prices = isOn ? annualPrices : monthlyPrices;

    console.log(prices)

    document.getElementById('precoBasic').innerHTML = prices.precoBasic;
    document.getElementById('precoProfessional').innerHTML = prices.precoProfessional;
    document.getElementById('precoMaster').innerHTML = prices.precoMaster;
});