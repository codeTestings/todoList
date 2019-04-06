var todoList = {
  todo: [],
  addTodo: function(todoText) {
    this.todo.push({
      todoText: todoText,
      completed: false
    })
  },
  changeTodo: function(position, newValue) {
    this.todo[position-1].todoText = newValue;
  },
  deleteTodo: function(position) {
    this.todo.splice(position - 1, 1);
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
  }
}

var handlers = {
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodo();
  },
  addTodo: function() {
    var addTodo = document.getElementById('add-todo-text-input');
    if (addTodo.value != '') {
    todoList.addTodo(addTodo.value);
    view.displayTodo();
    }
    addTodo.value = '';
  },
  changeTodo: function() {
    var todoChangePositionInput = document.getElementById('todo-change-position-input');
    var changeTodoTextInput = document.getElementById('change-todo-text-input');
    todoList.changeTodo(todoChangePositionInput.valueAsNumber, changeTodoTextInput.value);
    todoChangePositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodo();
  },
  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById('delete-todo-position-input');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
    view.displayTodo();
  },
  toggleTodo: function() {
    var toggleTodoPositionInput = document.getElementById('toggle-todo-position-input');
    todoList.toggleCompleted(toggleTodoPositionInput.valueAsNumber);
    toggleTodoPositionInput.value = '';
    view.displayTodo();
  }
}

var view = {
  displayTodo: function() {
    var theList = document.querySelector('ul');
    theList.innerHTML = '';
    for (var i = 0; i < todoList.todo.length; i++) {
      var listElement = document.createElement('li');
      var todo = todoList.todo[i];
      if(todo.completed == true) {
        listElement.textContent = '(x) ' + todoList.todo[i].todoText;
      }
      else {
        listElement.textContent = '( ) ' + todoList.todo[i].todoText;
      }
      theList.appendChild(listElement);
      listElement.appendChild(this.createDeleteButton());
      listElement.id = i;
      
     
    
    }
  },
  createDeleteButton: function() {
    var deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'x';
    return deleteButton;
  }
}



var ulList = document.querySelector('ul');
ulList.addEventListener('click', function(event) {
  console.log(event);
  var position = event.target.parentNode.id;
});

var buttonsContainer = document.querySelector('#buttons-container');
buttonsContainer.addEventListener('click', function(event) {
  console.log(event);
});











