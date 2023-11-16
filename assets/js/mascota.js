const menuItems = document.querySelectorAll(".menu-vertical a");
const filas = document.querySelectorAll("tr");

menuItems.forEach(function (item) {
  item.addEventListener("click", function (event) {
    event.preventDefault(); // Evitar que los enlaces redirijan

    const target = item.getAttribute("data-target");
    filas.forEach(function (fila) {
      fila.classList.add("hidden");
      if (fila.classList.contains(target)) {
        fila.classList.remove("hidden");
      }
    });

    menuItems.forEach(function (menuItem) {
      menuItem.classList.remove("active");
    });

    item.classList.add("active");
  });
});