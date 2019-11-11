import { test } from 'tape-modern';

import { wait, simulateClick } from 'helpers';

import Button from './Button.svelte';
import options from './options';
import Basic from './examples/Basic.svelte';
import Icons from './examples/Icons.svelte';
import { ADD } from '../Icon/_iconData';


const testTarget = document.getElementById('testTemplate');
const componentName = Button.name;

test(`${componentName}: basic example renders`, async (t) => {
  const button = new Basic({
    target: testTarget
  });

  t.ok(testTarget.querySelector('.button'));

  button.$destroy();
});

test(`${componentName}: prop 'iconData' renders icon on button`, async (t) => {
  const button = new Button({
    target: testTarget,
    props: {
      iconData: ADD
    }
  });

  t.ok(testTarget.querySelector('.button polygon').getAttribute('points') === ADD.data);

  button.$destroy();
});

test(`${componentName}: prop 'iconPosition' renders icon at correct position`, async (t) => {
  const button = new Icons({
    target: testTarget
  });

  const buttons = testTarget.getElementsByClassName('button');

  t.ok(buttons[0].querySelector('.inner').children[0].innerHTML === 'LARGE');
  t.ok(buttons[1].querySelector('.inner').children[0].classList.contains('icon'));
  const thirdButton = buttons[2].querySelector('.inner').children[0];
  t.ok(getComputedStyle(thirdButton).order === '1');


  button.$destroy();
});

test(`${componentName}: prop 'isActive' adds class and removes pointer events from component`, async (t) => {
  const button = new Button({
    target: testTarget,
    props: {
      isActive: true
    }
  });

  const component = testTarget.querySelector('.button.isActive');
  t.ok(component && getComputedStyle(component)['pointer-events'] === 'none');

  button.$destroy();
});

test(`${componentName}: prop 'isBlock' adds class and 100% width to component`, async (t) => {
  const button = new Button({
    target: testTarget,
    props: {
      isBlock: true
    }
  });
  

  const component = testTarget.querySelector('.button.isBlock');
  t.ok(component && getComputedStyle(component)['width'] === getComputedStyle(testTarget)['width']);

  button.$destroy();
});

test(`${componentName}: prop 'isOutlined' adds class and correct styles to component`, async (t) => {
  const button = new Button({
    target: testTarget,
    props: {
      isOutlined: true
    }
  });

  const component = testTarget.querySelector('.button.isOutlined');
  t.ok(component && getComputedStyle(component)['border-bottom-color'] === 'rgb(81, 206, 108)');

  button.$destroy();
});

test(`${componentName}: prop 'isRounded' adds class and correct styles to component`, async (t) => {
  const button = new Button({
    target: testTarget,
    props: {
      isRounded: true
    }
  });

  const component = testTarget.querySelector('.button.isRounded');
  t.ok(component && getComputedStyle(component)['border-bottom-left-radius'] === '15px');

  button.$destroy();
});

test(`${componentName}: prop 'isSelected' adds class and correct styles to component`, async (t) => {
  const button = new Button({
    target: testTarget,
    props: {
      isSelected: true
    }
  });

  const component = testTarget.querySelector('.button.isSelected');
  t.ok(component && getComputedStyle(component)['background-color'] === 'rgb(52, 132, 69)');

  button.$destroy();
});

test(`${componentName}: prop 'isWaiting' adds spinner to component`, async (t) => {
  const button = new Button({
    target: testTarget,
    props: {
      isWaiting: true
    }
  });

  const component = testTarget.querySelector('.button .spinner');
  t.ok(component);

  button.$destroy();
});

test(`${componentName}: prop 'isWide' adds spinner to component`, async (t) => {
  const button = new Button({
    target: testTarget,
    props: {
      isWide: true
    }
  });

  const component = testTarget.querySelector('.button.isWide');
  t.ok(component && getComputedStyle(component)['padding-left'] === '32px');

  button.$destroy();
});

test(`${componentName}: prop 'isDisabled' disables the component`, async (t) => {
  const button = new Button({
    target: testTarget,
    props: {
      isDisabled: true
    }
  });

  const component = testTarget.querySelector('.button');
  t.ok(component.disabled);

  button.$destroy();
});

test(`${componentName}: prop 'htmlType' applies correct attribute on component`, async (t) => {
  const button = new Button({
    target: testTarget,
    props: {
      htmlType: options.htmlType.BUTTON
    }
  });

  t.ok(testTarget.querySelector('.button').getAttribute('type') === 'button');
  
  button.$set({htmlType: options.htmlType.SUBMIT})

  await wait(0);

  t.ok(testTarget.querySelector('.button').getAttribute('type') === 'submit');

  button.$destroy();
});
