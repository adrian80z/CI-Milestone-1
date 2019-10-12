/* When clicks on the icon toggle between adding and removing the "mobile-nav" class to main-nav */
function mainMenuToggle() {
    var navigation = document.getElementById("mainNav");
    if (navigation.className == "main-nav") {
      navigation.className += " mobile-nav";
    } else {
      navigation.className = "main-nav";
    }
  }
