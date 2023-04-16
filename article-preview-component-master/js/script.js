const botaoShare = document.querySelector('.btn-share')
const menuShare = document.querySelector('.share')

botaoShare.addEventListener('click', () => {
  menuShare.style.visibility = 'visible'
  menuShare.style.display = 'fixed'
})

botaoShare.addEventListener('dblclick', () => {
  menuShare.style.visibility = 'hidden'
})