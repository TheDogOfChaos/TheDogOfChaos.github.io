const root = document.querySelector(':root');
let cookie = getCookie("darkmode");
let darkmode = (cookie != null) ? cookie : false;

function darkLoad() {
    if (darkmode) {
        // light mode
        root.style.cssText = "--box-bgColor: #ffffff;--rConGradLight: #00ff00;--rConGradDark: #008000;--textColor: #000000;--buttonColor: #ffffff;--dim-bg: 0;--section-bgColor: #9cff9c;--hr-color: #80c080;--link-color: #008000;";
        document.getElementById("light").style.display = "block";
        document.getElementById("dark").style.display = "none";
    } else {
        // dark mode
        root.style.cssText = "--box-bgColor: #353535;--rConGradLight: #ff00ff;--rConGradDark: #800080;--textColor: #ffffff;--buttonColor: #404040;--dim-bg: 0.75;--section-bgColor: #630063;--hr-color: #c080c0;--link-color: #c000c0;";
        document.getElementById("light").style.display = "none";
        document.getElementById("dark").style.display = "block";
    }
}
function darkToggle() {
    if (darkmode) {
        darkmode = false;
    } else {
        darkmode = true;
    }
    setCookie("darkmode",darkmode, 365);
    darkLoad();
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
