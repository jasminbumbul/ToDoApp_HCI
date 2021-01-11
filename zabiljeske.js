const vratinazad = document.querySelector("#novaZabiljeska");
vratinazad.addEventListener('click', vratiNazadRedirect);
function vratiNazadRedirect() {
    location.href = "/danas.html";
}