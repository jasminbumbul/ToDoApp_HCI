
//selectors
const todoInput= document.querySelector('.todo-input');
const todoButton= document.querySelector('.todo-button');


//event listeners




todoButton.addEventListener('click', addTodo);
// todoList.addEventListener('click',deleteCheck);
// filterOption.addEventListener('click',filterTodo);





//functions

function addTodo(event) {

    if (todoInput.value == "") {
        alert("You have not entered anything to do!");
    }
    else {
        //prevents from reloading the page, because the submit button is clicked
        event.preventDefault();
   
        saveToLocalStorage(todoInput.value);
        
        alert("Uspješno dodana todo stavka");
        location.href= "/danas.html";
    }
}



function saveToLocalStorage(todo)
{
    //check if there are items in already
    let todos;
    if(localStorage.getItem('todos')===null)
    {
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem('todos'));
    }

    todos.push(todo);
    localStorage.setItem('todos',JSON.stringify(todos));
}


