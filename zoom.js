const body = document.querySelector(".tech-tree");
const zoomInBtn = document.querySelector(".zoom-in-btn");
const zoomOutBtn = document.querySelector(".zoom-out-btn");
const resetZoomBtn = document.querySelector(".zoom-reset-btn");

const ZOOM_INCREMENT = 1.5;
const DEFAULT_ZOOM = 1;

function setZoom(newZoom) {
  const style = window.getComputedStyle(body);
  const oldZoom = style.getPropertyValue("zoom");

  const halfScreenWidth = 0.5 * window.innerWidth;
  const halfScreenHeight = 0.5 * window.innerHeight;

  const oldScrollX = window.scrollX + halfScreenWidth;
  const oldScrollY = window.scrollY + halfScreenHeight;

  const newScrollX = newZoom * (oldScrollX / oldZoom) - halfScreenWidth;
  const newScrollY = newZoom * (oldScrollY / oldZoom) - halfScreenHeight;

  body.style.zoom = newZoom;
  window.scrollTo(newScrollX, newScrollY); 
}
function incrementZoom(zoomAmt) {
    const style = window.getComputedStyle(body);
    const oldZoom = style.getPropertyValue("zoom");

    setZoom(oldZoom * zoomAmt);
}
function resetZoom() {
    setZoom(DEFAULT_ZOOM)
}

zoomInBtn.addEventListener("click", function() {
  incrementZoom(ZOOM_INCREMENT);
});
zoomOutBtn.addEventListener("click", function() {
    incrementZoom(1 / ZOOM_INCREMENT);
});
resetZoomBtn.addEventListener("click", resetZoom);

resetZoom()

// this script is brought to you by Zoom (TM)(R)
