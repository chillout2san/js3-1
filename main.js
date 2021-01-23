'use strict';
// 各種DOMを取得
const btn = document.querySelector('#btn');
const textBox = document.querySelector('#textbox');
const tbody = document.querySelector('#tbody');
// タスクを格納する配列を定義
const todos = [];

// カウンターを定義
let counter = 0;

// todoを追加する関数
function createTask() {
  const todo = {
    id: counter,
    task: textBox.value,
    status: '作業中'
  };
  todos.push(todo);
  counter++;
  textBox.value = '';
};

// 状態ボタンを生成する関数
function createStatusBtn(currentTodo) {
  const statusBtn = document.createElement('td');
  const btn = document.createElement('button');
  btn.innerText = currentTodo.status;
  btn.addEventListener('click', (event) => {
    const arrayId = event.path[2].childNodes[0].innerText;
    if(todos[arrayId].status === '作業中') {
      todos[arrayId].status = '完了';
    }else{
      todos[arrayId].status = '作業中';
    };
    tbody.innerHTML = '';
    todos.forEach((todo) => {
      displayTodos(todo);
    });
  })
  statusBtn.appendChild(btn);
  return statusBtn;
};

// タスクを削除する関数
function deleteTask(event) {
  const arrayId = event.path[2].childNodes[0].innerText;
  todos.splice(arrayId, 1);
  tbody.innerHTML = '';
  for(let i = 0; i < todos.length; i++){
   todos[i].id = i;
  }
  todos.forEach((todo) => {
    displayTodos(todo);
  });
  counter += -1;
};

// 削除ボタンを生成する関数
function createDelBtn() {
  const delBtn = document.createElement('td');
  const btn = document.createElement('button');
  btn.innerText = '削除';
  delBtn.appendChild(btn);
  btn.addEventListener('click', (event) => {
    deleteTask(event);
  });
  return delBtn;
};

// todoを表示する関数
const displayTodos = (todo) => {
  const tr = document.createElement('tr');
  // インデックス
  const indexTd = document.createElement('td');
  indexTd.innerText = todo.id;
  // 入力内容
  const taskTd = document.createElement('td');
  taskTd.innerText = todo.task;
  // 配列をHTMLへ追加
  tr.appendChild(indexTd);
  tr.appendChild(taskTd);
  tr.appendChild(createStatusBtn(todo));
  tr.appendChild(createDelBtn());
  tbody.appendChild(tr);
};

// 追加ボタンを押下した時の動作
btn.addEventListener('click', () => {
  tbody.innerHTML = '';
  createTask();
  todos.forEach(function(todo){
    displayTodos(todo);
  });
}); 
