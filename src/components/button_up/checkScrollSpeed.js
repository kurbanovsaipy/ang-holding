var lastPos, newPos, timer, delta, 
    delay = 50;

function clear() {
  lastPos = null;
  delta = 0;
}

export default function checkScrollSpeed () {

    newPos = window.scrollY;

    if ( lastPos != null ){
        delta = newPos - lastPos;
    }
    lastPos = newPos;
    clearTimeout(timer);
    timer = setTimeout(clear, delay);
    return Math.abs(delta);
}