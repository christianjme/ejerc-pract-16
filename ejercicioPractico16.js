document.addEventListener('DOMContentLoaded', e =>{
  slider()
})

function slider(){
  const $btnNext = document.querySelector('.slider-buttons .next')
  const $btnPrev = document.querySelector('.slider-buttons .prev')
  const $slides = document.querySelectorAll('.slider-slide')

  let i = 0

  setInterval(()=>{
    $btnNext.click()
  }, 3000)

  document.addEventListener('click', e=>{
    if (e.target === $btnPrev) {
      e.preventDefault()
      $slides[i].classList.remove('active')
      i--
      if (i < 0) {
        i = $slides.length-1
      }
      $slides[i].classList.add('active')
    }
    if (e.target === $btnNext) {
      e.preventDefault()
      $slides[i].classList.remove('active')
      i++
      if (i > $slides.length-1) {
        i = 0
      }
      $slides[i].classList.add('active')
    }
    
  })



}