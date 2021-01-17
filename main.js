'use strict';
// 各種DOMを取得
const btnDOM = document.querySelector('#btn');
const textboxDOM = document.querySelector('#textbox');
const tbodyDOM = document.querySelector('#tbody');
// タスクを格納する配列を定義
const todos = [];
let todo = {};
// カウンターを定義
let counter = 0;
// 配列をHTMLに追加する関数を定義
const displayTodos = function() {
  const trElement = document.createElement('tr');
  // インデックス
  const tdElement0 = document.createElement('td');
  tdElement0.innerText = todo.id;
  // 入力内容
  const tdElement1 = document.createElement('td');
  tdElement1.innerText = todo.task;
  // 状態ボタン
  const tdElement2 = document.createElement('td');
  const statusBtnElement = document.createElement('button');
  statusBtnElement.innerText = todo.status;
  tdElement2.appendChild(statusBtnElement);
  // 削除ボタン
  const tdElement3 = document.createElement('td');
  const deleteBtnElement = document.createElement('button');
  deleteBtnElement.innerText = '削除';
  tdElement3.appendChild(deleteBtnElement);
  // 配列をHTMLへ追加
  trElement.appendChild(tdElement0);
  trElement.appendChild(tdElement1);
  trElement.appendChild(tdElement2);
  trElement.appendChild(tdElement3);
  tbodyDOM.appendChild(trElement);
};
// 追加ボタンを押下した時の動作
btnDOM.addEventListener('click', function(){
  todo = {
    id: counter,
    task: textboxDOM.value,
    status: '作業中'
  };
  todos.push(todo);
  counter++;
  displayTodos();
})

