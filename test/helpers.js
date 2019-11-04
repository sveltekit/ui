export function wait(ms) {
  return new Promise(f => setTimeout(f, ms));
};

export function simulateClick(elem) {
  const evt = new MouseEvent('mousedown', {
    bubbles: true,
    cancelable: true,
    view: window
  });

  console.log('dispatch', elem.dispatchEvent(evt));
}

export function handleKeyboard(key) {
  window.dispatchEvent(new KeyboardEvent('keydown', {'key': key}));
  return new Promise(f => setTimeout(f, 0));
}
