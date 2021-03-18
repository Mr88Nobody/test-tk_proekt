const selected = document.querySelector ('.form__select-selected')
const selectWrap = document.querySelector('.form__select-wrap')
const optionsList = document.querySelectorAll('.form__select-option')

selected.addEventListener('click', () => {
  selectWrap.classList.toggle('form__select-wrap--active')  
})

optionsList.forEach(el => {
  el.addEventListener('click', () => {
    selected.innerHTML = el.querySelector(".form__select-label").innerHTML
    selectWrap.classList.remove("form__select-wrap--active")
  })
})