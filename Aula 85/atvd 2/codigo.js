function Produto()
{
    let item = document.getElementById("item");
    let volume = document.getElementById("volume");
    let pedido = document.getElementById("pedido");
    
    pedido.textContent= "Pedido: " + item.value + " Quantidade " + volume.value;

}