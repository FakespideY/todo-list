//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//add eventlistener
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//functions

function addTodo(event) {
  //prevent for submitting

  event.preventDefault();
  //todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //cerate li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  // create mark complete button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fa-solid fa-check-double"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);


  //trash button

  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);


  //append to list

  todoList.appendChild(todoDiv);

  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  //delete button
  if (item.classList[0] === 'trash-btn') {
    const todo = item.parentElement;
    //add animations
    todo.classList.add("fall");

    todo.addEventListener("transitionend", function () {
      todo.remove();
    });

  }
  //complete button
  if (item.classList[0] === 'complete-btn') {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}