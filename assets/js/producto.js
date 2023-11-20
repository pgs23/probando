document.addEventListener("DOMContentLoaded", function () {
  // Get all menu items and product rows
  var menuItems = document.querySelectorAll('.menu-v a');
  var productRows = document.querySelectorAll('table tr');

  // Add click event listeners to menu items
  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener('click', function (event) {
      event.preventDefault();

      // Hide all product rows
      productRows.forEach(function (row) {
        row.style.display = 'none';
      });

      // Show the selected product row
      var targetRowClass = menuItem.getAttribute('data-target');
      var targetRow = document.querySelector('.' + targetRowClass);
      if (targetRow) {
        targetRow.style.display = 'table-row';
      }
    });
  });
});
