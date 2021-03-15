const postavljeni = document.querySelector("#postavljeniNumber");
const dovrseni = document.querySelector("#dovrseniNumber");
const aktivni = document.querySelector("#aktivniNumber");

const kateg1 = document.getElementById("kateg1");
const kateg2 = document.getElementById("kateg2");
const kateg3 = document.getElementById("kateg3");
const kateg4 = document.getElementById("kateg4");

const dodajNoviBtn = document.getElementById("dodajNovi");

dodajNoviBtn.addEventListener('click',dodajNoviRedirect);

function dodajNoviRedirect() {
    location.href = "/noviZadatak/noviZadatak.html";
}

refresh();
var test = 0.40;

function progressCircle(done) {
    let options = {
        startAngle: -1.55,
        size: 150,
        value: 0.40,
        fill: { gradient: ['#3d6353', '#4d9653'] }
    }
    options.value = done;
    $(".bar").circleProgress(options).on('circle-animation-progress',
        function (event, progress, stepValue) {
            if(done==1)
            {
                $(this).parent().find("span").text("100%");
            }
            else if(done==0)
            {
                $(this).parent().find("span").text("0%");
            }
            else{
                $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
            }
        });
    // $(".bar").circleProgress({
    //     value: 0.40
    // });
}

function refresh() {
    let todos;
    let brojPosao = 0;
    let posaodone = 0;
    let brojLicno = 0;
    let licnodone = 0;
    let brojZabava = 0;
    let zabavadone = 0;
    let brojOstalo = 0;
    let ostalodone = 0;
    let brojac = 0;
    let brojacDovrsenih = 0;
    
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    
    todos.forEach(function (todo) {
        brojac++;
        if (todo.kategorija == "Posao") {
            brojPosao++;
            if (todo.done == 1) {
                brojacDovrsenih++;
                posaodone++;
            }
        }
        if (todo.kategorija == "Licno") {
            brojLicno++;
            if (todo.done == 1) {
                brojacDovrsenih++;
                licnodone++;
            }
        }
        if (todo.kategorija == "Zabava") {

            brojZabava++;
            if (todo.done == 1) {
                brojacDovrsenih++;
                zabavadone++;
            }
        }
        if (todo.kategorija == "Ostalo") {

            brojOstalo++;
            if (todo.done == 1) {
                brojacDovrsenih++;
                ostalodone++;
            }
        }
        
    });
    
   
    postavljeni.innerText = brojac;
    dovrseni.innerText = brojacDovrsenih;
    aktivni.innerText = brojac - brojacDovrsenih;
   
    if (posaodone > 0) {
        kateg1.value = (posaodone * 100) / brojPosao;
    }
    else{
        kateg1.value=0;
    }
    if (licnodone > 0) {
        kateg2.value = (licnodone * 100) / brojLicno;
    }
    else{
        kateg2.value=0;
    }
    if (zabavadone > 0) {
        kateg3.value = (zabavadone * 100) / brojZabava;
    }
    else{
        kateg3.value=0;
    }
    if (ostalodone > 0) {
        kateg4.value = (ostalodone * 100) / brojOstalo;
    }
    else{
        kateg4.value=0;
    }

    progressCircle((brojacDovrsenih)/brojac);
}