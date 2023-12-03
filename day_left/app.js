function getDays() {
  // 다가올 시간 입력
  const inputYear = document.querySelector('#year').value;
  const inputMonth = document.querySelector('#month').value;
  const inputDay = document.querySelector('#day').value;
  
  // 현재 시간
  let current_time = new Date().getTime();
  // 다가올 시간 입력
  let input_time = new Date(inputYear, inputMonth - 1, inputDay).getTime();

  // 시간계산
  let 남은날 = new Date(input_time - current_time) / (1000 * 60 * 60 * 24);
  console.log(inputYear, inputMonth, inputDay);
  console.log(남은날);
  
  // 표시
  document.querySelector('.result .text').innerHTML = `
    <span>${Math.ceil(남은날)}</span>일 남았습니다.
  `;

  return false;
}