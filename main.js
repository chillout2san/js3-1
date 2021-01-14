'use strict';

// 各種DOM取得
const textboxDOM = document.querySelector("#textbox");
const btnDOM = document.querySelector("#btn");
const tbodyDOM = document.querySelector('#tbody');

//追加ボタン押下時の動作
btnDOM.addEventListener('click', function(){
  const newTodo = document.createElement('tr');
  const elementArray = [
  '<td></td>',
  '<td></td>', 
  '<td><button>作業中</button></td>',
  '<td><button>削除</button></td>'];
  elementArray[0] = "0";
  elementArray[1] = textboxDOM.value;
  newTodo.innerHTML = elementArray[0] + elementArray[1] + elementArray[2] + elementArray[3];
  tbodyDOM.appendChild(newTodo);
})
