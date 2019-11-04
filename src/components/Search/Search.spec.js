import { test } from 'tape-modern';
import { wait, simulateClick } from 'helpers';

import Search from './Search.svelte';
import Basic from './examples/Basic.svelte';
import Debounce from './examples/Debounce.svelte';

const testTarget = document.getElementById('testTemplate');
const componentName = Search.name;

test(`${componentName}: searchText represents value entered in text input element`, async (t) => {
  const searchText = 'foo bar';

  const search = new Basic({
    target: testTarget
  });

  const inputElem = testTarget.querySelector('input');

  t.equal(inputElem.value, '');

  inputElem.value = searchText;
  
  const event = new Event('input');
  inputElem.dispatchEvent(event);

  await wait(0);
  t.equal(search.$$.ctx.searchText, searchText);

  search.$destroy();
});

test(`${componentName}: setting value for input from outside the component updates the input element`, async (t) => {
  const searchText = 'foo bar';

  const search = new Search({
    target: testTarget
  });

  const inputElem = testTarget.querySelector('input');

  t.equal(inputElem.value, '');

  search.$set({value: searchText});

  await wait(0);
  t.equal(inputElem.value, searchText);

  search.$destroy();
});

test(`${componentName}: when debounce is true searchText represents value entered in text input element after debounce wait time`, async (t) => {
  const searchText = 'foo bar';

  const search = new Debounce({
    target: testTarget
  });

  const inputElem = testTarget.querySelector('input');

  inputElem.value = searchText;
  
  const event = new Event('input');
  inputElem.dispatchEvent(event);

  await wait(0);
  t.equal(search.$$.ctx.searchText, '');

  await wait(300);
  t.equal(search.$$.ctx.searchText, searchText);

  search.$destroy();
});
