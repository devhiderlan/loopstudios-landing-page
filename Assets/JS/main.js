const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.main__menu nav ul')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active')
  navMenu.classList.toggle('active')
})

document.querySelectorAll('.main__menu nav ul li a').forEach(n => n.addEventListener('click', () => {
  hamburger.classList.remove('active')
  navMenu.classList.remove('active')
} ))