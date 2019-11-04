import { test } from 'tape-modern';
import { wait, simulateClick } from 'helpers';

import Dropdown from './Dropdown.svelte';
import options from './options';

import Basic from './examples/Basic.svelte';
import ItemKey from './examples/ItemKey.svelte';
import IsMulti from './examples/IsMulti.svelte';
import IsSearchable from './examples/IsSearchable.svelte';
import MaxHeight from './examples/MaxHeight.svelte';
import SelectedItem from './examples/SelectedItem.svelte';
import SelectedItems from './examples/SelectedItems.svelte';
import Width from './examples/Width.svelte';
import Custom from './examples/Custom.svelte';

const testTarget = document.getElementById('testTemplate');
const componentName = Dropdown.name;

test(`${componentName}: renders correctly`, async (t) => {
  const dropdown = new Basic({
    target: testTarget
  });  
  
  await wait(0);

  document.querySelector('.button').click();
  t.ok(document.querySelector('.dropdownMenu'));

  dropdown.$destroy();
});

test(`${componentName}: hidden by default`, async (t) => {
  const dropdown = new Basic({
    target: testTarget
  });  
  
  await wait(0);
  
  const style = window.getComputedStyle(document.querySelector('.dropdownMenu').parentElement);
  t.ok(style.display === 'none');

  dropdown.$destroy();
});

test(`${componentName}: shows when activated`, async (t) => {
  const dropdown = new Basic({
    target: testTarget
  });  
  
  await wait(0);
  
  document.querySelector('.button').click();
  const style = window.getComputedStyle(document.querySelector('.dropdownMenu').parentElement);
  t.ok(style.display === 'block');

  dropdown.$destroy();
});

test(`${componentName}: prop 'items' controls list items`, async (t) => {
  const dropdown = new Basic({
    target: testTarget,
    props: {
      items: [
        {
          label: 'foo',
          id: 1
        },
        {
          label: 'bar',
          id: 2
        }
      ]
    }
  });  
  
  await wait(0);
  
  document.querySelector('.button').click();
  
  t.ok(document.querySelectorAll('.dropdownMenuItem').length === 2);
  t.ok(document.querySelector('.dropdownMenuItem').innerHTML.trim() === 'foo');

  dropdown.$destroy();
});

test(`${componentName}: prop 'itemKey' controls list item label`, async (t) => {
  const dropdown = new ItemKey({
    target: testTarget
  });  
  
  await wait(0);
  
  document.querySelector('.button').click();
  
  t.ok(document.querySelector('.dropdownMenuItem').innerHTML.trim() === 'Menu Item 1');

  dropdown.$destroy();
});

test(`${componentName}: prop 'isActive' exposes dropdown active state`, async (t) => {
  const dropdown = new Basic({
    target: testTarget
  });  
  
  await wait(0);
  
  document.querySelector('.button').click();

  t.ok(dropdown.isActive);

  dropdown.$destroy();
});

test(`${componentName}: prop 'isMulti' allow selecting multiple items`, async (t) => {
  const dropdown = new IsMulti({
    target: testTarget
  });  
  
  await wait(0);
  
  document.querySelector('.button').click();

  t.ok(document.querySelector('.checkbox'));

  dropdown.$destroy();
});

test(`${componentName}: prop 'isSearchable' allow searching and filtering items`, async (t) => {
  const dropdown = new IsSearchable({
    target: testTarget
  });  
  
  await wait(0);
  
  document.querySelector('.button').click();

  t.ok(document.querySelector('.search input'));

  dropdown.$destroy();
});

test(`${componentName}: prop 'maxHeight' sets a max height to dropdown menu`, async (t) => {
  const dropdown = new MaxHeight({
    target: testTarget
  });  
  
  await wait(0);
  
  document.querySelector('.button').click();

  t.ok(document.querySelector('.dropdownMenu > .card > div').style['max-height'] === '100px');

  dropdown.$destroy();
});

test(`${componentName}: prop 'selectedItem' tracks currently selected item`, async (t) => {
  const dropdown = new SelectedItem({
    target: testTarget,
  });  
  
  await wait(0);
  
  document.querySelector('.button').click();
  document.querySelector('.dropdownMenuItem:last-child').click();

  t.ok(dropdown.selectedItem.label === 'Menu Item 3');

  dropdown.$destroy();
});

test(`${componentName}: prop 'selectedItem' and 'isMulti' tracks currently selected items`, async (t) => {
  const dropdown = new SelectedItems({
    target: testTarget,
  });  
  
  await wait(0);
  
  document.querySelector('.button').click();
  document.querySelector('.dropdownMenuItem:first-child').click();
  document.querySelector('.button').click();
  document.querySelector('.dropdownMenuItem:last-child').click();

  t.ok(dropdown.selectedItem[0].label === 'Menu Item 1');
  t.ok(dropdown.selectedItem[1].label === 'Menu Item 3');

  dropdown.$destroy();
});

test(`${componentName}: prop 'getMenuContainer' returns the doc body`, async (t) => {
  const dropdown = new Dropdown({
    target: testTarget,
  });  
  
  await wait(0);
  const body = dropdown.getMenuContainer();
 
  t.ok(body);

  dropdown.$destroy();
});

test(`${componentName}: prop 'width' controls dropdown width`, async (t) => {
  const dropdown = new Width({
    target: testTarget,
    props: {
      width: '300px'
    }
  });  
  
  await wait(0);

  document.querySelector('.button').click();

 
  t.ok(document.querySelector('.dropdownMenu').style['width'] === '300px');

  dropdown.$destroy();
});


test(`${componentName}: prop 'MenuComponent' replaces default menu component`, async (t) => {
  const dropdown = new Custom({
    target: testTarget
  });  
  
  await wait(0);

  document.querySelector('.button').click();

  t.ok(document.querySelector('.dropdownMenuItem').innerHTML === 'Here we go');

  dropdown.$destroy();
});
