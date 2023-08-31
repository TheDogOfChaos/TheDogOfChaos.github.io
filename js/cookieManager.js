export function setCookie(cName, cValue, expDays) {
  const d = new Date();
  d.setTime(d.getTime() + (expDays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cName + "=" + cValue + ";" + expires + ";path=/";
}

export function getCookie(cName) {
  let cookie = cName + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(cookie) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}