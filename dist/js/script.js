const $menuBtn = document.querySelector('.menu-btn')
const $menuBurger = document.querySelector('.menu-btn__burger')
const $nav = document.querySelector('.nav')
const $menuNav = document.querySelector('.menu-nav')
const $menuItems = document.querySelectorAll('.menu-nav__item')

$menuBtn.addEventListener('click', () => {
  $menuBurger.classList.toggle('open')
  $nav.classList.toggle('open')
  $menuNav.classList.toggle('open')
  $menuItems.forEach(item => item.classList.toggle('open'))
})