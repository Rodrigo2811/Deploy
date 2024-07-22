const description = document.querySelector('#description');
const imagePerson = document.querySelector('.img-person');
const nameRodape = document.querySelector('#nameRodape');
const functionRodape = document.querySelector('#functionRodape');

const btnPrev = document.querySelector('#btnPrev');
const btnNext = document.querySelector('#btnNext');


const dados = [{
    nome: "Tanya Sinclair",
    foto: "/images/image-tanya.jpg",
    descricao: ' “I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough.I’m now in the job of my dreams and so excited about the future.” ',
    funcao: "UX Engineer"
},
{
    nome: "John Tarkpor",
    foto: "/images/image-john.jpg",
    descricao: ' “ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about   starting up as a professional developer. ”',
    funcao: "  Junior Front-end Developer"
}
]

let elementoAtual = 0;


function mostrarDados() {
    const objAtual = dados[elementoAtual];
    description.innerHTML = objAtual.descricao
    imagePerson.src = objAtual.foto
    nameRodape.innerHTML = objAtual.nome
    functionRodape.innerHTML = objAtual.funcao

}
mostrarDados()


btnPrev.addEventListener('click', () => {
    if (elementoAtual > 0) {
        elementoAtual--
        mostrarDados()
    } else {
        return false
    }
})

btnNext.addEventListener('click', () => {
    if (elementoAtual < dados.length - 1) {
        elementoAtual++
        mostrarDados()
    } else {
        return false
    }
})