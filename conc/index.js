Vue.createApp({
  data() {
    return {
      todos: [],
      todo: '',
    }
  },
  methods: {
    addTodo() {
      this.todos.push(this.todo);
      this.todo = '';
    }
  },
}).mount('#app')

// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const ulEl = document.querySelector('ul');

// function addTodo() {
//   const todo = inputEl.value.trim();
//   const listItemEl = document.createElement('li');
//   listItemEl.textContent = todo;

//   ulEl.appendChild(listItemEl);
//   inputEl.value = '';
// }

// buttonEl.addEventListener('click', addTodo);