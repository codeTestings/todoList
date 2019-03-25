var todoList = {
  todo: [],
  displayTodo: function() {
    if (this.todo.length === 0) {
      console.log("My todo list is empty!");
    }
    else {
      console.log('My todos: ');
      for (var i = 0; i < this.todo.length; i++) {
        if (this.todo[i].completed === true) {
          console.log('(x)', this.todo[i].todoText);
        }
        else {
          console.log('( )', this.todo[i].todoText);
        }
      }
    }
  },
  addTodo: function(todoText) {
    this.todo.push({
      todoText: todoText,
      completed: false,
    })
  },
  changeTodo: function(position, newValue) {
    this.todo[position-1].todoText = newValue;
    this.displayTodo();
  },
  deleteTodo: function(position) {
    this.todo.splice(position - 1, 1);
    this.displayTodo();
  },
  toggleCompleted: function(position) {
    var todo = this.todo[position - 1];
    todo.completed = !todo.completed;
  },
  toggleAll: function() {
    var allTodos = this.todo.length;
    var completedTodos = 0;
    for (var i = 0; i < this.todo.length; i++) {
      if (this.todo[i].completed === true) {
        completedTodos++;
      }
    }
    if (completedTodos === allTodos) {
      for (var i = 0; i < this.todo.length; i++) {
        this.todo[i].completed = false;
      }
    }
    else {
      for (var i = 0; i < this.todo.length; i++) {
        this.todo[i].completed = true;
      }
    }
    this.displayTodo();
  }
}

var handlers = {
  displayTodo: function() {
    todoList.displayTodo();
  },
  toggleAll: function() {
    todoList.toggleAll();
  },
  addTodo: function() {
    var addTodo = document.getElementById('add-todo-text-input');
    todoList.addTodo(addTodo.value);
    addTodo.value = '';
  },
  changeTodo: function() {
    var todoChangePositionInput = document.getElementById('todo-change-position-input');
    var changeTodoTextInput = document.getElementById('change-todo-text-input');
    todoList.changeTodo(todoChangePositionInput.valueAsNumber, changeTodoTextInput.value);
    todoChangePositionInput.value = '';
    changeTodoTextInput.value = '';
  },
  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById('delete-todo-position-input');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
  },
  toggleTodo: function() {
    var toggleTodoPositionInput = document.getElementById('toggle-todo-position-input');
    todoList.toggleCompleted(toggleTodoPositionInput.valueAsNumber);
    toggleTodoPositionInput.value = '';
  }
}
