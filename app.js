const parentElement = document.getElementById("parentElement");
const showMessageM = document.getElementById("showMessageM");
const showMessageF = document.getElementById("showMessageF");
const changeColor = document.body.style;

proposeM = () => {
  parentElement.style.display = "none";
  showMessageM.style.display = "block";
  changeColor.background =
    "linear-gradient(116.82deg, #ff94e7 0%, #27cbff 100%)";
};

proposeF = () => {
  parentElement.style.display = "none";
  showMessageF.style.display = "block";
  changeColor.background =
    "linear-gradient(116.82deg, #ff94e7 0%, #27cbff 100%)";
};

// Animate Text with Anim JS
var textWrapper = document.querySelectorAll(".ml6 .letters");
textWrapper.forEach((wrapper) => {
  wrapper.innerHTML = wrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );
});

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml6 .letter",
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i,
  })
  .add({
    targets: ".ml6",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });
