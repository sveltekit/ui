import { test } from 'tape-modern';
import Checkbox from './Checkbox.svelte';

const testTarget = document.getElementById('testTemplate');
const componentName = Checkbox.name;

test(`${componentName}: renders correctly`, async (t) => {
  const checkbox = new Checkbox({
    target: testTarget
  });

  t.ok(testTarget.querySelector('.checkbox-container'));

  checkbox.$destroy();
});


test(`${componentName}: prop 'name' sets name attribute`, async (t) => {
  const checkbox = new Checkbox({
    target: testTarget,
    props: {
      name: 'Foo'
    }
  });

  t.ok(testTarget.querySelector('.checkbox-container input').getAttribute('name') === 'Foo');

  checkbox.$destroy();
});

test(`${componentName}: prop 'isChecked' sets attribute on input`, async (t) => {
  const checkbox = new Checkbox({
    target: testTarget,
    props: {
      isChecked: true
    }
  });

  t.ok(testTarget.querySelector('.checkbox-container input').checked);

  checkbox.$destroy();
});

test(`${componentName}: prop 'isDisabled' disables input`, async (t) => {
  const checkbox = new Checkbox({
    target: testTarget,
    props: {
      isDisabled: true
    }
  });

  t.ok(testTarget.querySelector('.checkbox-container input').disabled);

  checkbox.$destroy();
});
