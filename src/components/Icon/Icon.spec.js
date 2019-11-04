import { test } from 'tape-modern';
import { wait, simulateClick } from 'helpers';

import Icon from './Icon.svelte';
import options from './options';
import iconData from './iconData';

const testTarget = document.getElementById('testTemplate');
const componentName = Icon.name;

test(`${componentName}: renders correctly`, async (t) => {
  const icon = new Icon({
    target: testTarget,
    props: {
      type: options.type.HEART
    }
  });

  t.ok(testTarget.querySelector('path').getAttribute('d').trim() === iconData.heart.data.trim());

  icon.$destroy();
});
