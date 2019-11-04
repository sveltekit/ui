import _noop from 'lodash/noop';
import { detach, insert, noop } from 'svelte/internal';

function createSlots(slots) { //https://github.com/sveltejs/svelte/issues/2588
  const svelteSlots = {};

  for (const slotName in slots) {
    svelteSlots[slotName] = [createSlotFn(slots[slotName])];
  }

  function createSlotFn(element) {
    return function () {
      return {
        c: noop,

        m: function mount(target, anchor) {
          insert(target, element, anchor);
        },

        d: function destroy(detaching) {
          // not sure if we need this still?
          // if (detaching) {
          //   console.log('element :', element);
          //   // detach(element);
          // }
        },

        l: noop,
      };
    }
  }
  return svelteSlots;
}

const config = {
  appElem: null
};

const modal = {
  component: null,
  resolve: _noop,
  reject: _noop
};

function cancel(reason) {
  remove();
  if (modal) modal.reject(reason);
}

function complete(value) {
  remove();
  modal.resolve(value);
}

function remove() {
  if (!modal.component) return;

  document.body.removeChild(modal.component.targetElem);
  modal.component.targetElem.removeEventListener('keydown', onkeydown);
  modal.component.$destroy();
  modal.component = null;
  document.body.style.overflow = '';
}

function open(ModalComponent, options = {}, content) {
  let defer = new Promise((resolve, reject) => {
    modal.resolve = resolve;
    modal.reject = reject;
  });

  const targetElem = document.createElement('div');
  const contentFrag = document.createDocumentFragment();
  const contentElem = document.createElement('div');
  contentElem.innerHTML = content;
  contentFrag.appendChild(contentElem);

  const props = Object.assign(options, {
    complete,
    cancel
  });
  props.targetElem = targetElem;
  props.$$slots = createSlots({ default: contentFrag })
  props.$$scope = {};

  modal.component = new ModalComponent({
    target: targetElem,
    props,
  });

  targetElem.addEventListener('keydown', onkeydown);
  document.body.style.overflow = 'hidden';
  document.body.appendChild(targetElem);

  return defer;
}

function options(opts) {
  Object.assign(config, opts);
}
const focusableSelectors = [
  'button:not(:disabled)',
  '[href]',
  'input:not(:disabled)',
  'select:not(:disabled)',
  'textarea:not(:disabled)',
  '[tabindex]:not([tabindex="-1"]):not(:disabled)'
];

function onkeydown(event) {
  const focusable = this.querySelectorAll(focusableSelectors.join(','));
  const isTab = event.key === 'Tab';
  const isTabForward = isTab && !event.shiftKey;
  const isTabBackward = isTab && event.shiftKey;
  const firstFocusableElem = focusable[0];
  const lastFocusableElem = focusable[focusable.length - 1];

  if (isTabForward && document.activeElement === lastFocusableElem) {
    event.preventDefault();
    firstFocusableElem.focus();
  }

  if (isTabBackward && document.activeElement === firstFocusableElem) {
    event.preventDefault();
    lastFocusableElem.focus();
  }
}

export default {
  open,
  remove,
  options
}
