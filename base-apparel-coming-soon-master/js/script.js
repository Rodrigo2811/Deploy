const frm = document.querySelector('form')
const inp = document.getElementById('impEmail')
const msgErro = document.querySelector('.msg-error')
const imgError = document.querySelector('.img-Error')
const regexEmail = /\S+@\S+\.\S+/;

function setError() {
  inp.style.border = '1px solid red'
  msgErro.style.visibility = 'visible'
  imgError.style.visibility = 'visible'
}

function removeError() {
  inp.style.border = ''
  msgErro.style.visibility = 'hidden'
  imgError.style.visibility = 'hidden'

}

frm.addEventListener('submit', (e) => {
  e.preventDefault()
  validaEmail()
})


function validaEmail() {
  if (!regexEmail.test(inp.value)) {
    setError()
  }
  else {
    removeError()
  }
}