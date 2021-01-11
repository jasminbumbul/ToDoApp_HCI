const zabList = document.querySelector('.zab-list');
const dodajNoviBtn = document.querySelector("#dodajZab");

document.addEventListener('DOMContentLoaded', getZabiljeske);

dodajNoviBtn.addEventListener('click', dodajNoviRedirect);

function dodajNoviRedirect() {
    location.href = "/dodavanjeZabiljeske.html";
}
const idiDanas = document.querySelector("#danas");
idiDanas.addEventListener('click', idiDanasRedirect);
function idiDanasRedirect() {
    location.href = "/danas.html";
}

function getZabiljeske() {
    let zabiljeske;
    if (localStorage.getItem("zabiljeske") === null) {
        zabiljeske = [];
    } else {
        zabiljeske = JSON.parse(localStorage.getItem("zabiljeske"));
    }
    zabiljeske.forEach(function (zab) {
        //todo div creation
        const zabDiv = document.createElement('div');
        zabDiv.classList.add('card');
        //header creation
        const header = document.createElement('h5');
        header.classList.add('card-header');
        zabDiv.appendChild(header);
        header.innerText=zab.header;
        //div zabiljeska text
        const zabTextdiv = document.createElement('div');
        zabTextdiv.classList.add('card-body');
        zabDiv.appendChild(zabTextdiv);
        //zabiljeska text
        zabTextdiv.innerHTML = zab.text;
        zabList.appendChild(zabDiv);
    });
}