const range = document.querySelector('.form__range-input')
const output = document.querySelector('.form__range-counter')

output.innerHTML = range.value;

range.addEventListener('input', () => {
  output.innerHTML = range.value;
})

range.addEventListener('change', () => {
  output.innerHTML = range.value;
})