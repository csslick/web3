const data = [
  {
    title: '매직 프린세스: 얼음 괴물과 사라진 열쇠의 비밀',
    date: '2023-12-07',
    director: '안드레이 콜핀',
    cast: '이리나 스타르셴바움,니키타 볼코프',
    imgUrl: 'images/The%20Everlasting%20story.jpg',
    youtube: 'U-JgTCFJBDI?si=oKlM1TVgKmi-sRTT',
  },
  {
    title: '냉정과 열정 사이',
    date: '2023-12-06',
    director: '나카에 이사무',
    cast: '다케노우치 유타카,진혜림',
    imgUrl: 'images/BetweenCalmAndPassion.jpg',
    youtube: 'LD-EPRsbKLg?si=9rjme3dsTOFZRone',
  },
  {
    title: '나폴레옹',
    date: '2023-12-06',
    director: '리들리 스콧',
    cast: '호아킨 피닉스,바네사 커비',
    imgUrl: 'images/Napoleon.jpg',
    youtube: 'ROl3dZE5rk4?si=lXwm6cPIExJ2DQtH',
  },
  {
    title: '물비늘',
    date: '2023-12-06',
    director: '임승현',
    cast: '김자영,홍예서',
    imgUrl: 'images/TheRipple.jpg',
    youtube: 'F4GZZnmWMkA?si=NEpfGB9CcD52Oy4o',
  },
  {
    title: '뉴클리어나우',
    date: '2023-12-06',
    director: '올리버 스톤',
    cast: '올리버 스톤',
    imgUrl: 'images/NuclearNow.jpg',
    youtube: 'hXSHKumbp_c?si=ioWf1yBzlsEvw8Pv',
  },
  {
    title: '신울트라맨',
    date: '2023-12-06',
    director: '히구치 신지',
    cast: '사이토 타쿠미,나가사와 마사미',
    imgUrl: 'images/ShinUltraman.png',
    youtube: '2xstdwgkdD4?si=JYRMAu1JU9Z6nVdZ',
  },
  {
    title: '교토에서온편지',
    date: '2023-12-06',
    director: '김민주',
    cast: '한선화,차미경',
    imgUrl: 'images/ALetterfromKyoto.jpg',
    youtube: 'ROl3dZE5rk4?si=lXwm6cPIExJ2DQtH',
  },
  {
    title: '홈그라운드',
    date: '2023-12-06',
    director: '권아람',
    cast: '윤김명우,최옥진',
    imgUrl: 'images/HomeGround.jpg',
    youtube: 'ROl3dZE5rk4?si=lXwm6cPIExJ2DQtH',
  },
]

const movieList = document.querySelector('.movie-list');

let html = '';
data.forEach(movie => {
  html += `
    <div class='item' onclick='showMovie("${movie.youtube}")'>
      <img src=${movie.imgUrl} alt={movie.title}/>
      <div class='info'>
        <h3>${movie.title}</h3>
        <div>
          <p class='date'>개봉: ${movie.date}</p>
          <p class='director'>감독: ${movie.director}</p>
          <p class='cast'>배우: ${movie.cast}</p>
        </div>
      </div>
    </div>
  `
})

// 영화정보 표시
movieList.innerHTML = html;

// 동영상 모달창 
function showMovie(url) {
  console.log(url)
  const modal = document.querySelector('.modal')
  const video = document.querySelector('.modal iframe')

  modal.classList.add('active');
  let newUrl = `https://www.youtube.com/embed/${url}`;
  video.setAttribute('src', newUrl);
}

// 모달 닫기 버튼
document
  .querySelector('.modal .btn_close')
  .addEventListener('click', function(){
    // 페이지 새로고침
    location.reload();
  })