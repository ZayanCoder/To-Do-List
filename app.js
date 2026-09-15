const input = document.querySelector("#todo-input");
const ul = document.querySelector("#todo-list");

// Local Storage se todos lena
const todos = JSON.parse(localStorage.getItem("todos")) || [];

function addTodo(event) {
  event.preventDefault();

  if (input.value === "") {
    alert("Enter Something");
    return;
  }

  todos.push(input.value);

  // Local Storage mein save karna
  localStorage.setItem("todos", JSON.stringify(todos));

  showTodos();

  input.value = "";
}

function showTodos() {
  ul.innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    ul.innerHTML += `
      <li>
        ${todos[i]}
        <button class="delete" onclick="deleteTodo(${i})">
          delete
        </button>
      </li>
    `;
  }
}

showTodos();

function deleteTodo(index) {
  todos.splice(index, 1);

  // Delete ke baad Local Storage update karna
  localStorage.setItem("todos", JSON.stringify(todos));

  showTodos();
}
