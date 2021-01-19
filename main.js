'use strict';
// 各種DOMを取得
const btnElm = document.querySelector('#btn');
const textboxElm = document.querySelector('#textbox');
const tbodyElm = document.querySelector('#tbody');
// タスクを格納する配列を定義
const todos = [];

// カウンターを定義
let counter = 0;

// todoを追加する関数
function createTask() {
  const todo = {
    id: counter,
    task: textbox.value,
    status: '作業中'
  };
  todos.push(todo);
};

// 状態ボタンを生成する関数
function createStatusBtn(array) {
  const statusBtn = document.createElement('td');
  const btn = document.createElement('button');
  btn.innerText = array.status;
  statusBtn.appendChild(btn);
return statusBtn;
};

// 削除ボタンを生成する関数
function createDelBtn() {
const delBtn = document.createElement('td');
const btn = document.createElement('button');
btn.innerText = "削除";
delBtn.appendChild(btn);
return delBtn;
};

// todoを表示する関数
const displayTodos = function(array) {
  const tr = document.createElement('tr');
  // インデックス
  const indexTd = document.createElement('td');
  indexTd.innerText = array.id;
  // 入力内容
  const taskTd = document.createElement('td');
  taskTd.innerText = array.task;
  // 配列をHTMLへ追加
  tr.appendChild(indexTd);
  tr.appendChild(taskTd);
  tr.appendChild(createStatusBtn(array));
  tr.appendChild(createDelBtn());
  tbodyElm.appendChild(tr);
};

// 追加ボタンを押下した時の動作
btnElm.addEventListener('click', function() {
  createTask();
  const array = todos.slice(-1)[0];
  displayTodos(array);
  counter++;
  textboxElm.value = "";
}); 

