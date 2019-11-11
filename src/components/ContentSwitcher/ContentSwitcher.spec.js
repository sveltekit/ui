import { test } from 'tape-modern';

import { wait, simulateClick } from 'helpers';

import ContentSwitcher from './ContentSwitcher.svelte';
import Icon from '../Icon/Icon.svelte';
import { CAR } from '../Icon/_iconData';

const testTarget = document.getElementById('testTemplate');
const componentName = ContentSwitcher.name;

test(`${componentName}: renders correctly`, async (t) => {
  const contentSwitcher = new ContentSwitcher({
    target: testTarget
  });

  t.ok(testTarget.querySelector('.contentSwitcher'));

  contentSwitcher.$destroy();
});


test(`${componentName}: prop 'items' controls content options`, async (t) => {
  const contentSwitcher = new ContentSwitcher({
    target: testTarget,
    props: {
      items: [
        {
          label: 'Car',
        },
        {
          label: 'Hotel',
        },
        {
          label: 'Flight',
        }
      ]
    }
  });

  t.ok(testTarget.querySelector('.contentSwitcher').getElementsByClassName('contentSwitcher_item').length === 3);

  contentSwitcher.$destroy();
});


test(`${componentName}: props 'ItemIconComponent' and 'items > itemIconProps' adds icons to rendered items`, async (t) => {
  const contentSwitcher = new ContentSwitcher({
    target: testTarget,
    props: {
      ItemIconComponent: Icon,
      items: [
        {
          label: 'Car',
          itemIconProps: {
            iconData: CAR
          }
        },
        {
          label: 'Hotel',
        },
        {
          label: 'Flight',
        }
      ]
    }
  });

  t.ok(testTarget.querySelector('path').getAttribute('d') === CAR.data);

  contentSwitcher.$destroy();
});

test(`${componentName}: props 'activeItem' sets item as active`, async (t) => {
  const contentSwitcher = new ContentSwitcher({
    target: testTarget,
    props: {
      activeItem: {
        label: 'Hotel',
      },
      items: [
        {
          label: 'Car',
          itemIconProps: {
            iconData: CAR
          }
        },
        {
          label: 'Hotel',
        },
        {
          label: 'Flight',
        }
      ]
    }
  });

  t.ok(testTarget.querySelector('.active .contentSwitcher_item_label').innerHTML === 'Hotel');

  contentSwitcher.$destroy();
});

test(`${componentName}: clicking item changes 'activeItem'`, async (t) => {
  const contentSwitcher = new ContentSwitcher({
    target: testTarget,
    props: {
      items: [
        {
          label: 'Car',
          itemIconProps: {
            iconData: CAR
          }
        },
        {
          label: 'Hotel',
        },
        {
          label: 'Flight',
        }
      ]
    }
  });

  testTarget.querySelector('.contentSwitcher').getElementsByClassName('contentSwitcher_item')[1].click();
  await wait(0);
  t.ok(testTarget.querySelector('.active .contentSwitcher_item_label').innerHTML === 'Hotel');

  contentSwitcher.$destroy();
});
