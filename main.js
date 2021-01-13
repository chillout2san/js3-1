'use strict';

const newTodo = document.createElement('tr');
const addElement = [
  '<td></td>',
  '<td></td>', 
  '<td><button>作業中</button></td>',
  '<td><button>削除</button></td>'];

for(let i = 0; i < addElement.length; i++){
  newTodo.appendChild(document.createTextNode(addElement[i]));
};

const tbodyDOM = document.querySelector('#tbody')
tbodyDOM.innerHTML = newTodo;

