
//selectors
const todoInput= document.querySelector('.todo-input');
const todoButton= document.querySelector('.todo-button');
const todoTitle = document.querySelector('.todo-title');
const datePicker = document.querySelector('.datePicker');
const nodateChk= document.querySelector("#checkbox_nodate");

//event listeners




todoButton.addEventListener('click', addTodo);
// todoList.addEventListener('click',deleteCheck);
// filterOption.addEventListener('click',filterTodo);





//functions

function addTodo(event) {
    let bool=1;
    let year= datePicker.value.substring(0,4);
    let month= datePicker.value.substring(5,7);
    let day= datePicker.value.substring(8,10);
    

    if (todoTitle.value == "") {
        alert("Niste unijeli naslov stavke");
        bool=0;
    }
    if (todoInput.value == "") {
        alert("Niste unijeli opis za todo stavku");
        bool=0
    }
    if(bool==1) {
        //prevents from reloading the page, because the submit button is clicked
        event.preventDefault();
        const date=[{
            day: null,
            month: null,
            year: null
        }];
        if(nodateChk.checked)
        {
            date.day=null;
            date.month=null;
            date.year=null;
        }
        else{
            date.day=day;
            date.month=month;
            date.year=year;
        }
        const arr = [
            {
                title: todoTitle.value,
                todo: todoInput.value,
                date: { day: date.day, month: date.month, year: date.year}
            }];
        saveToLocalStorage(arr[0]);

        alert("Uspješno dodana todo stavka");
        location.href = "/danas.html";
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


