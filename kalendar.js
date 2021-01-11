const todaysdate = document.querySelector("#todaysDate"); 
const dodajNoviBtn = document.querySelector("#dodajnovi");
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector(".filter-todo");
addTodaysDate();

document.addEventListener('DOMContentLoaded', getTodos);
dodajNoviBtn.addEventListener('click', dodajNoviRedirect);

function dodajNoviRedirect() {
    location.href = "/noviZadatak.html";
}
const idiDanas = document.querySelector("#danas");
idiDanas.addEventListener('click', idiDanasRedirect);
function idiDanasRedirect() {
    location.href = "/danas.html";
}
const idiPocetna = document.querySelector("#pocetna");
idiPocetna.addEventListener('click', idiPocetnaRedirect);
function idiPocetnaRedirect() {
    location.href = "/pocetna.html";
}

function aktiviraj(id){
    var element=document.getElementById(id);
    $('span.active').removeClass('active');
    element.classList.add("active");
    todoList.innerHTML="";
    getTodos();
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
   
    var element=document.getElementById(danUMjesecu);
    element.classList.add("active");
}

function getTodos() {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function (todo) {
        // var datum = new Date();
        // var danUMjesecu = datum.getDate();
        const oznaceni= document.querySelector(".active");
        if (/*todo.date.day == danUMjesecu || */todo.date.day == oznaceni.id) {
            //todo div creation
            const todoDiv = document.createElement('div');
            todoDiv.classList.add('todo');
            //title creation
            const title = document.createElement('div');
            title.classList.add('todo-title');
            todoDiv.appendChild(title);
            title.innerText = todo.title;
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
            if (todo.date.day == null) {
                date.innerText = "Date not set";
            }
            else {
                date.innerText = todo.date.day + "." + todo.date.month + "." + todo.date.year + ".";
            }
            //category creation
            const category = document.createElement('div');
            category.classList.add('todo-categ');
            todoDiv.appendChild(category);
            category.innerText = todo.kategorija;
            //check button
            // const completedButton = document.createElement('button');
            // completedButton.innerHTML = '<i class="fas fa-check" ></i>';
            // completedButton.classList.add("complete-btn");
            // todoDiv.appendChild(completedButton);
            // //delete button
            // const trashButton = document.createElement('button');
            // trashButton.innerHTML = '<i class="fas fa-trash" ></i>';
            // trashButton.classList.add("trash-btn");
            // todoDiv.appendChild(trashButton);
            //append to list
            todoList.appendChild(todoDiv);
        }
    });
}
