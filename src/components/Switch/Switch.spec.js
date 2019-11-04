import { test } from 'tape-modern';
import Switch from './Switch.svelte';

const testTarget = document.getElementById('testTemplate');
const componentName = Switch.name;

test(`${componentName}: with no data creates default elements`, async (t) => {
  const switchComponent = new Switch({
    target: testTarget,
    props: {}
  });

  t.ok(testTarget.querySelector('.switch'));

  switchComponent.$destroy();
});

test(`${componentName}: clicking changes isActive value`, async (t) => {
  let isActive = true;

  const switchComponent = new Switch({
    target: testTarget,
    props: {
      isActive
    }
  });

  testTarget.querySelector('.switch').click();
  t.ok(switchComponent.isActive !== isActive);

  switchComponent.$destroy();
});

test(`${componentName}: clicking when disabled does not change isActive value`, async (t) => {
  const isActive = true;

  const switchComponent = new Switch({
    target: testTarget,
    props: {
      isActive,
      isDisabled: true
    }
  });

  testTarget.querySelector('.switch').click();
  t.equal(switchComponent.isActive, isActive);

  switchComponent.$destroy();
});

test(`${componentName}: isWaiting displays spinner`, async (t) => {
  const switchComponent = new Switch({
    target: testTarget,
    props: {
      isWaiting: true
    }
  });

  t.ok(testTarget.querySelector('.handle .spinner'));

  switchComponent.$destroy();
});

test(`${componentName}: clicking when isWaiting does not change isActive`, async (t) => {
  const isActive = true;

  const switchComponent = new Switch({
    target: testTarget,
    props: {
      isWaiting: true,
      isActive
    }
  });

  testTarget.querySelector('.switch').click();
  t.equal(switchComponent.isActive, isActive);

  switchComponent.$destroy();
});
