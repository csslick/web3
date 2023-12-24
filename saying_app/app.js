const saying_data = [
  {
    text: "길을 잃는 다는 것은 곧 길을 알게 된다는 것이다.",
    author: "동아프리카속담"
  },
  {
    text: "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다.",
    author: "엘버트 허버드"
  },
  {
    text: "단순하게 살아라. 현대인은 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?",
    author: "이드리스 샤흐"
  },
  {
    text: "어리석은 자는 멀리서 행복을 찾고, 현명한 자는 자신의 발치에서 행복을 키워간다.",
    author: "제임스 오펜하임"
  },
  {
    text: "네 자신의 불행을 생각하지 않게 되는 가장 좋은 방법은 일에 몰두하는 것이다.",
    author: "베토벤"
  },
];

let idx = 0;

function saying() {
  const textEl = document.querySelector('.text');
  const authorEl = document.querySelector('.author');
  
  textEl.innerHTML = saying_data[idx].text;
  authorEl.innerHTML = saying_data[idx].author;

  idx++;
  if(idx > saying_data.length - 1) idx = 0;
}

saying();




