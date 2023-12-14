function Aparecer_Home()
{
    let home = document.getElementById("home");
    let contato = document.getElementById("contato");
    let ajuda = document.getElementById("ajuda");

    home.classList.remove("sumir")
    contato.classList.add("sumir")
    ajuda.classList.add("sumir")
}


function Aparecer_Contato()
{

    let home = document.getElementById("home");
    let contato = document.getElementById("contato");
    let ajuda = document.getElementById("ajuda");

    home.classList.add("sumir")
    contato.classList.remove("sumir")
    ajuda.classList.add("sumir")

}


function Aparecer_Ajuda()
{
    let home = document.getElementById("home");
    let contato = document.getElementById("contato");
    let ajuda = document.getElementById("ajuda");

    home.classList.add("sumir")
    contato.classList.add("sumir")
    ajuda.classList.remove("sumir")
}