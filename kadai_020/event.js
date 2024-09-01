// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// textというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

// ボタンがクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  // textというidを書き換える
  text.textContent = "ボタンをクリックしました。"; 
});