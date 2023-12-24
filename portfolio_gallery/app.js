const data = [
  {
    title: "홈페이지 1",
    category: 'homepage',
    imgUrl: 'https://placehold.co/600x400/000/fff?text=homepage+1'
  },
  {
    title: "홈페이지 2",
    category: 'homepage',
    imgUrl: 'https://placehold.co/600x400/f80/fff?text=homepage+2'
  },
  {
    title: "웹앱 1",
    category: 'webapp',
    imgUrl: 'https://placehold.co/600x400/369/fff?text=web+app+1'
  },
  {
    title: "ui/ux design 1",
    category: 'uiux-design',
    imgUrl: 'https://placehold.co/600x400/186/fff?text=uiux+design+1'
  },
]

const tabs = document.querySelectorAll('.tab');

// 전체작품 표시
data.forEach(function(item){
  list.innerHTML += `            
    <li>
      <img src=${item.imgUrl} />
      ${item.title}
    </li>`
})

// 카테고리별 표시
tabs.forEach((tab, i) => {
  tab.addEventListener('click', function(){
    console.log(i, tab.dataset.category)
    const category = tab.dataset.category;
    const list = document.querySelector('#list');

    list.innerHTML = '';

    if(tab.dataset.category !== 'all') {
      data.forEach(function(item){
        if(item.category === tab.dataset.category) {
          list.innerHTML += `
            <li>
              <img src=${item.imgUrl} />
              ${item.title}
            </li>
          `
        } 
      })
      return;
    } 

    data.forEach(function(item){
      list.innerHTML += `            
        <li>
          <img src=${item.imgUrl} />
          ${item.title}
        </li>`
    })
  })
})