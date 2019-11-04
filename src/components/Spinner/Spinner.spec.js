import { test } from 'tape-modern';
import { wait } from 'helpers';
import Spinner from './Spinner.svelte';

const testTarget = document.getElementById('testTemplate');
const componentName = Spinner.name;

test(`${componentName}: is dimensions of parent`, async (t) => {
  const spinner = new Spinner({
    target: testTarget
  });

  testTarget.setAttribute('style', 'width:200px;height:200px;');

  t.equal(testTarget.querySelector('.spinner').getBoundingClientRect().width, 200);

  testTarget.setAttribute('style', '');
  
  spinner.$destroy();
});

test(`${componentName}: colour is inherited from css current color`, async (t) => {
  const spinner = new Spinner({
    target: testTarget
  });

  const color = 'rgb(123, 123, 123)';

  testTarget.setAttribute('style', `width:200px;height:200px;color:${color};`);

  t.equal(getComputedStyle(testTarget.querySelector('circle'))['stroke'], color);

  testTarget.setAttribute('style', '');
  
  spinner.$destroy();
});
