
//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector(".filter-todo");
const todaysdate = document.querySelector("#todaysDate");
const danasBtn = document.querySelector(".danas");
const sutraBtn = document.querySelector(".sutra");
const day3Btn = document.querySelector(".day3");
const day4Btn = document.querySelector(".day4");
const day5Btn = document.querySelector(".day5");
const day6Btn = document.querySelector(".day6");
const day7Btn = document.querySelector(".day7");
const dodajNoviBtn = document.querySelector("#dodajnovi");

//event listeners

//if page is loaded, call the function
document.addEventListener('DOMContentLoaded', getTodos);
dodajNoviBtn.addEventListener('click', dodajNoviRedirect);


// todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
// filterOption.addEventListener('click',filterTodo);



addTodaysDate();

//functions

function dodajNoviRedirect() {
    location.href = "/noviZadatak.html";
}

function addTodaysDate() {
    var date = new Date();
    var dayNumber = date.getDay();
    var mjesec = date.getMonth();
    var danUMjesecu = date.getDate();
    let mjeseciUGodini = ['Januar', 'Februar', 'Mart', 'April', 'Maj', 'Juni', 'Juli', 'August', 'Septembar', 'Oktobar', 'Novembar', 'Decembar'];
    let daniUSedmici = ['Ponedjeljak', 'Utorak', 'Srijeda', 'Četvrtak', 'Petak', 'Subota', 'Nedjelja'];
    // todaysdate.innerHTML=daniUSedmici[dayNumber-1]+", "+ mjesec[mjeseciUGodini-1];
    todaysdate.innerHTML = daniUSedmici[dayNumber - 1] + ", " + danUMjesecu + ". " + mjeseciUGodini[mjesec];
    day3Btn.innerHTML = danUMjesecu + 2;
    day4Btn.innerHTML = danUMjesecu + 3;
    day5Btn.innerHTML = danUMjesecu + 4;
    day6Btn.innerHTML = danUMjesecu + 5;
    day7Btn.innerHTML = danUMjesecu + 6;
}


function deleteCheck(event) {
    const item = event.target;
    const todo = item.parentElement;
    //DELETE TODO
    if (item.classList[0] === 'trash-btn') {
        //animation
        todo.classList.add('fall');
        removeFromLocalStorage(todo);
        todo.addEventListener("transitionend", function () {
            todo.remove();
        });
    }

    //checkmark
    if (item.classList[0] === 'complete-btn') {
        todo.classList.toggle('completed');
    }
}

function filterTodo(event) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
        switch (event.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                }
                else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":

                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                }
                else {
                    todo.style.display = 'none';
                }
                break;
        }
    });
}


function getTodos() {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function (todo) {
        //todo div creation
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        //title creation
        const title = document.createElement('div');
        title.classList.add('todo-title');
        todoDiv.appendChild(title);
        title.innerText=todo.title;
        //li creation
        const newTodo = document.createElement('li');
        newTodo.classList.add('todo-item');
        newTodo.innerText = todo.todo;
        //appends newTodo item to the main div
        todoDiv.appendChild(newTodo);
        //date creation
        const date = document.createElement('div');
        date.classList.add('todo-date');
        todoDiv.appendChild(date);
        if(todo.date.day==null)
        {
            date.innerText="Date not set";
        }
        else{
            date.innerText=todo.date.day+"."+todo.date.month+"."+todo.date.year+".";
        }
        //category creation
        const category = document.createElement('div');
        category.classList.add('todo-categ');
        todoDiv.appendChild(category);
        category.innerText=todo.kategorija;
        //check button
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check" ></i>';
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);
        //delete button
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash" ></i>';
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);
        //append to list
        todoList.appendChild(todoDiv);
    });
}

function removeFromLocalStorage(todo) {
    //check if there are items in already
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}





