import setCookie from "/js/cookieManager.js";
import getCookie from "/js/cookieManager.js";

// This page contains functions that are all run when a page freshly loads.

function checkDarkSide() {
  var currentSide = document.getElementsByTagName('link')[0];
  let isDarkSide = getCookie(darkSide);
  alert(isDarkSide);
  if (isDarkSide != "") {
    if (isDarkSide) {
      currentSide.setAttribute('href', 'darkSide.css');
      alert(isDarkSide);
    } else if (!isDarkSide) {
      currentSide.setAttribute('href', 'lightSide.css');
      alert(isDarkSide);
    }
  } else {
    return;
  }
}

function initialisePage() {
  // executes all functions & sets variables/constants listed
  // only called ONCE by the onload in each page's <body> tag though
  
  alert("calling funcs"); // <- only uncomment for debugging
  checkDarkSide();
}