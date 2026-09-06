const input = document.querySelector("#todo-input");
const ul = document.querySelector("#todo-list");

const todos = [];

function addTodo(event) {
  event.preventDefault();

   if (input.value === "") {
    alert("Enter Something");
    return;
  }

  todos.push(input.value);

  showTodos();
}

function showTodos() {
  ul.innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
   ul.innerHTML += `<li>${todos[i]} <button class="delete" onclick="deleteTodo(${i})">delete</button></li>`;
  }
}

showTodos();

function deleteTodo(index) {
  todos.splice(index, 1);

  showTodos();
}