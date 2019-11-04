import { test } from 'tape-modern';

import { wait, simulateClick } from 'helpers';

import Card from './Card.svelte';
import Clickable from './examples/Clickable.svelte';
import options from './options';

const testTarget = document.getElementById('testTemplate');
const componentName = Card.name;

test(`${componentName}: renders correctly`, async (t) => {
  const card = new Card({
    target: testTarget
  });

  t.ok(testTarget.querySelector('.card'));

  card.$destroy();
});

test(`${componentName}: prop 'level' adds correct class to component`, async (t) => {
  const card = new Card({
    target: testTarget,
    props: {
      level: options.level.THREE
    }
  });

  t.ok(testTarget.querySelector('.card.level-3'));

  card.$destroy();
});

test(`${componentName}: prop 'isClickDisabled' disables click event`, async (t) => {
  const card = new Clickable({
    target: testTarget,
    props: {
      isClickDisabled: true
    }
  });

  const component = testTarget.querySelector('.card');

  component.click();
  
  t.ok(card.count === 0);

  card.$set({ isClickDisabled: false });

  await wait(0);

  component.click();

  t.ok(card.count === 1);

  card.$destroy();
});

test(`${componentName}: prop 'isClickable' adds class to component`, async (t) => {
  const card = new Clickable({
    target: testTarget,
    props: {
      isClickable: true
    }
  });

  t.ok(testTarget.querySelector('.card.isClickable'));

  card.$destroy();
});

