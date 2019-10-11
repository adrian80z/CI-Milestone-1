/* When clicks on the icon toggle between adding and removing the "mobile-nav" class to main-nav */
function mainMenuToggle() {
    var navigation = document.getElementById("mainNav");
    if (navigation.className == "main-nav") {
      navigation.className += " mobile-nav";
    } else {
      navigation.className = "main-nav";
    }
  }

/* Code for modal box taken from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal2 */ 
  // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}