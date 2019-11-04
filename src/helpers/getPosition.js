export default function getPosition(element, container) {
  let xPos = 0;
  let yPos = 0;
  let el = element;

  while (el) {
    xPos += (el.offsetLeft + el.clientLeft - el.scrollLeft);
    yPos += (el.offsetTop + el.clientTop - el.scrollTop);

    el = el.offsetParent === container ? null : el.offsetParent;
  }

  return {
    left: xPos,
    top: yPos,
    bottom: document.body.offsetHeight - yPos,
    right: document.body.offsetWidth - xPos
  };
}
