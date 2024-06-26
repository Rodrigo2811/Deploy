const data = new Date()

const form = document.querySelector('form');
const resultAnos = document.querySelector('#anos');
const resultMes = document.querySelector('#mes');
const resultDias = document.querySelector('#dias');
const msgErro = document.querySelectorAll('.msg-error')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    const impDiaNascimento = Number(form.impDias.value);
    const impMesNascimento = Number(form.impMes.value);
    const impAnoNascimento = Number(form.impAnos.value);

    if (impDiaNascimento == "" && impMesNascimento == "" && impAnoNascimento == "") {

        msgErro[0].classList.remove('msg-error')
        msgErro[0].classList.add('error')
        msgErro[1].classList.remove('msg-error')
        msgErro[1].classList.add('error')
        msgErro[2].classList.remove('msg-error')
        msgErro[2].classList.add('error')

    } else if (isNaN(impDiaNascimento && impMesNascimento && impAnoNascimento)) {
        alert('tem que ser numeros')
    } else {
        msgErro[0].classList.add('msg-error')
        msgErro[0].classList.remove('error')
        msgErro[1].classList.add('msg-error')
        msgErro[1].classList.remove('error')
        msgErro[2].classList.add('msg-error')
        msgErro[2].classList.remove('error')

        const dia = data.getDate();
        const mes = data.getMonth() + 1;
        const ano = data.getFullYear()

        let anos = ano - impAnoNascimento;
        let meses = impMesNascimento - mes;
        let dias = impDiaNascimento - dia;


        resultAnos.innerHTML = `${anos}`;
        resultMes.innerHTML = `${meses}`;
        resultDias.innerHTML = `${dias}`




        form.impDias.value = ""

        form.impMes.value = ""

        form.impAnos.value = ""

    }




})

