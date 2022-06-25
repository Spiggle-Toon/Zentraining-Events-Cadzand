var acc1 = document.getElementsByClassName("accordion1");
var i;

for (i = 0; i < acc1.length; i++) {
  acc1[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    document.getElementById("open1").classList.toggle("hide");
    document.getElementById("close1").classList.toggle("hide");

    /* Toggle between hiding and showing the active panel */
    var panel = document.getElementById("planning1");
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var acc2 = document.getElementsByClassName("accordion2");

for (i = 0; i < acc2.length; i++) {
  acc2[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    document.getElementById("open2").classList.toggle("hide");
    document.getElementById("close2").classList.toggle("hide");

    /* Toggle between hiding and showing the active panel */
    var panel = document.getElementById("planning2");
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var acc3 = document.getElementsByClassName("accordion3");

for (i = 0; i < acc3.length; i++) {
  acc3[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    document.getElementById("open3").classList.toggle("hide");
    document.getElementById("close3").classList.toggle("hide");

    /* Toggle between hiding and showing the active panel */
    var panel = document.getElementById("planning3");
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

let countDownDate = new Date("Sep 9, 2022 18:00:00").getTime();

let x = setInterval(function(){
  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 *60 *24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance  % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = `<div id="dagen"><h2>${days}</h2><h3>DAGEN</h3></div>
  <div id="uren"><h2>${hours}</h2><h3>UREN</h3></div>
  <div id="minuten"><h2>${minutes}</h2><h3>MINUTEN</h3></div>
  <div id="seconden"><h2>${seconds}</h2><h3>SECONDEN</h3></div>`;

  if(distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Te Laat!"
  }
})