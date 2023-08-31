import setCookie from "/js/cookieManager.js";
import getCookie from "/js/cookieManager.js";

function toggleDarkSide() {
  var currentSide = document.getElementsByTagName('link')[0];
  let isDarkSide = getCookie(darkSide);
  if (isDarkSide) {
    setCookie(darkSide, false, 365);
    currentSide.setAttribute('href', 'darkSide.css');
    alert(isDarkSide);
  } else if (!isDarkSide) {
    setCookie(darkSide, true, 365);
    currentSide.setAttribute('href', 'lightSide.css');
    alert(isDarkSide);
  }
}