const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter(toDo => parseInt(li.id) !== toDo.id);
  saveToDos();
}

function paintToDo(newToDo) {
  const newLi = document.createElement("li");
  newLi.id = newToDo.id;
  const newSpan = document.createElement("span");
  newSpan.innerText = newToDo.text;
  const newButton = document.createElement("button");
  newButton.innerText = "❌";
  newButton.addEventListener("click", deleteToDo)
  newLi.appendChild(newSpan);
  newLi.appendChild(newButton);
  toDoList.appendChild(newLi);
}

function handleToDoForm(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now()
  }
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoForm);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}