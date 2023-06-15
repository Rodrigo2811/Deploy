const infoReaction = document.querySelector('.detalhes-reaction')
const porcentagemReaction = document.querySelector('.porcentagem-reaction')
const infoMemory = document.querySelector('.detalhes-memory')
const porcentagemMemory = document.querySelector('.porcentagem-memory')
const infoVerbal = document.querySelector('.detalhes-verbal')
const porcentagemVerbal = document.querySelector('.porcentagem-verbal')
const infoVisual = document.querySelector('.detalhes-visual')
const porcentagemVisual = document.querySelector('.porcentagem-visual')


const url = "/data.json"

function pegarDados(i) {

  fetch(url).then(response => response.json())
    .then(dados => {
      if (dados.erro) {
        console.log("Erro ao acessad dados")
        return
      }
      let qtdInfo = (dados.length)


      infoReaction.innerHTML = dados.atividades[0].category
      porcentagemReaction.innerHTML = dados.atividades[0].score
      infoMemory.innerHTML = dados.atividades[1].category
      porcentagemMemory.innerHTML = dados.atividades[1].score
      infoVerbal.innerHTML = dados.atividades[2].category
      porcentagemVerbal.innerHTML = dados.atividades[2].score
      infoVisual.innerHTML = dados.atividades[3].category
      porcentagemVisual.innerHTML = dados.atividades[3].score
    })

}

pegarDados()



