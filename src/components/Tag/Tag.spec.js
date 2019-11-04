import { test } from 'tape-modern';
import { wait, simulateClick } from 'helpers';

import Tag from './Tag.svelte';
import BasicExample from './examples/Basic.svelte';
import options from './options';

const testTarget = document.getElementById('testTemplate');
const componentName = Tag.name;

test(`${componentName}: displays default slot text`, async (t) => {
  const tabLabel = 'xxxxx';

  const tag = new BasicExample({
    target: testTarget,
    props: {
      tabLabel,
      iconData: null
    }
  });  

  t.equal(testTarget.querySelector('.text').textContent, tabLabel);
  
  tag.$destroy();
});

test(`${componentName}: has correct background colour`, async (t) => {
  const backgroundColour = 'rgb(255, 0, 0)';

  const tag = new Tag({
    target: testTarget,
    props: {
      backgroundColour
    }
  }); 
  
  t.equal(getComputedStyle(testTarget.querySelector('.tag')).backgroundColor, backgroundColour);

  tag.$destroy();
});

test(`${componentName}: has correct text colour`, async (t) => {
  const color = 'rgb(0, 0, 0)';

  const tag = new Tag({
    target: testTarget,
    props: {
      color
    }
  }); 
  
  t.equal(getComputedStyle(testTarget.querySelector('.tag')).color, color);

  tag.$destroy();
});

test(`${componentName}: has icon before text`, async (t) => {
  const tag = new BasicExample({
    target: testTarget,
    props: {
      iconPosition: options.iconPosition.LEFT
    }
  }); 
  
  t.ok(getComputedStyle(testTarget.querySelector('.text')).order > getComputedStyle(testTarget.querySelector('.icon')).order);

  await wait(0);

  tag.$destroy();
});

test(`${componentName}: has icon after text`, async (t) => {
  const tag = new BasicExample({
    target: testTarget,
    props: {
      iconPosition: options.iconPosition.RIGHT
    }
  }); 

  await wait(0);
  
  t.ok(getComputedStyle(testTarget.querySelector('.text')).order < getComputedStyle(testTarget.querySelector('.icon')).order);

  tag.$destroy();
});
