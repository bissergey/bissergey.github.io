const container = document.querySelector('.js-art-space-btns');

const btns = container.querySelectorAll('button');

btns.forEach(el => {
  el.addEventListener('click', function(e) {
    btns.forEach(btn => {
      btn.classList.remove('art-space__btn_active')
    })
    e.target.classList.add('art-space__btn_active')
  })
})
