import { test } from 'tape-modern';
import Radio from './Radio.svelte';

const testTarget = document.getElementById('testTemplate');
const componentName = Radio.name;

test(`${componentName}: renders correctly`, async (t) => {
  const radio = new Radio({
    target: testTarget
  });

  t.ok(testTarget.querySelector('input[type="radio"]'));

  radio.$destroy();
});

test(`${componentName}: prop 'name' sets name attribute`, async (t) => {
  const name = 'foo';

  const radio = new Radio({
    target: testTarget,
    props: {
      name
    }
  });

  t.ok(testTarget.querySelector('input').getAttribute('name') === name);

  radio.$destroy();
});

test(`${componentName}: prop 'isChecked' sets attribute on input`, async (t) => {
  const radio = new Radio({
    target: testTarget,
    props: {
      isChecked: true
    }
  });

  t.ok(testTarget.querySelector('input').checked);

  radio.$destroy();
});


test(`${componentName}: prop 'isDisabled' disables input`, async (t) => {
  const radio = new Radio({
    target: testTarget,
    props: {
      isDisabled: true
    }
  });

  t.ok(testTarget.querySelector('input').disabled);

  radio.$destroy();
});
