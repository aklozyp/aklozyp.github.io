const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

// Überprüfe, ob ein Wert für das Theme in den Cookies gespeichert ist
const currentTheme = getCookie('theme');

// Setze das Theme entsprechend dem gespeicherten Wert
if (currentTheme) {
document.documentElement.setAttribute('data-theme', currentTheme);

if (currentTheme === 'dark') {
toggleSwitch.checked = true;
}
}

// Funktion zum Hinzufügen von Cookies
function setCookie(cname, cvalue, exdays) {
const d = new Date();
d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
const expires = "expires="+d.toUTCString();
document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Funktion zum Abrufen von Cookies
function getCookie(cname) {
const name = cname + "=";
const decodedCookie = decodeURIComponent(document.cookie);
const ca = decodedCookie.split(';');
for(let i = 0; i <ca.length; i++) {
let c = ca[i];
while (c.charAt(0) === ' ') {
c = c.substring(1);
}
if (c.indexOf(name) === 0) {
return c.substring(name.length, c.length);
}
}
return "";
}

// Funktion zum Ändern des Themes
function switchTheme(e) {
if (e.target.checked) {
document.documentElement.setAttribute('data-theme', 'dark');
setCookie('theme', 'dark', 365);
} else {
document.documentElement.setAttribute('data-theme', 'light');
setCookie('theme', 'light', 365);
}
}


//Video Player

window.alert("testseite ");


//file selector video
const openVideoButton = document.getElementById("videoselect");
const videoselectInput = document.getElementById("videoselect-input");
const videoPlayer = document.getElementById("video-player");
const default_image = document.getElementById("default_image");
window.alert("test1")
openVideoButton.addEventListener("click", () => {
  videoselectInput.click();
});
window.alert("testseite 1");

videoselectInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  const url = URL.createObjectURL(file);
  const video = document.createElement("video");
  video.src = url;
  video.controls = true;
  dafaultImage.style.display = "none";
  videoPlayer.innerHTML = "";
  videoPlayer.appendChild(video);
  video.load();
  video.onloadeddata = function() {
    video.play();
  }

});
window.alert("testseite 3");


//file selector audio
const openAudioButton = document.getElementById("audioselect");
const audioselectInput = document.getElementById("audioselect-input");
