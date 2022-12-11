//just styling
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

 const todoForm=document.querySelector('#todoform')
 const todoList=document.querySelector('ul')
 const todoInput=document.querySelector('input[id="task"]')
 const removeButton=document.querySelector('.removebutton')
 const li=document.querySelector('li')


// form submission event listener
 todoForm.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('submit')
    console.log(todoInput.value)
    const addedTodo=makeNewTodo(todoInput.value)
    const addedRemove=makeRemoveButton()
    const addedCheck=makeNewCheck()
    todoList.appendChild(addedTodo)
    addedTodo.appendChild(addedRemove)
    addedTodo.appendChild(addedCheck)
    addedTodo.setAttribute('class','addedtodo')
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
        e.target.parentElement.remove();
    }

    else if(e.target.tagName==='INPUT')
    console.log('you clicked a checkbox')
    savedTodos.push(e.parentElement.innerContent)

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

 
 
//  savedTodos.push({task: newTodo.innerText, isCompleted:false});
//  localStorage.setItem('todos', JSON.stringify(savedTodos))
// //  localStorage.setItem('Todos', JSON.stringify(li))