/just styling
function randomRGB(){
    const r= Math.floor(Math.random()*256)
    const g= Math.floor(Math.random()*256)
    const b= Math.floor(Math.random()*256)
    return `rgb(${r},${g},${b})`
 }

 const h1=document.querySelector('h1')
 const h2=document.querySelector('h2')
 setInterval(function(){
     h1.style.color=randomRGB()
     h2.style.color=randomRGB()
 },2000)

 const todoForm = document.querySelector('#todoform');
 const todoList=document.querySelector('ul')
 const todoInput=document.querySelector('input[id="task"]')
 const removeButton=document.querySelector('.removebutton')
 const li=document.querySelector('li')


// form submission event listener
 todoForm.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('submit')
    console.log(todoInput.value)
    const newTodoItem = todoInput.value;
    addTodoItem(newTodoItem)
    addTodoLiToDom(newTodoItem);

   todoForm.reset();
 } )
// click event listener on generated li elements in todo list
 todoList.addEventListener('click', function(e){
    if (e.target.tagName==='LI'){ //this has to be caps because the tagname is in caps
        console.log('an li was clicked')
        e.target.style.textDecoration='line-through';
        
    }
    else if(e.target.tagName==='BUTTON'){
        console.log('you clicked a button')
        removeToItem(e.target.parentElement.value);
        removeTodoLiFromDom(e.target.parentElement);
    }

    else if(e.target.tagName==='INPUT')
    console.log('you clicked a checkbox')
    // savedTodos.push(e.parentElement.innerContent)


})
//functions used in submission event listener
function makeRemoveButton(){
    const newRemovebutton=document.createElement('button')
    newRemovebutton.innerText='Remove Todo'
    return newRemovebutton
}

 function makeNewTodo(todo){
    const newTodo=document.createElement('li');
    newTodo.innerText=todo
    return newTodo
 }

 function makeNewCheck(){
    const newCheck=document.createElement('input')
    newCheck.setAttribute('type',"checkbox")
    newCheck.setAttribute('for','save to local storage?')
    newCheck.setAttribute('class','unchecked')
    return newCheck
 }

 const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];

 function addTodoLiToDom(todoItem) {
    const todoLi = makeNewTodo(todoItem);
    const addedRemove=makeRemoveButton()
    const addedCheck=makeNewCheck()
    todoList.appendChild(todoLi)
    todoLi.appendChild(addedRemove)
    todoLi.appendChild(addedCheck)
    todoLi.setAttribute('class','addedtodo')
 }

 function removeTodoLiFromDom(todoLi) {
    todoLi.parent.removeChild(todoLi);
 }

 function addTodoItem(item){
    const allTodoItems = getAllTodoItems();
    allTodoItems.push(item);
    localStorage.setItem('todoItems', JSON.stringify(allTodoItems))
 }

 function removeToItem(item){
    const allTodoItems = getAllTodoItems();
    allTodoItems.filter(item);
    localStorage.setItem('todoItems', JSON.stringify(allTodoItems))
 }

 function getAllTodoItems(){
    return localStorage.getItem('todoItems') ? JSON.parse(localStorage.getItem('todoItems')) : [];
 }

 function init(){
    //display all existing todo items
    const allTodoItem = getAllTodoItems();
    for(let todoItem of allTodoItem) {
        addTodoLiToDom(todoItem);
    }
 }

 init();
 
 
//  savedTodos.push({task: newTodo.innerText, isCompleted:false});
//  localStorage.setItem('todos', JSON.stringify(savedTodos))
// //  localStorage.setItem('Todos', JSON.stringify(li))