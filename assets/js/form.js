
var form = document.getElementById('PedidosPetShop');
form.addEventListener("submit", e => {
  e.preventDefault();
  fetch(form.action, {
      method : "POST",
      body: new FormData(document.getElementById("PedidosPetShop")),
  }).then(
      response => response.json()
  ).then((html) => {
    
    alert('Gracias por tu Mensaje ')
    PedidosPetShop.reset();
    
  });
});