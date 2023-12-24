let count = 100;
const countEl = document.querySelector('.count');
const gift_box = document.querySelector('.gift-box');

countEl.innerHTML = count;

gift_box.addEventListener('click', ()=> {
  count--;
  countEl.innerHTML = count;
  const coin = document.querySelector('.coin');
  coin.classList.add('anim');
  coin.addEventListener('animationend', function(){
    this.classList.remove('anim');
  })
})
