// Variable to track the state of the menu
var menurdy = false;

// Function to toggle the visibility of the color palette section
function colorOpen() {
  document.getElementById('colorpalettesection').classList.toggle('colorhide');
}

// Function to toggle the visibility of the menu and other elements
function menuOpen() {
  // Toggle the visibility of elements
  document.getElementById('midsection').classList.toggle('hide');
  document.getElementById('backtotop').classList.toggle('hide');
  document.getElementById('menufooter').classList.toggle('hide');
  document.getElementById('navmenu').classList.toggle('show');

  // Toggle the state of the menu
  menurdy = !menurdy;

  // Change the menu icon based on the state
  if (menurdy == true) {
    document.getElementById('menu').src = 'images/close.png';
  } else {
    document.getElementById('menu').src = 'images/menu.png';
  }
}

// Function to handle window resize event
let resize = function () {
  let windowWidth = Math.floor(window.innerWidth);

  // Close the menu if it is open and the window width is greater than 610px
  if (windowWidth > 610 && menurdy == true) {
    menuOpen();
  }
  // Change the menu icon to the default state if the window width is less than or equal to 610px and the menu is closed
  else if (windowWidth <= 610 && menurdy == false) {
    document.getElementById('menu').src = 'images/menu.png';
  }
};

// Attach the resize function to the window's resize event
window.onresize = resize;
