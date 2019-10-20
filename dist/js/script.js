const $menuBtn = document.querySelector('.menu-btn')
const $menuBurger = document.querySelector('.menu-btn__burger')
const $nav = document.querySelector('.nav')
const $menuNav = document.querySelector('.menu-nav')
const $menuItems = document.querySelectorAll('.menu-nav__item')

const close = () => {
  $menuBurger.classList.toggle('open')
  $nav.classList.toggle('open')
  $menuNav.classList.toggle('open')
  $menuItems.forEach(item => item.classList.toggle('open'))
}

$menuBtn.addEventListener('click', close) 
$menuItems.forEach(item => item.addEventListener('click', close))


// scroll event
function scrollMenu() {
  // DOM Elements
  const $home = document.querySelector('.home');
  const $projects = document.getElementById('projects')
  const $about = document.getElementById('about');
  const $contact = document.getElementById('contact');
  const $social = document.getElementById('social')
  const $name = document.getElementById('name')
  
  // Menu Items
  const $menuHome = document.querySelector('.homeItem');
  const $menuProject = document.querySelector('.projectItem');
  const $menuAbout = document.querySelector('.aboutItem');
  const $menuContact = document.querySelector('.contactItem');

  // Positions
  const hPos = $home.getBoundingClientRect().top 
  const prPos = $projects.getBoundingClientRect().top
  const aPos = $about.getBoundingClientRect().top
  const cPos = $contact.getBoundingClientRect().top


  const screemHeight = window.innerHeight/5 

    if (hPos < screemHeight || screemHeight == ' ') {
      $menuHome.classList.add('selected')
      $menuProject.classList.remove('selected')
    }
    if (prPos < screemHeight) {
      $menuHome.classList.remove('selected')
      $menuProject.classList.add('selected')
      $menuAbout.classList.remove('selected')
    }
    if (aPos < screemHeight) {
      $menuAbout.classList.add('selected')
      $menuProject.classList.remove('selected')
      $menuContact.classList.remove('selected')
    }
    if (cPos < screemHeight) {
      $menuAbout.classList.remove('selected')
      $menuContact.classList.add('selected')
      $social.style.display = "none"
      $name.style.display = "none"
    }
    else {
      $social.style.display = "flex"
      $name.style.display = "flex"
    }
}


window.addEventListener('scroll', scrollMenu)
