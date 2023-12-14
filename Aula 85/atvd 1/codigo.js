function Leitor_de_idade()
{
    let verificar = document.getElementById("verificar");
    let identidade = document.getElementById("identidade");


    if (verificar.value >= 18)
    {
        identidade.textContent ="é maior de idade";
    }

    else
    {
        identidade.textContent = "menor";
    }
    
    
}

