const list = document.querySelector('#list');
const form = document.querySelector('#add-list-item');
const newTodoText = document.querySelector('#new-item-text');

let todos = [];

const getTodosFromLocalStorage = () => {
  const todosFromLocalStorage = JSON.parse(localStorage.getItem('todos'));
  return todosFromLocalStorage || [];
}

const saveTodosToLocalStorage = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos))
}

const drawTodos = (todos) => {
  list.innerHTML = '';

  const items = todos
    .map(todo => {
      const checked = todo.checked ? 'checked' : '';

      return `
          <li class="list-item" data-id="${todo.id}">
              <input type="checkbox" class="list-item__cb" ${checked}>
              <label class="list-item__text">${todo.text}</label>
              <button class="list-item__remove">X</button>
          </li>
      `;
    })
    .join('');

  list.innerHTML = items;

  if (!todos.length > 0) {
    list.innerHTML = '<p>No todos. Go add one</p>';
  }
}

const submitFormHandler = (event) => {
  event.preventDefault();

  todos = addTodo(newTodoText.value);
  drawTodos(todos);
}

const addTodo = (text) => {
  saveTodosToLocalStorage(todos);

  return [
    ...todos,
    {
      id: Date.now().toString(),
      text: text,
      checked: false
    }
  ];
}

const clickOnListHandler = (event) => {
  const target = event.target;

  if (
    target.classList.contains('list-item__cb') ||
    target.classList.contains('list-item__text') ||
    target.classList.contains('list-item')
  ) {
    const id = target.closest('.list-item').dataset.id;
    toggleTodo(id);
  }

  if (target.classList.contains('list-item__remove')) {
    const id = target.closest('.list-item').dataset.id;

    removeTodo(id);
  }
}

const toggleTodo = (id) => {
  todos = getToggledTodos(todos, id);

  saveTodosToLocalStorage(todos);
  drawTodos(todos);
}

const getToggledTodos = (todos, id) => {
  return todos.map(todo => {
    if (todo.id === id) {
      return {
        ...todo,
        checked: !todo.checked
      }
    }

    return todo;
  })
}

const removeTodo = (id) => {
  todos = todos.filter(todo => todo.id !== id);

  saveTodosToLocalStorage(todos);
  drawTodos(todos);
}

list.addEventListener('click', clickOnListHandler)
form.addEventListener('submit', submitFormHandler);

todos = getTodosFromLocalStorage();
drawTodos(todos);