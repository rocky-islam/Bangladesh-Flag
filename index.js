let flag = document.querySelector(".flag");
let speed = 50;
let rotation = 0;

function animateFlag() {
  rotation += speed / 100;
  flag.style.transform = "rotate(" + rotation + "deg)";
  requestAnimationFrame(animateFlag);
}

animateFlag();
