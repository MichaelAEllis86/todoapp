

funtion addTodoItem()


function removeTodoItem()


function addTodoHandler(){

}


function removeTodoHandler(){

}

function init(){
    //display all existing todo items
    const allTodoItem = getAllTodoItems();
    for(let todoItem of allTodoItem) {
        addTodoLiToDom(todoItem);
    }

    const todoForm = document.querySelector('#todoform');
    const todoList=document.querySelector('ul')

    // form submission event listener
    todoForm.addEventListener('submit', addTodoHandler);
    todoList.addEventListener('click', removeTodoHandler);
 }