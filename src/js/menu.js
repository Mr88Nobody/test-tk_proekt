const burgerMenu = document.querySelector('.main-nav__toggle')

burgerMenu.addEventListener('click', () => {
  const mainNavMenu = document.querySelector('.main-nav__list')
  if (mainNavMenu.classList.contains('main-nav__list--closed')) {
    mainNavMenu.classList.remove('main-nav__list--closed')
    mainNavMenu.classList.add('main-nav__list--open')    
  } else {
    mainNavMenu.classList.remove('main-nav__list--open')
    mainNavMenu.classList.add('main-nav__list--closed')
  }
})