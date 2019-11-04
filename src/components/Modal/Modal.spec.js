import { test } from 'tape-modern';
import { wait, simulateClick } from 'helpers';

import Modal from './Modal.svelte';
import service from './modal';
import buttonOptions from '../Button/options';

import Basic from './examples/Basic.svelte';
import Props from './examples/Props.svelte';

const testTarget = document.getElementById('testTemplate');
const componentName = Modal.name;

test(`${componentName}: opens correctly`, async (t) => {
  const modal = new Basic({
    target: testTarget
  });

  document.querySelector('button').click();
  t.ok(document.querySelector('.modalOverlay'));

  modal.$destroy();
});


test(`${componentName}: closes correctly`, async (t) => {
  const modal = new Basic({
    target: testTarget
  });

  document.querySelector('button').click();
  t.ok(document.querySelector('.modalOverlay'));
  document.querySelector('.modalOverlay button').click();
  t.ok(!document.querySelector('.modalOverlay'));

  modal.$destroy();
});

test(`${componentName}: prop 'isWaiting' shows spinner on modal button`, async (t) => {
  const modal = new Props({
    target: testTarget,
    props: {
      modalProps: { 
        isWaiting: true
      }
    }
  });

  document.querySelector('button').click();
  t.ok(document.querySelector('.modalOverlay'));
  t.ok(document.querySelector('.modalOverlay button .spinner'));

  modal.$destroy();
});

test(`${componentName}: prop 'hasOverlay' false removes overlay`, async (t) => {
  const modal = new Props({
    target: testTarget,
    props: {
      modalProps: { 
        hasOverlay: false
      }
    }
  });

  document.querySelector('button').click();
  t.ok(!document.querySelector('.hasOverlay'));

  modal.$destroy();
});

test(`${componentName}: prop 'hasCustomTemplate' removes padding from modal`, async (t) => {
  const modal = new Props({
    target: testTarget,
    props: {
      modalProps: { 
        hasCustomTemplate: true
      }
    }
  });

  document.querySelector('button').click();
  t.ok(document.querySelector('.hasCustomTemplate'));

  modal.$destroy();
});

test(`${componentName}: prop 'width' controls width of modal`, async (t) => {
  const modal = new Props({
    target: testTarget,
    props: {
      modalProps: { 
        width: '500px'
      }
    }
  });

  document.querySelector('button').click();
  t.ok(getComputedStyle(document.querySelector('.modal')).width === '500px');

  modal.$destroy();
});

test(`${componentName}: prop 'isClosable' controls if the modal has the close icon/button`, async (t) => {
  const modal = new Props({
    target: testTarget,
    props: {
      modalProps: { 
        isClosable: false
      }
    }
  });

  document.querySelector('button').click();
  t.ok(!document.querySelector('.closer'));

  modal.$destroy();
});

test(`${componentName}: prop 'title' controls the modal's title`, async (t) => {
  const modal = new Props({
    target: testTarget,
    props: {
      modalProps: { 
        title: 'Test title'
      }
    }
  });

  document.querySelector('button').click();
  t.ok(document.querySelector('.title').innerHTML === 'Test title');

  modal.$destroy();
});

test(`${componentName}: prop 'hasFooter' controls if the modal has a footer section`, async (t) => {
  const modal = new Props({
    target: testTarget,
    props: {
      modalProps: { 
        hasFooter: false
      }
    }
  });

  document.querySelector('button').click();
  t.ok(!document.querySelector('.footer'));

  modal.$destroy();
});

test(`${componentName}: prop 'okType' sets the button type of the main button on the modal`, async (t) => {
  const modal = new Props({
    target: testTarget,
    props: {
      modalProps: { 
        okType: buttonOptions.type.PRIMARY
      }
    }
  });

  document.querySelector('button').click();
  t.ok(document.querySelector('button.type-primary'));

  modal.$destroy();
});

test(`${componentName}: prop 'isOkDisabled' controls modal button disabled state`, async (t) => {
  const modal = new Props({
    target: testTarget,
    props: {
      modalProps: { 
        isOkDisabled: true
      }
    }
  });

  document.querySelector('button').click();
  t.ok(document.querySelector('.footerAction button').disabled);

  modal.$destroy();
});

test(`${componentName}: prop 'okText' sets modal button text`, async (t) => {
  const modal = new Props({
    target: testTarget,
    props: {
      modalProps: { 
        okText: 'Okay'
      }
    }
  });

  document.querySelector('button').click();
  t.ok(document.querySelector('.footerAction .inner span').innerHTML.trim() === 'Okay');

  modal.$destroy();
});

test(`${componentName}: prop 'hasCancelButton' shows/hide cancel button`, async (t) => {
  const modal = new Props({
    target: testTarget,
    props: {
      modalProps: { 
        hasCancelButton: false
      }
    }
  });

  document.querySelector('button').click();
  t.ok(!document.querySelector('.footerAction:last-child .type-link'));

  modal.$destroy();
});

test(`${componentName}: prop 'cancelText' sets cancel button text`, async (t) => {
  const modal = new Props({
    target: testTarget,
    props: {
      modalProps: { 
        cancelText: 'Foo'
      }
    }
  });

  document.querySelector('button').click();
  t.ok(document.querySelector('.footerAction:last-child button .inner span').innerHTML === 'Foo');

  modal.$destroy();
});

test(`${componentName}: prop 'isKeyboardClosable' controls if ESC key can close modal`, async (t) => {
  const modal = new Props({
    target: testTarget,
    props: {
      modalProps: { 
        isKeyboardClosable: false
      }
    }
  });

  document.querySelector('button').click();
  window.dispatchEvent(new KeyboardEvent('keydown', {'keyCode': 27}));
  t.ok(document.querySelector('.modal'));

  modal.$destroy();
});

// isKeyboardClosable	boolean	true
// isOverlayClosable	boolean	true
// target	-	-
// targetElem	-	-
// height	-	-
// maxWidth	-	-
// cancel	function	undefined
// complete	function	undefined
// ClassNames	string	-
// OverlayClassNames	string	"hasOverlay"
// CustomContentClass	string	-
// ModalStyles

