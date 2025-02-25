document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const clearAllBtn = document.getElementById('clearAllBtn');
  
    // Add task
    addTaskBtn.addEventListener('click', () => {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
      }
    });
  
    // Add task to the list
    function addTask(taskText) {
      const li = document.createElement('li');
      li.className = 'list-group-item';
  
      const span = document.createElement('span');
      span.className = 'task-text';
      span.textContent = taskText;
      li.appendChild(span);
  
      const btnGroup = document.createElement('div');
      btnGroup.className = 'btn-group';
  
       
       
  
      // Delete button
      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'btn btn-danger btn-sm';
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', () => deleteTask(li));
   
       
       
    btnGroup.appendChild(deleteBtn);
      li.appendChild(btnGroup);
  
      taskList.appendChild(li);
    }
  
    // Edit task
    function editTask(span) {
      const newText = prompt('Edit your task:', span.textContent);
      if (newText !== null && newText.trim() !== '') {
        span.textContent = newText.trim();
      }
    }
  
    // Delete task
    function deleteTask(li) {
      taskList.removeChild(li);
    }
  
    // Toggle task completion
    function toggleComplete(span) {
      span.classList.toggle('completed');
    }
  
    // Clear all tasks
    clearAllBtn.addEventListener('click', () => {
      taskList.innerHTML = '';
    });
  });