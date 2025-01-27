const box = document.querySelector(".tech-tree");
const body = document.querySelector("body");

let isDown = false;
let startX; // position of mouse, fixed to screen
let startY;
let scrollLeft; // initial scroll position
let scrollTop;

function debugDot(x, y) {
  const pt = document.createElement("div");
  pt.style.position = "fixed";
  pt.style.left = x + 5 + "px";
  pt.style.top = y + 5 + "px";
  pt.style.width = "10px";
  pt.style.height = "10px";
  pt.style.background = "#000000";
  pt.id = x + " " + y;
  box.appendChild(pt);
  return pt;
}

// mouse events
function mouseDown(e) {
  isDown = true;

  scrollLeft = window.scrollX;
  scrollTop = window.scrollY;

  startX = e.pageX - box.offsetLeft - scrollLeft;
  startY = e.pageY - box.offsetTop - scrollTop;

  box.style.cursor = "grabbing"; // this doesn't work very well :(
}
function mouseUp(e) {
  isDown = false;
  box.style.cursor = "grab";
}
function mouseMove(e) {
  if (!isDown) return;
  e.preventDefault();

  const x = e.pageX - box.offsetLeft - window.scrollX;
  const y = e.pageY - box.offsetTop - window.scrollY;

  const newScrollX = scrollLeft - x + startX;
  const newScrollY = scrollTop - y + startY;

  window.scrollTo(newScrollX, newScrollY);
 }

box.addEventListener("mousedown", mouseDown);
box.addEventListener("mouseleave", mouseUp);
box.addEventListener("mouseup", mouseUp);
document.addEventListener("mousemove", mouseMove);

mouseUp();
