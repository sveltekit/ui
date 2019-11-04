import { test } from 'tape-modern';
import Chip from './Chip.svelte';

const testTarget = document.getElementById('testTemplate');
const componentName = Chip.name;

test(`${componentName}: renders correctly`, async (t) => {
  const chip = new Chip({
    target: testTarget
  });

  t.ok(testTarget.querySelector('.chip'));

  chip.$destroy();
});

test(`${componentName}: prop 'avatar' renders avatar inside component`, async (t) => {
  const chip = new Chip({
    target: testTarget,
    props: {
      avatar: {
        src: '/avatar_example.gif',
        alt: 'XY'
      }
    }
  });

  t.ok(testTarget.querySelector('.chip div.avatar').style['backgroundImage'] === `url("/avatar_example.gif")`);

  chip.$destroy();
});

test(`${componentName}: prop 'isRemovable' allows component to be removed`, async (t) => {
  const chip = new Chip({
    target: testTarget,
    props: {
      isRemovable: true
    }
  });

  let eventReceived = false;

  const CancelListener = chip.$on('remove', (event) => {
    eventReceived = true;
  })

  testTarget.querySelector('.chip .removeIcon').click();
  t.ok(eventReceived);

  CancelListener();
  chip.$destroy();
});

test(`${componentName}: prop 'isDisabled' disables component`, async (t) => {
  const chip = new Chip({
    target: testTarget,
    props: {
      isDisabled: true
    }
  });

  t.ok(testTarget.querySelector('.chip button').disabled);

  chip.$destroy();
});

test(`${componentName}: prop 'isWaiting' and 'isRemovable' shows loader on component`, async (t) => {
  const chip = new Chip({
    target: testTarget,
    props: {
      isRemovable: true,
      isWaiting: true
    }
  });

  t.ok(testTarget.querySelector('.chip .spinner'));

  chip.$destroy();
});

test(`${componentName}: prop 'isWaiting' and 'isRemovable' shows loader on component`, async (t) => {
  const chip = new Chip({
    target: testTarget,
    props: {
      isRemovable: true,
      isWaiting: true
    }
  });

  t.ok(testTarget.querySelector('.chip .spinner'));

  chip.$destroy();
});

test(`${componentName}: prop 'isActive' adds correct class on component`, async (t) => {
  const chip = new Chip({
    target: testTarget,
    props: {
      isActive: true
    }
  });

  t.ok(testTarget.querySelector('.chip .isActive'));

  chip.$destroy();
});
