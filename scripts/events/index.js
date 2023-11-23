const boxContainer = document.querySelector('.js-check-box')
const boxs = boxContainer.querySelectorAll('label')
const enums = {
  1: 'e',
  2: 'f',
  3: 'm',
  4: 'n',
  5: 'p',
  6: 'o',
  7: 'l',
  8: 'k',
  9: 'c',
  10: 'b',
  11: 'g'
}

const className = '.reservation__scheme-wrapper_';
const roundName = (color) =>  'reservation__scheme-round-' + color + '_active';
const blockName = (color) =>  'reservation__scheme__' + color + '_active';
const classText = 'reservation__scheme-text-desc_active'

boxs.forEach(el => {
  el.querySelector('input').addEventListener('change', function(){
    const prefix = enums[this.name];
    const wrapper = document.querySelector(className + prefix)
    const status = this.checked;
    const colorScheme = wrapper.getAttribute('name');
    const roundClass = roundName(colorScheme);
    const blockClass = blockName(colorScheme);

    wrapper.querySelectorAll('.js-reservation__scheme')
      .forEach(block => {
        if (status) {
          block.classList.add(blockClass)
          const textBlock = block.querySelector('.reservation__scheme-text-desc');
          if (textBlock) {
            textBlock.classList.add(classText)
          }
        } else {
          block.classList.remove(blockClass)
          const textBlock = block.querySelector('.reservation__scheme-text-desc');
          if (textBlock) {
            textBlock.classList.remove(classText)
          }
        }
      })
    wrapper.querySelectorAll('.js-reservation__scheme-round')
      .forEach(block => {
        if (status) {
          block.classList.add(roundClass)
        } else {
          block.classList.remove(roundClass)
        }
      })
  })
})
